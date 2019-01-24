import React from 'react';
import ContactForm from './ContactForm';
import '../../styles/Contact.css';

const Contact = () => (
    <main>
        <div className="tidbit">
            <h2>Looking for project help?
                <span>Look no more.</span>
            </h2>
            <span className="resume">
                <a href={process.env.PUBLIC_URL + '/resume.pdf'}>
                    Take a look at my resumé.
                </a>
            </span>
        </div>
        <div className="form-container">
            <ContactForm />
        </div>
        <footer className="pure-u">
            <div className="footer">Zoe Robertson - 2018</div>
        </footer>
    </main>
);

export default Contact;