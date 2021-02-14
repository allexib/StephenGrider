import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 0btQdUsYthYB0uQnF00jwemNpvBRGTlH8ASf4ZpI-54'
    }
});

