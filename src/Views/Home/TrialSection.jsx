import React from 'react'
import './Home.css';
// IMPORTANT: Make sure this path points to the correct envelope image, not the avatar group.
// I've used 'trial-envelope.png' as a placeholder for the correct filename.
import trialEnvelope from '../../assets/visual.png';


const TrialSection = () => {
    return (
        <section className="trial-section">
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
                    <img src={trialEnvelope} alt="Envelope with a letter" />
                </div>
            </div>
        </section>
    )
}

export default TrialSection;