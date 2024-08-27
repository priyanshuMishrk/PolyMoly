import React from "react";
import stic1 from '../Icons/yellowCharacter1.svg';
import stic2 from '../Icons/yellowCharacter2.svg';
import stic3 from '../Icons/yellowCharacter3.svg';
import stic4 from '../Icons/yellowCharacter4.svg';

const StickerRow = () => {
    return (
        <div>
            <div className="stickerSection">
                <div className="stickerContent">
                    <div className="sticker">
                        <img src={stic1} alt="" />
                    </div>
                    <div className="stickerText">
                        <div className="STH FHL">
                            Why Pollyana Academy and why now?
                        </div>
                        <div className="STC jjjl">
                        We have climbed many rocky mountains with students around the world for over half a decade now, and thrive on our students happily reaching their peak whilst making friendly maths companions along the way to overcome exam anxiety, and learn to look at the world through a mathematical lens.
                        </div>
                    </div>
                </div>

                <div className="stickerContent gc50">
                    <div className="stickerText">
                        <div className="STH FHL">
                            Coaching and Mentoring Sessions
                        </div>
                        <div className="STC jjjl">
                            While we focus on competitive tests such as the KS2 SATs,
                            11+/13+, and GCSEs, due to the personalised nature of our
                            sessions, you can decide what you’d like to work on and we will
                            help you define your goals accordingly. Your success is shaped
                            by the objectives you set in your mission that drives you.
                        </div>
                    </div>
                    <div className="sticker">
                        <img src={stic2} alt="" />
                    </div>
                </div>

                <div className="stickerContent gc20">
                    <div className="sticker">
                        <img src={stic3} alt="" />
                    </div>
                    <div className="stickerText">
                        <div className="STH FHL">
                            How do we ensure success?
                        </div>
                        <div className="STC jjjl">
                        Our true metric for success is defined when you change your fearful, draining, and unhappy relationship with maths into a transformational, empowering, and happy one by learning to truly notice the mathematical concepts in your life and the world around you. Our success is all based on your initial diagnostic and how we work together in making goals set by yourself at the beginning of your journey into a reality. It really is about Your Goals, Your Program, Your Discipline, Your Power, Your Strength, and Your Future!
                        </div>
                    </div>
                </div>

                <div className="stickerContent gc50 gynoxuuu">
                    <div className="stickerText">
                        <div className="STH FHL">
                            The Maths Diagnostic Clinic
                        </div>
                        <div className="STC jjjl">
                            We aim to diagnose the root issue by uncovering the underlying
                            problem to prescribe a personalised plan of action. Our goal is
                            to achieve your goal by pinpointing exactly what you need and
                            giving you just that.
                        </div>
                    </div>
                    <div className="sticker">
                        <img src={stic4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StickerRow;