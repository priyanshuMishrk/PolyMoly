import React, { useState } from "react";
import insta from '../Icons/insta.svg';
import blackBox from '../Icons/blackbox.svg';
import Parikrma from '../Icons/parikrma.svg'

const Footer = ({ contactOn, setContactOn }) => {

    function nava(link){
        window.open(link, "_blank" )
    }

    const [fullName , setFullName] = useState()
    const [mail, setMail] = useState()
    const [mobNum, setMobNum] = useState()
    const  [message , setMessage] = useState()


    async function onSubmit() {
        
        const formData = new FormData();

        if (!fullName || !mail || !mobNum || !message || fullName === '' || mail === '' || mobNum === ''|| message === '' ){
            alert('Please fill all the data first')
        }
        
        formData.append("fullName", fullName);
        formData.append("emailId", mail);
        formData.append("mobileNumber", mobNum);
        formData.append("message" , message)
        formData.append("access_key", "f762de2a-a640-42e2-b8d7-7ce821ad52bd");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
        setContactOn(false)
        setMobNum('')
        setFullName('')
        setMail('')
        setMessage('')
    
        if (data.success) {
        //   setResult("Form Submitted Successfully");
        //   event.target.reset();
        } else {
        //   console.log("Error", data);
        //   setResult(data.message);
        }
      };

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
                                <input type="text" value={fullName} onChange={(e) => {
                                    setFullName(e.target.value)
                                }} className="jjjl" placeholder="Full Name" />
                                <input type="email" value={mail} onChange={(e) => {
                                    setMail(e.target.value)
                                }}  className="jjjl" placeholder="Email" />
                                <input type="Number" value={mobNum} onChange={(e) => {
                                    setMobNum(e.target.value)
                                }}  className="jjjl" placeholder="Mobile Number" />
                                <textarea name="" value={message} onChange={(e) => {
                                    setMessage(e.target.value)
                                    
                                }}  id="" className="jjjl" placeholder="Message" rows="3"></textarea>
                                <span className="jjjl" onClick={onSubmit}>SUBMIT</span>
                            </div>

                    </div>
            </div>}
        </>
    )
}

export default Footer;