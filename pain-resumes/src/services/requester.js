export const requester = async (method, token, url, data) => {
    const options = {};

    if (options.method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json'
            };

            options.body = JSON.stringify(data);
        };
    };

    options.headers = {
        ...options.headers,
        'Access-Control-Allow-Origin': ["http://localhost:3030", "http://localhost:3000"] 
    };

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        };
    };

    const response = await fetch(url, options);

    if (response.status === 404 || response.status === 403) {
        return {};
    }

    try {
        const result = await response.json();
        return result;
    }
    catch (err) {
        return {};
    }
    
};

export const requestFactory = (token) => {
    const get = requester.bind(null, 'GET', token);
    const post = requester.bind(null, 'POST', token);
    const put = requester.bind(null, 'PUT', token);
    const del = requester.bind(null, 'DELETE', token);

    return {
        get
        , post
        , put
        , del
    };
};