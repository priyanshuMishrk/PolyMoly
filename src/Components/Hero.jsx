import React, { useEffect } from "react";
import Group1 from '../Images/Group-2.png'
import Group2 from '../Images/Group.png'
import Group3 from '../Images/Group-1.png'
import Group4 from '../Images/Group-3.png'
import Group5 from '../Images/Group-7.png'
import Group6 from '../Images/Group-5.png'
import Group7 from '../Images/Group-6.png'
import Group8 from '../Images/Group-4.png'
import { useState } from "react";

const Hero = () => {


    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(3);
    const [number3, setNumber3] = useState(8);
    const [number4, setNumber4] = useState(5);


    useEffect(() => {
        const intervalId = setInterval(() => {
            const newNumbers = [];
            for (let i = 0; i < 4; i++) {
                const randomNumber = Math.floor(Math.random() * 8) + 1;
                newNumbers.push(randomNumber);
            }
            setNumber1(newNumbers[0])
            setNumber2(newNumbers[1])
            setNumber3(newNumbers[2])
            setNumber4(newNumbers[3])
        }, 2000); // Change numbers every second

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <div className="heroSection" id="1">
                <div className="title FHL">
                    Welcome to Pollyana Academy Bespoke Learning
                </div>
                <div className="descr jjjl">
                    Your Trusted Partner in navigating the world of Mathematics.
                </div>
                <img src={Group1} className={`imagessss img1 ${(number1 === 1 || number2 === 1 || number3 === 1 || number4 === 1) ? 'visibleImg' : ''}`} alt="" />
                <img src={Group2} className={`imagessss img2 ${(number1 === 2 || number2 === 2 || number3 === 2 || number4 === 2) ? 'visibleImg' : ''}`} alt="" />
                <img src={Group3} className={`imagessss img3 ${(number1 === 3 || number2 === 3 || number3 === 3 || number4 === 3) ? 'visibleImg' : ''}`} alt="" />
                <img src={Group4} className={`imagessss img4 ${(number1 === 4 || number2 === 4 || number3 === 4 || number4 === 4) ? 'visibleImg' : ''}`} alt="" />
                <img src={Group5} className={`imagessss img5 ${(number1 === 5 || number2 === 5 || number3 === 5 || number4 === 5) ? 'visibleImg' : ''}`} alt="" />
                <img src={Group6} className={`imagessss img6 ${(number1 === 6 || number2 === 6 || number3 === 6 || number4 === 6) ? 'visibleImg' : ''}`} alt="" />
                <img src={Group7} className={`imagessss img7 ${(number1 === 7 || number2 === 7 || number3 === 7 || number4 === 7) ? 'visibleImg' : ''}`} alt="" />
                <img src={Group8} className={`imagessss img8 ${(number1 === 8 || number2 === 8 || number3 === 8 || number4 === 8) ? 'visibleImg' : ''}`} alt="" />
            </div>
        </>
    )
}

export default Hero;