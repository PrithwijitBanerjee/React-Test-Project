import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import './Facqs.css'; // Import the custom CSS

// Import the new single illustration from the assets folder
import faqIllustration from '../../assets/7191139_3568950 1.png';

// Data for the FAQ items (remains unchanged)
const faqData = [
    {
        question: 'Vestibulum dictum ex sit amet pulvinar laoreet.',
        answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis mollis malesuada eros vel semper.'
    },
    {
        question: 'What we like to do & what we don\'t like to do',
        answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis mollis malesuada eros vel semper.'
    },
    {
        question: 'Integer tristique nisi sit amet consequat pharetra.',
        answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis mollis malesuada eros vel semper.'
    },
    {
        question: 'Quisque quis ex eleifend dolor maximus lacinia.',
        answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis mollis malesuada eros vel semper.'
    },
    {
        question: 'Mauris ullamcorper tortor sed purus interdum.',
        answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis mollis malesuada eros vel semper.'
    },
    {
        question: 'Fermentum efficitur est dictum.',
        answer: 'Nam sit amet neque auctor, dignissim augue eu, condimentum justo. Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et enim ex. Suspendisse potenti. Vivamus convallis mollis malesuada eros vel semper.'
    }
];

// Reusable Accordion Item component (remains unchanged)
const AccordionItem = ({ item, index, openIndex, setOpenIndex }) => {
    const isOpen = index === openIndex;

    const handleToggle = () => {
        setOpenIndex(isOpen ? null : index);
    };

    return (
        <div className="faq-accordion-item">
            <div
                className={`faq-question-header ${isOpen ? 'active' : ''}`}
                onClick={handleToggle}
            >
                <p className="faq-question-text">{item.question}</p>
                <span className="faq-icon">
                    {isOpen ? <FaTimes /> : <FaPlus />}
                </span>
            </div>
            {/* The answer panel structure now correctly matches the screenshot's styling needs */}
            <div className={`faq-answer-panel ${isOpen ? 'open' : ''}`}>
                <div className="faq-answer-content">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};

const Facqs = () => {
    // Set the second item (index 1) to be open by default as in the screenshot
    const [openIndex, setOpenIndex] = useState(1);

    return (
        <section className="faq-section-container">
            <div className="faq-content-wrapper">
                {/* Left Panel */}
                <div className="faq-left-panel">
                    <h2 className="faq-title">FAQs</h2>
                    <p className="faq-description">
                        Find answers to frequently asked questions about our courses and company.
                    </p>
                    {/* Replaced the old image cluster with the new single illustration */}
                    <div className="faq-image-container">
                        <img src={faqIllustration} alt="Illustration of a large question mark with decorative plants" className="faq-left-image" />
                    </div>
                </div>

                {/* Right Panel */}
                <div className="faq-right-panel">
                    <div className="faq-accordion-container">
                        {faqData.map((item, index) => (
                            <AccordionItem
                                key={index}
                                item={item}
                                index={index}
                                openIndex={openIndex}
                                setOpenIndex={setOpenIndex}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Facqs;