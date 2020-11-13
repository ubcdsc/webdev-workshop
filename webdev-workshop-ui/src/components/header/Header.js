import React from 'react'
import './Header.css'
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import logo from "../../images/fanjoy.jpg";

function Header() {
    return (
    <div className="header">
      <div className="header__dehaze">
        <DehazeIcon className="header__dehazeIcon" />
      </div>

      <div>
        <img className="header__logo" src={logo} alt="" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLine">CAD$</span>
        </div>
        <ExpandMoreOutlinedIcon fontSize="small" className="header__expandIcon" />

        <div className="header__option">
          <PersonOutlineOutlinedIcon  className="header__accountIcon"/>
        </div>

        <div className="header__option">
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__option">
          <LocalMallOutlinedIcon className="header__BasketIcon"/>
          {/* <span className="header_optionLineTwo header__basketCount">0</span> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
