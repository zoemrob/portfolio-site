import React from 'react';
import ContactForm from './ContactForm';
import '../../styles/Contact.css';

const Contact = () => (
    <main>
        <div className="tidbit">
            <h2>Looking for project help?
                <span>Look no more.</span>
            </h2>
        </div>
        <div className="form-container">
            <ContactForm />
        </div>
    </main>
);

export default Contact;