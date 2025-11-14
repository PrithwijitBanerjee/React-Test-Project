import './Home.css';

// Import assets
import heroBg from '../../assets/banner_background_image.jpg';
import imacMockup from '../../assets/Group 3699.png';
// import robloxGameScreen from '../../assets/roblox-game-screen.jpg';
import robloxLogoWhite from '../../assets/robloxLogoWhite.png';
// import robloxChars from '../../assets/roblox-chars.png';
// import trialEnvelope from '../../assets/avatar_group_icon.png';
import avatarGroupIcon from "../../assets/avatar_group_icon.png"
import OurClients from './OurClients';
import OurCourses from './OurCourses';
import PotentialLearning from './PotentialLearning';
import OurCodeAndDream from './OurCodeAndDream';
import Testimonials from './Testimonials';
import Facqs from './Facqs';
import Trust from './Trust';
import Discover from './Discover';
import TrialSection from './TrialSection';

const Home = () => {
    return (
        <>
            <section className="hero-section" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>
                            Learn to Code
                            <br />
                            Roblox &
                            <br />
                            Scratch Games
                        </h1>
                        <p>
                            Master game development with fun, interactive lessons! Create your
                            own Roblox and Scratch games while learning coding fundamentals.
                            Whether you're a beginner or an aspiring game developer, our step-by-step
                            guidance makes coding easy and exciting. Start building today!
                        </p>
                        <div className="hero-buttons">
                            <button className="btn btn-primary">Get Free Trial</button>
                            <button className="btn btn-secondary">Check Courses</button>
                        </div>
                    </div>
                    <div className="hero-image-area">
                        <div className="imac-container">
                            <img src={imacMockup} alt="iMac Mockup" className="imac-frame" />
                            <div className="imac-screen">
                                {/* <img src={robloxGameScreen} alt="Roblox Game" className="screen-content" /> */}
                                <img src={robloxLogoWhite} alt="Roblox Logo" className="screen-overlay-logo" />
                            </div>
                        </div>
                        <div className="slider-dots">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>
                </div>
                <div className="character-banner">
                    {/* <img src={robloxChars} alt="Roblox Characters" /> */}
                </div>
            </section>
            <div className='avatar_group_container'>
                <img src={avatarGroupIcon} alt='...' style={{
                    width: "100%",

                }} />
            </div>

            <OurClients />
            <OurCourses />
            <PotentialLearning />
            <OurCodeAndDream />
            <Testimonials />
            <Facqs />
            <Trust />
            <Discover />
            {/* <section className="trial-section">
                <div className="trial-box">
                    <div className="trial-text-content">
                        <h2>Start Your Free Trial Today and See the Difference!</h2>
                        <p>Sign up for a free trial and experience the power of our product for yourself.</p>
                        <form className="email-form">
                            <input type="email" placeholder="Your email address..." />
                            <button type="submit">Subscribe</button>
                        </form>
                        <small>Weekly newsletter only. No spam, unsubscribe at any time.</small>
                    </div>
                    <div className="trial-image-content">
                        <img src={trialEnvelope} alt="Envelope with letter" />
                    </div>
                </div>
            </section> */}
            <TrialSection />
        </>
    );
};

export default Home;