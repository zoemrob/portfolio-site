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
    //return fields.reduce((field, i) => )
}

const Contact = React.memo(() => {
    const [formData, setFormData] = useState({
        email: '',
        projectType: '',
        details: ''
    });

    const onFormSubmit = useCallback(e => {
        e.preventDefault();
        const [invalidFields, values] = validateForm(formData);

    }, [formData]);

    return (
        <main>
            <div className="tidbit">

            </div>
            <div className="form-container">
                <form>
                    <label htmlFor="email">Where can I reach ya?</label>
                    <input autoComplete="email" type="email" name="email" id="email"/>
                    <select id="projectType">
                        <option value="">What kind of project are you looking for?</option>
                        <option value="spa">Single Page Application</option>
                        <option value="fsa">Full Stack Application</option>
                        <option value="website">Static Website (ex. Blog)</option>
                    </select>
                </form>
            </div>
        </main>
    );
});

export default Contact;