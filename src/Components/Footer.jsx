import React from "react";
import insta from '../Icons/insta.svg';
import blackBox from '../Icons/blackbox.svg';
import Parikrma from '../Icons/parikrma.svg'

const Footer = () => {
    return (
        <>
            <div className="footerComponent jjjl">

                <span className="foot1Text">
                    Follow me on
                </span>

                <span className="borderFMO">
                    
                </span>

                <img src={insta} alt="" className="insta1" />

                <img src={blackBox} alt="" className="blackbox" />
                
                <div className="lineInFoot">

                </div>

                <img src={Parikrma} alt="" className="praikrma" />

                <img src={insta} alt="" className="insta2" />

                <span className="ocassionalCopyright">
                    all rights reserved: pollyana academy
                </span>

            </div>
        </>
    )
}

export default Footer;