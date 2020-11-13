import firebase from "firebase"
import "firebase/storage"
import "firebase/firestore"

class Firebase {
    constructor() {
        if(!firebase.apps.length) {
            firebase.initializeApp({
              });
        }
        this.db = firebase.firestore();
        this.storage = firebase.storage();
    }

    getDB() {
        return this.db;
    }

    getStorage() {
        return this.storage;
    }

    async getProducts() {
        const snapshot = await this.db.collection("products").get();
        return snapshot.docs.map(doc => doc.data());
    }

    async getProduct(id) {
        const doc = await this.db.collection("products").doc(id).get();

        if(doc.exists){
            return doc.data();
        } else {
            return {"exists": false}
        }
    }

    async addProduct(id, productName, productPrice, image) {
        const url = await this.uploadImage(id, image);
        this.db.collection("products").doc(id).set({
            name: productName,
            price: productPrice,
            imageURL: url
        });
    }

    async uploadImage(id, image) {
        const ref = this.storage.ref();

        const metadata = {
            contentType: image.type
        };

        return await ref.child("product-images/" + id).put(image,metadata)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                return url;
            })
    }
    
    async addToCart(id) {
        const doc = await this.db.collection("products").doc(id).get();
        this.db.collection("cart").add(doc.data());
    }

    async getCart() {
        const snapshot = await this.db.collection("cart").get();
        return snapshot.docs.map(doc => doc.data());
    }

}

export default Firebase;