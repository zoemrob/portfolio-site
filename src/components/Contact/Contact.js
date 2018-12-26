import React, {useCallback, useState} from 'react';

const projectTypes = [
    'spa',
    'fsa',
    'website'
];

function validateForm(data) {
    let vals = data.values();
    const keys = data.keys();
    const invalid = keys.filter(key => {
        switch (key) {
            case 'email':
                return !data.email.includes('@');
            case 'projectType':
                return !projectTypes.includes(data.projectType);
            case 'details':
                return data.details.length < 5;
            default:
                return true;
        }
    });

    if (invalid.length > 0) {
        vals = invalid.map(inval => data[inval]);
    }

    return [invalid, vals];
}

function buildHash(fields, values) {
    return fields.reduce((total, field, i) => {
        return total[field] = values[i];
    }, {})
}

const Contact = React.memo(() => {
    const [formData, setFormData] = useState({
        email: '',
        projectType: '',
        details: ''
    });

    const [validationErrors, setValidationErrors] = useState({
        email: '',
        projectType: '',
        details: ''
    });

    const onInputChange = useCallback(e => {
        e.preventDefault();

        if (e.target.name === "email") {
            setFormData({
                ...formData,
                email: e.target.value
            });
        }

        if (e.target.name === "details") {
            setFormData({
                ...formData,
                details: e.target.value
            })
        }
    }, [formData]);

    const onSelectChange = useCallback(e => {
        e.preventDefault();
        setFormData({
            ...formData,
            projectType: e.target.value
        });
    }, [formData]);

    const onFormSubmit = useCallback(e => {
        e.preventDefault();

        const [invalidFields, values] = validateForm(formData);
        if (invalidFields.length > 0) {
            setValidationErrors(buildHash(invalidFields, values));
        } else {

        }
    }, [formData]);

    return (
        <main>
            <div className="tidbit">

            </div>
            <div className="form-container">
                <form onSubmit={onFormSubmit}>
                    <label htmlFor="email">Where can I reach ya?</label>
                    <input onChange={onInputChange} placeholder="john.doe@example.com" autoComplete="email" type="email" name="email" id="email"/>
                    <select value={formData.projectType} onChange={onSelectChange} name="projectType">
                        <option value="">What kind of project are you looking for?</option>
                        <option value="spa">Single Page Application</option>
                        <option value="fsa">Full Stack Application</option>
                        <option value="website">Static Website (ex. Blog)</option>
                    </select>
                    <textarea onChange={onInputChange} placeholder="Tell me a little about your project" value={formData.details} name="details"/>
                </form>
            </div>
        </main>
    );
});

export default Contact;