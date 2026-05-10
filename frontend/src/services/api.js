const BASE_URL = 'http://localhost:8000/api/v1';

const getHeaders = () => {
    const token = localStorage.getItem('traveloop_token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    };
};

export const api = {
    async request(endpoint, options = {}) {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                ...getHeaders(),
                ...options.headers,
            },
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({ detail: 'An error occurred' }));
            throw new Error(error.detail || 'Request failed');
        }

        return response.json();
    },

    auth: {
        login: (credentials) => api.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        }),
        register: (userData) => api.request('/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
        }),
    },

    trips: {
        list: () => api.request('/trips/'),
        get: (id) => api.request(`/trips/${id}`),
        create: (tripData) => api.request('/trips/', {
            method: 'POST',
            body: JSON.stringify(tripData),
        }),
    },

    destinations: {
        search: (query) => api.request(`/search/?query=${query}`),
        list: () => api.request('/destinations/'),
    }
};
