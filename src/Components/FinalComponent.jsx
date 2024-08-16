import React from "react";
import face from '../Images/faceOnfoot.png'

const FinalComponent = () => {

    function reder(){
        const url = 'https://www.parikrmafoundation.org/volunteer/';
        window.open(url, "_blank" )
    }

 
    return (
        <>
            <div className="finalComponent">
                <img src={face} alt="" />
                <div className="FCcontent">
                    <span className="FCC1 FHL">
                        5% of all session fees go to the Parikrma Humanity Foundation.
                    </span>
                    <span className="FCC2 jjjl cp" onClick={reder}>
                        <span className="hooooooooooooo">

                        </span>
                        Become a Volunteer
                    </span>
                </div>
            </div>
        </>
    )
}

export default FinalComponent;