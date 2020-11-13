const firebase = require("firebase");
require("firebase/storage");
require("firebase/firestore");

class Firebase {
    constructor() {
        if(!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: process.env.REACT_APP_PROJECT_ID,
                authDomain: process.env.REACT_APP_ID,
                databaseURL: process.env.REACT_APP_DATABASE_URL,
                projectId: process.env.REACT_APP_STORAGE_BUCKET,
                storageBucket: process.env.REACT_APP_LOCATION_ID,
                messagingSenderId: process.env.REACT_APP_API_KEY,
                appId: process.env.REACT_APP_AUTH_DOMAIN,
                measurementId: process.env.REACT_APP_MESSAGING_SENDER_ID,
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

    async getItems() {
        const snapshot = await this.db.collection("items").get();
        return snapshot.docs.map(doc => doc.data());
    }

    async getItem(id) {
        const doc = await this.db.collection("items").doc(id).get();

        if(doc.exists){
            return doc.data();
        } else {
            return {"exists": false}
        }
    }

    async addItem(id, itemName, itemPrice, image) {
        const url = await this.uploadImage(id, image);
        this.db.collection("items").doc(id).set({
            name: itemName,
            price: itemPrice,
            imageURL: url
        });
    }

    async uploadImage(id, image) {
        const ref = this.storage.ref();

        const metadata = {
            contentType: image.type
        };

        return await ref.child("item-images/" + id).put(image,metadata)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                return url;
            })
    }
    
    async addToCart(id) {
        const doc = await this.db.collection("items").doc(id).get();
        const cartDoc = await this.db.collection("cart").doc(id).get();
        
        this.db.collection("cart").doc(id).set({
            name: doc.data().name,
            price: doc.data().price,
            imageURL: doc.data().imageURL,
            quantity: (typeof cartDoc.data() === "undefined") ? 1 : (cartDoc.data().quantity + 1)
        });
    }

    async getCart() {
        const snapshot = await this.db.collection("cart").get();
        return snapshot.docs.map(doc => doc.data());
    }

}

module.exports = Firebase;