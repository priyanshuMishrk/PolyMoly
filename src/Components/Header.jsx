import React from "react";
import PollyMIcon from "./../Icons/pollyMath.svg"
import hamCollasper from "./../Icons/hamburger.svg"

const Header = () => {
    return (
        <>
            <div className="head">
                <img src={PollyMIcon} alt="" />
                <img src={hamCollasper} alt="" />
            </div>
        </>
    )
}

export default Header;