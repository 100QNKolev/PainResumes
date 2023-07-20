import { myInfoServiceFactory } from '../services/myInfoService';

export const myInfoUtil = (token) => {

    const onCreateInfo = async (data, type, setter, userId) => {
        const requester = myInfoServiceFactory(token, type);

        const newInfo = await requester.postInfo(data, userId);

        if (Object.keys(newInfo).length > 0) {

            if (type === 'personalDetails') {
                await setter(newInfo);
            }
            else if (type === 'professionalExperience' || type === 'education' || type === 'skills') {
                await setter(x => x.length > 0 ? [...x, newInfo] : [newInfo]);
            };
        }
    };

    const onEditInfo = async (data, type, setter) => {
        const infoId = data._id;
        const requester = myInfoServiceFactory(token, type);

        const editedInfo = await requester.putInfo(infoId, data);

        if (Object.keys(editedInfo).length > 0) {

            if (type === 'personalDetails') {
                await setter(editedInfo);
            }

            else if (type === 'professionalExperience' || type === 'education' || type === 'skills') {
                await setter(state => state.map(x => x._id === infoId ? editedInfo : x));
            };
        }
    };

    const onDeleteInfo = async (infoId, type, setter) => {
        const requester = myInfoServiceFactory(token, type);

        await requester.deleteInfo(infoId);

        if (type === 'professionalExperience' || type === 'education' || type === 'skills') {
            await setter(state => state.filter(x => x._id !== infoId));
        };
    };

    const onGetInfo = async (userId, type) => {
        const requester = myInfoServiceFactory(token, type);

        const result = await requester.getInfo(userId);

        if (type === 'personalDetails') {
            const details = result[0];

            return details;
        }
        else if (type === 'professionalExperience' || type === 'education' || type === 'skills') {
            return result;
        };
    };

    return {
        onCreateInfo
        , onEditInfo
        , onDeleteInfo
        , onGetInfo
    };
};