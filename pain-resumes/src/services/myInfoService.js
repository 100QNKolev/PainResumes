import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data';

export const myInfoServiceFactory = (token, infoType) => {
    const request = requestFactory(token);

    const postInfo = async (data, ownerID) => {
        const result = await request.post(`${baseUrl}/${infoType}/${ownerID}`, data);

        return result;
    };

    const getInfo = async (userId) => {
        const result = await request.get(`${baseUrl}/${infoType}/${userId}`);

        return result;
    };

    const putInfo = async (infoId, data) => {
        const result = await request.put(`${baseUrl}/${infoType}/${infoId}`, data);

        return result;
    };

    const deleteInfo = async (infoId) => {
        const result = await request.del(`${baseUrl}/${infoType}/${infoId}`);

        return result;
    };

    return {
        postInfo
        , getInfo
        , putInfo
        , deleteInfo
    };
};