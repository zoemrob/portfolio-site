const api = process.env.NODE_ENV !== 'production' ? 'http://localhost:3001' : 'https://portfolio-email-api.now.sh';

export function postForm(formData) {
    return fetch(api, {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
}