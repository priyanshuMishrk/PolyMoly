import React, { useState } from "react";
import insta from '../Icons/insta.svg';
import blackBox from '../Icons/blackbox.svg';
import Parikrma from '../Icons/parikrma.svg'

const Footer = () => {

    const [contactOn, setContactOn] = useState(false)

    function nava(link){
        window.open(link, "_blank" )
    }

    return (
        <>
            <div className="footerComponent jjjl" id="4">

                <span className="foot1Text">
                    Follow me on
                </span>

                <span className="borderFMO">
                    
                </span>

                {/* <img src={insta} alt="" className="insta1" /> */}

                <img src={blackBox} alt="" className="blackbox" />
                
                <div className="lineInFoot">

                </div>

                <img src={Parikrma} onClick={()=> nava('https://www.parikrmafoundation.org/')} alt="" className="praikrma cp" />

                {/* <img src={insta} alt="" className="insta2" /> */}

                <span className="ocassionalCopyright">
                    all rights reserved: pollyana academy
                </span>

                <span className="ocassionalContactUs cp" onClick={()=> setContactOn(true)}>
                            Get in Touch
                </span>

            </div>


            {contactOn && <div className="contactForm">
                    <div className="spaceEmpty" onClick={ ()=> setContactOn(false)}>

                    </div>

                    <div className="contentFormOfCF">

                            <div className="sayHi jjjl">
                                Say Hi!
                            </div>

                            <div className="linenascPascal">

                            </div>

                            <div className="theForum">
                                <input type="text" className="jjjl" placeholder="Full Name" />
                                <input type="email" className="jjjl" placeholder="Email" />
                                <input type="Number" className="jjjl" placeholder="Mobile Number" />
                                <textarea name="" id="" className="jjjl" placeholder="Message" rows="3"></textarea>
                                <span className="jjjl">SUBMIT</span>
                            </div>

                    </div>
            </div>}
        </>
    )
}

export default Footer;