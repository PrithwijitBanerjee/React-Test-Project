import React, { useState, useEffect } from 'react';
import './OurCourses.css';
import Logo1 from "../../assets/image 174.png";
import Logo2 from "../../assets/roblox-10 1.png";
import Logo3 from "../../assets/minecraft 1.png";

const coursesData = [
    {
        id: 1,
        logo: Logo1,
        title: 'Scratch Game Design',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        gradientClass: 'card-gradient-1'
    },
    {
        id: 2,
        logo: Logo2,
        title: 'Roblox Game Lvl 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        gradientClass: 'card-gradient-2'
    },
    {
        id: 3,
        logo: Logo3,
        title: 'Minecraft Game Lvl 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        gradientClass: 'card-gradient-3'
    }
];

const OurCourses = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const totalSlides = isMobile ? coursesData.length : Math.ceil(coursesData.length / 3);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Get courses for current slide
    const getCurrentCourses = () => {
        if (!isMobile) {
            return coursesData; // Show all courses on desktop
        }

        // On mobile, show one course per slide
        return [coursesData[currentSlide]];
    };

    return (
        <section className="courses-section">
            <div className="courses-header">
                <h2>
                    Choose The Perfect Course
                    <br />
                    For You
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                </p>
            </div>

            {/* Slider Container */}
            <div className="courses-slider-container">
                {/* Navigation Arrows */}
                {isMobile && (
                    <>
                        <button className="slider-arrow slider-arrow-prev" onClick={prevSlide}>
                            ‹
                        </button>
                        <button className="slider-arrow slider-arrow-next" onClick={nextSlide}>
                            ›
                        </button>
                    </>
                )}

                {/* Courses Container with Slider */}
                <div className="courses-container">
                    {getCurrentCourses().map((course) => (
                        <div key={course.id} className={`course-card ${course.gradientClass}`}>
                            <img src={course.logo} alt={`${course.title} logo`} className="course-logo" />
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="pagination-controls">
                <div className="pagination-dots">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
                <div className="pagination-counter">
                    {currentSlide + 1}/{totalSlides}
                </div>
            </div>
        </section>
    );
};

export default OurCourses;