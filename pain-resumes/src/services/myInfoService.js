import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data';

export const myInfoServiceFactory = (token, infoType) => {
    const request = requestFactory(token);

    const postInfo = async (data) => {
        const result = await request.post(`${baseUrl}/${infoType}`, data);

        return result;
    };

    const getInfo = async (ownerID) => {
        const query = encodeURIComponent(`_ownerId="${ownerID}"`);

        const result = await request.get(`${baseUrl}/${infoType}?where=${query}`);

        return result;
    };

    const putInfo = async (infoId, data) => {
        const result = await request.put(`${baseUrl}/${infoType}/${infoId}`, data);

        return result;
    };

    return {
        postInfo
        , getInfo
        , putInfo
    };
};