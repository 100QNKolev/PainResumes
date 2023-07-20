import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { requestFactory } from '../../services/requester';

export const SharedTemplate = () => {
    const { id } = useParams();
    const [templateHtml, setTemplateHtml] = useState('');
    const { get } = requestFactory();

    useEffect(() => {
        const fetchSharedTemplate = async () => {
            try {
                const response = await get(`http://localhost:3030/${id}`);

                if (response) {
                    const templateContent = await response.content;
                    setTemplateHtml(templateContent);
                } else {
                    window.alert('Template not found.');
                }
            } catch (err) {
                window.alert('Error fetching shared template:', err);
            }
        };

        fetchSharedTemplate();
        // eslint-disable-next-line
    }, [id]);

    return (
        <div dangerouslySetInnerHTML={{ __html: templateHtml }} />
    );
};