import './Testimonials.css';

// 1. Import your images
import person1 from '../../assets/client1.png';
import person2 from '../../assets/client2.png';
import person3 from '../../assets/client3.png';

// Import the new border/quote images
import borderPink from '../../assets/Union.png'; // Assuming this is the name for the pink/purple one
import borderCyan from '../../assets/Union2.png'; // Assuming this is the name for the cyan/green one
import borderRed from '../../assets/Union3.png';   // Assuming this is the name for the red/pink one


// 2. Define the data for the testimonials
const testimonialsData = [
    {
        id: 1,
        name: 'Amy Farrugia',
        role: 'Game Developer',
        image: person1,
        borderImage: borderPink, // Use the specific border image
        rating: 4,
        colorClass: 'card-pink', // This class will color the profile pic border
    },
    {
        id: 2,
        name: 'Amy Farrugia',
        role: 'Java Developer',
        image: person2,
        borderImage: borderCyan, // Use the specific border image
        rating: 4,
        colorClass: 'card-cyan',
    },
    {
        id: 3,
        name: 'Amy Farrugia',
        role: 'Student',
        image: person3,
        borderImage: borderRed, // Use the specific border image
        rating: 4,
        colorClass: 'card-red', // Changed from pink to red for clarity
    },
];

// Reusable text from the screenshot
const testimonialText = "Duis Aute Irure Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident, Sunt In Culpa Qui Officia Deserunt Mollit Anim Id Est Laborum Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis N.";


// Helper component for rendering stars
const StarRating = ({ rating }) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
        stars.push(
            <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
                &#9733;
            </span>
        );
    }
    return <div className="rating_stars">{stars}</div>;
};


const Testimonials = () => {
    return (
        <div className='testimonial_wrapper'>
            <div className="testimonial_header">
                <h2>Testimonials</h2>
                <p>See what students are saying about our courses.</p>
            </div>

            <div className="testimonials_grid">
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className={`testimonial_card ${testimonial.colorClass}`}>
                        {/* The border image acts as the card's frame */}
                        <img src={testimonial.borderImage} alt="card border" className="card_border_image" />

                        {/* The profile picture is positioned on top */}
                        <img src={testimonial.image} alt={testimonial.name} className="profile_pic" />

                        {/* The content sits inside the frame */}
                        <div className="card_content" style={{
                            marginTop: "15px",
                        }}>
                            <StarRating rating={testimonial.rating} />
                            <p className="testimonial_text">{testimonialText}</p>
                            <div className="author_info">
                                <p className="author_name">{testimonial.name}</p>
                                <p className="author_role">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pagination_dots">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default Testimonials;