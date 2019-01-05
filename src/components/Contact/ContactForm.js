import React, {useCallback, useState} from 'react';
import {empty} from "../../utils";

const projectTypes = [
    'spa',
    'fsa',
    'website'
];

const noValidationErrors = {
    email: '',
    projectType: '',
    details: ''
};

function validateForm(data) {
    let isValid = true;
    let errors = {...noValidationErrors};

    const errorMessages = {
        email: 'Email is required and must be valid.',
        projectType: 'Please select an option.',
        details: 'Description is too short. Please give more info.'
    };

    const keys = Object.keys(data);
    const invalid = keys.filter(key => {
        switch (key) {
            case 'email':
                return !data.email.includes('@');
            case 'projectType':
                return !projectTypes.includes(data.projectType);
            case 'details':
                return data.details.length < 25;
            default:
                return true;
        }
    });

    if (invalid.length > 0) {
        isValid = false;
        invalid.forEach(field => errors[field] = errorMessages[field])
    }

    return [isValid, errors];
}

const ContactForm = React.memo(() => {
    const [formData, setFormData] = useState({
        email: '',
        projectType: '',
        details: ''
    });

    const [validationErrors, setValidationErrors] = useState(noValidationErrors);

    const [waiting, setWaiting] = useState(false);

    const onInputChange = useCallback(e => {
        e.preventDefault();

        if (e.target.name === "email") {
            setFormData({
                ...formData,
                email: e.target.value
            });
            setValidationErrors({
                ...validationErrors,
                email: ''
            });
        }

        if (e.target.name === "details") {
            setFormData({
                ...formData,
                details: e.target.value
            });
            setValidationErrors({
                ...validationErrors,
                details: ''
            });
        }
    }, [formData, validationErrors]);

    const onSelectChange = useCallback(e => {
        e.preventDefault();
        setFormData({
            ...formData,
            projectType: e.target.value
        });
        setValidationErrors({
            ...validationErrors,
            projectType: ''
        })
    }, [formData]);

    const onFormSubmit = useCallback(e => {
        e.preventDefault();

        const [isValid, errors] = validateForm(formData);

        if (isValid) {
            // todo:: post to api
            console.log('valid form!', formData);
            setWaiting(true);
            setTimeout(() => setWaiting(false), 2000);
        } else {
            setValidationErrors(errors);
        }
    }, [formData]);

    return (
        <form className="pure-form pure-form-stacked" onSubmit={onFormSubmit}>
            <fieldset>
                <label id="email-label" htmlFor="email">Where can I reach ya?</label>
                <input
                    onChange={onInputChange}
                    placeholder="john.doe@example.com"
                    autoComplete="email"
                    type="email"
                    name="email"
                    id="email"
                    className="pure-input-1"
                    required
                    disabled={waiting}
                />
                <span
                    className="pure-form-message error"
                    style={empty(validationErrors.email) ? {display: 'none'} : null}
                >{validationErrors.email}</span>
                <select
                    value={formData.projectType}
                    onChange={onSelectChange}
                    name="projectType"
                    className="pure-input-1"
                    disabled={waiting}
                >
                    <option value="" disabled>What kind of project are you looking for?</option>
                    <option value="spa">Single Page Application</option>
                    <option value="fsa">Full Stack Application</option>
                    <option value="website">Static Website (ex. Blog)</option>
                </select>
                <span
                    className="pure-form-message error"
                    style={empty(validationErrors.projectType) ? {display: 'none'} : null}
                >{validationErrors.projectType}</span>
                <textarea
                    onChange={onInputChange}
                    placeholder="Tell me a little about your project"
                    value={formData.details}
                    name="details"
                    className="pure-input-1"
                    required
                    disabled={waiting}
                />
                <span
                    className="pure-form-message error"
                    style={empty(validationErrors.details) ? {display: 'none'} : null}
                >{validationErrors.details}</span>
                <button type="submit" className="pure-button pure-button-primary">Submit</button>
            </fieldset>
        </form>
    );
});

export default ContactForm;