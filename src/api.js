const api = process.env.NODE_ENV !== 'production' ? 'http://localhost:3001' : process.env.PUBLIC_URL;

export function postForm(formData) {
    return fetch(api, {
        //todo:: fix this ish
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(res => res.json());
}