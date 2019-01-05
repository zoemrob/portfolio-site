import React, {useCallback, useState} from 'react';
import {empty} from "../../utils";
import {postForm} from "../../api";

const projectTypes = [
    'spa',
    'fsa',
    'website',
    'custom'
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

    const clearForm = useCallback(() => setFormData({
        email: '',
        projectType: '',
        details: ''
    }), [setFormData]);

    const [validationErrors, setValidationErrors] = useState(noValidationErrors);
    const [waiting, setWaiting] = useState(false);
    // 0 = empty, 1 = success, 2 = error
    const [apiResponse, setApiResponse] = useState({type: 0, message: ''});

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
        setApiResponse({type: 0, message: ''});
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
        });
        setApiResponse({type: 0, message: ''});
    }, [formData]);

    const onFormSubmit = useCallback(e => {
        e.preventDefault();

        const [isValid, errors] = validateForm(formData);

        if (isValid) {
            console.log('valid form!', formData);
            setWaiting(true);

            postForm(formData)
                .then(data => {
                    setWaiting(false);
                    if (data.err) {
                        console.log('error', data);
                        setApiResponse({type: 2, message: 'Hmm... something went wrong, please verify a valid email address.'});
                        return;
                    }
                    setApiResponse({type: 1, message: data.message});
                    clearForm();
                })
                .catch(e => {
                    console.log(e);
                    setApiResponse({type: 2, message: 'Connectivity is poor. Check your connection.'});
                });

        } else {
            setValidationErrors(errors);
        }
    }, [formData]);

    return (
        <form className="pure-form pure-form-stacked" onSubmit={onFormSubmit}>
            {(!waiting && apiResponse.type !== 0) && (
                <div className="pure-g">
                    <div className={apiResponse.type === 1 ? 'pure-u-1 api-success' : 'pure-u-1 api-error'}>{apiResponse.message}</div>
                </div>
            )}
            <fieldset>
                <label id="email-label" htmlFor="email">Where can I reach you?</label>
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
                    <option value="custom">Something else</option>
                </select>
                <span
                    className="pure-form-message error"
                    style={empty(validationErrors.projectType) ? {display: 'none'} : null}
                >{validationErrors.projectType}</span>
                <textarea
                    onChange={onInputChange}
                    placeholder="Tell me a little about your project."
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
                <button
                    type="submit"
                    className="pure-button pure-button-primary"
                    disabled={waiting}
                >Submit</button>
            </fieldset>
        </form>
    );
});

export default ContactForm;