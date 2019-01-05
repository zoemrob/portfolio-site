import React, {useCallback, useState} from 'react';
import {empty} from "../../utils";
import {postForm} from "../../api";

/** @var {Array<String>} list of valid project types */
const projectTypes = [
    'spa',
    'fsa',
    'website',
    'custom'
];

/** @var {Object} blank template for resetting */
const noValidationErrors = {
    email: '',
    projectType: '',
    details: ''
};

/**
 * Validates form, returns valid status
 * @param data {Object} form data from state
 * @return {Array<Boolean>, <Object>}
 */
function validateForm(data) {
    let isValid = true;
    let errors = {...noValidationErrors};

    // Visible error messages
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

    // if there are errors, map them into the errors object
    if (invalid.length > 0) {
        isValid = false;
        invalid.forEach(field => errors[field] = errorMessages[field])
    }

    return [isValid, errors];
}

/**
 * ContactForm Controlled Form Component
 * memoized
 * @constructor
 */
const ContactForm = React.memo(() => {
    /**
     * @var formData {Object} current state of form
     * @var setFormData {Function} update formData
     */
    const [formData, setFormData] = useState({
        email: '',
        projectType: '',
        details: ''
    });

    /**
     * @function clearForm - sets form state back to initial
     */
    const clearForm = useCallback(() => setFormData({
        email: '',
        projectType: '',
        details: ''
    }), [setFormData]);

    /**
     * @var validationErrors {Object} current state of form validation errors
     * @var setValidationErrors {Function} update validationErrors
     */
    const [validationErrors, setValidationErrors] = useState(noValidationErrors);

    /**
     * @var waiting {Boolean} if api response is pending, used to render form disabled
     * @var setWaiting {Function} used to set waiting status
     */
    const [waiting, setWaiting] = useState(false);

    /**
     * type: 0 = no response, 1 = success, 2 = error
     * @var apiResponse {Object} contains api response status and message
     * @var setApiResponse {Function} sets apiResponse
     */
    const [apiResponse, setApiResponse] = useState({type: 0, message: ''});

    /**
     * @function onInputChange - event handler for input elements, sets formData and resets validationErrors
     */
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

        // always set apiResponse to empty on input change
        setApiResponse({type: 0, message: ''});
    }, [formData, validationErrors]);

    /**
     * @function onSelectChange: event handler for <select> element
     */
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

        // always set apiResponse to empty on select change
        setApiResponse({type: 0, message: ''});
    }, [formData]);

    /**
     * @function onFormSubmit: event handler for form.
     *  validates form, sets errors if invalid, posts data if valid, sets api response
     */
    const onFormSubmit = useCallback(e => {
        e.preventDefault();

        const [isValid, errors] = validateForm(formData);

        if (isValid) {
            console.log('valid form!', formData);
            // disable form while waiting response
            setWaiting(true);

            postForm(formData)
                .then(res => res.json())
                .then(data => {
                    // enable form
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
                    // enable form
                    setWaiting(false);
                    setApiResponse({type: 2, message: 'Connectivity is poor. Check your connection.'});
                });

        } else {
            // if invalid, trigger invalid errors
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
                    value={formData.email}
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