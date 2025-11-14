import Slider from 'react-slick';


// Import custom CSS for styling
import './Discover.css';

// Import your images from the assets folder
import blogImg1 from '../../assets/discover_img1.png';
import blogImg2 from '../../assets/discover_img2.png';
import blogImg3 from '../../assets/discover_img3.png';
import blogImg4 from '../../assets/discover_img4.png';

const Discover = () => {
    // Data for the blog post cards
    const blogPosts = [
        {
            id: 1,
            image: blogImg1,
            category: 'Roblox',
            title: 'Sed ut perspiciatis unde omnis',
            date: '18',
            month: 'JAN'
        },
        {
            id: 2,
            image: blogImg2,
            category: 'Roblox',
            title: 'Sed ut perspiciatis unde omnis',
            date: '18',
            month: 'JAN'
        },
        {
            id: 3,
            image: blogImg3,
            category: 'Scratch',
            title: 'Sed ut perspiciatis unde omnis',
            date: '18',
            month: 'JAN'
        },
        {
            id: 4,
            image: blogImg4,
            category: 'Minecraft',
            title: 'Sed ut perspiciatis unde omnis',
            date: '18',
            month: 'JAN'
        },
        // Adding more items to demonstrate the slider
        {
            id: 5,
            image: blogImg1,
            category: 'Roblox',
            title: 'Nemo enim ipsam voluptatem quia',
            date: '15',
            month: 'JAN'
        },
        {
            id: 6,
            image: blogImg3,
            category: 'Scratch',
            title: 'Ut enim ad minima veniam',
            date: '12',
            month: 'JAN'
        }
    ];

    // Settings for the react-slick slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200, // For screens smaller than 1200px
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992, // For screens smaller than 992px
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768, // For screens smaller than 768px
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="discover-blog-section">
            <div className="discover-blog-container">
                <h2 className="discover-blog-main-title">Discover New Blog Posts</h2>
                <p className="discover-blog-subtitle">Stay updated with our latest blog content</p>

                <div className="discover-blog-slider">
                    <Slider {...settings}>
                        {blogPosts.map((post) => (
                            <div key={post.id} className="discover-blog-slide">
                                <div className="discover-blog-card">
                                    <div className="discover-blog-card__image-wrapper">
                                        <img src={post.image} alt={post.title} className="discover-blog-card__image" />
                                        <div className="discover-blog-card__date-badge">
                                            <span className="discover-blog-card__date-day">{post.date}</span>
                                            <span className="discover-blog-card__date-month">{post.month}</span>
                                        </div>
                                    </div>
                                    <div className="discover-blog-card__content">
                                        <p className="discover-blog-card__category">{post.category}</p>
                                        <h3 className="discover-blog-card__title">{post.title}</h3>
                                        <a href="#" className="discover-blog-card__link">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            {/* These decorative elements are styled entirely by the CSS */}
            <div className="discover-blog-bg-dots-left"></div>
            <div className="discover-blog-bg-dots-right"></div>
        </section>
    );
};

export default Discover;