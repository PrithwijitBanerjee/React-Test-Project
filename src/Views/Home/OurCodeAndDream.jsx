import React from 'react';
import './OurCodeAndDream.css';

// Import your images from the assets folder
import abstractBackground from '../../assets/codeAndDreamBGImg.jpg';
import mainImage from '../../assets/dream_img1.png';
import thumb1 from '../../assets/dream_img2.png';
import thumb2 from '../../assets/dream_img3.png';
import thumb3 from '../../assets/dream_img4.png';

const OurCodeAndDream = () => {
    return (
        <section
            className="ocad-section"
            style={{ backgroundImage: `url(${abstractBackground})` }}
        >
            <div className="ocad-container">
                {/* Left Column: Text Content */}
                <div className="ocad-left-column">
                    <h1 className="ocad-title">
                        We Code And <br />
                        Bring Dreams <br />
                        To Life
                    </h1>
                    <p className="ocad-description">
                        Turn your imagination into reality through coding! Whether it’s building
                        immersive Roblox worlds or designing fun Scratch games, we help you transform
                        ideas into interactive experiences. Start your coding journey today and
                        create the games of your dreams!
                    </p>
                    <div className="ocad-left-decorations">
                        <div className="ocad-plus-icon">+</div>
                        <div className="ocad-left-square"></div>
                    </div>
                </div>

                {/* Right Column: Image Gallery */}
                <div className="ocad-right-column">
                    <div className="ocad-main-image-wrapper">
                        <img
                            src={mainImage}
                            alt="Main gameplay scene"
                            className="ocad-main-image"
                        />
                        <div className="ocad-pagination">
                            <span className="ocad-dot"></span>
                            <span className="ocad-dot ocad-dot-active"></span>
                            <span className="ocad-dot"></span>
                        </div>
                    </div>
                    <img src={thumb1} alt="Thumbnail 1" className="ocad-thumbnail" />
                    <img src={thumb2} alt="Thumbnail 2" className="ocad-thumbnail" />
                    <img src={thumb3} alt="Thumbnail 3" className="ocad-thumbnail ocad-thumbnail-tall" />

                    <div className="ocad-right-square"></div>
                </div>
            </div>
        </section>
    );
};

export default OurCodeAndDream;