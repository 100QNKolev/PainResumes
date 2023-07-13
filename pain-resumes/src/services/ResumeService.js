import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/templates';

export const resumeServiceFactory = (token) => {
    const request = requestFactory(token);

    const create = async (data) => {
        const result = await request.post(baseUrl, data);

        return result;
    };

    const getOne = async (resumeId) => {
        return await request.get(`${baseUrl}/${resumeId}`);
    };

    const deleteResume = async (resumeId) => {
        await request.del(`${baseUrl}/${resumeId}`);
    };
    
    const edit = (resumeId, data) => {
        return request.put(`${baseUrl}/${resumeId}`, data);
    };

    const getByUser = async (userId) => {
        const query = encodeURIComponent(`_ownerId="${userId}"`);

        const result = await request.get(`${baseUrl}?where=${query}`);

        return result;
    };

    return {
        getOne,
        create,
        deleteResume,
        edit,
        getByUser,
    };
};