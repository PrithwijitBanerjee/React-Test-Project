import React from 'react';
import './PotentialLearning.css'; // Make sure to create and link this CSS file

// --- Image URLs ---
// I have extracted the images and hosted them for you.
// You can replace these with your own image assets.
import mainIllustration from '../../assets/Group3706.jpg';
import gamingIcon from '../../assets/Layer_1.png';
import sponsoredIcon from '../../assets/Frame.png';
import partneredIcon from '../../assets/Layer_2.png';
import safetyIcon from '../../assets/Capa_1.png';

// Data for the feature cards
const learningCards = [
    {
        icon: gamingIcon,
        title: 'Gaming Event',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
        borderColor: '#f9a8d4' // Pink
    },
    {
        icon: sponsoredIcon,
        title: 'Sponsored Courses',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
        borderColor: '#a7f3d0' // Light Green
    },
    {
        icon: partneredIcon,
        title: 'Partnered Courses',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
        borderColor: '#fca5a5' // Light Red
    },
    {
        icon: safetyIcon,
        title: 'International Online Safety',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
        borderColor: '#c4b5fd' // Light Purple
    }
];

const PotentialLearning = () => {
    return (
        <div className="learning-container">
            <section className="hero-section2">
                <div className="hero-image-container">
                    <img src={mainIllustration} alt="Children learning to code with fun" />
                </div>
                <div className="hero-text-container">
                    <h1>Unlock Your Potential With Fun Learning</h1>
                    <p>
                        Discover the joy of coding by creating your own games! With interactive
                        lessons in Roblox and Scratch, you'll develop essential programming
                        skills while bringing your creative ideas to life. Perfect for beginners and
                        young innovators—learn, play, and code your way to success!
                    </p>
                </div>
            </section>

            <section className="cards-grid">
                {learningCards.map((card, index) => (
                    <div key={index} className="card" style={{
                        borderColor: card.borderColor,
                        padding: "1rem 1rem"
                    }}>
                        <img src={card.icon} alt={`${card.title} icon`} className="card-icon" />
                        <h3 className="card-title">{card.title}</h3>
                        <p className="card-description">{card.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default PotentialLearning;