import React, { useState } from "react";
import PollyMIcon from "./../Icons/pollyMath.svg"
import hamCollasper from "./../Icons/hamburger.svg"
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
    
    function scroller(id){
        const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setPopUp(false)
    }    

    const [popUp , setPopUp] = useState(false)
    return (
        <>
            <div className="head" id="1">
                <img src={PollyMIcon} alt="" />
                <img src={hamCollasper} className="cp" onClick={() => setPopUp(true)} alt="" />
            </div>

            <div className={`headerPopup jjjl ${popUp && 'hedOn'}`}>
                <span className="cp">
                    <CloseIcon fontSize="inherit" onClick={()=> setPopUp(false)}/>
                </span>


                <span className="cp" onClick={() => scroller(1)}>
                    Home
                </span>
                
                
                <span className="cp" onClick={() => scroller(2)}>
                    About
                </span>
                
                
                <span className="cp" onClick={() => scroller(3)}>
                    Volunteer
                </span>


                <span className="cp" onClick={() => scroller(4)}>
                    Contact
                </span>
            </div>
        </>
    )
}

export default Header;