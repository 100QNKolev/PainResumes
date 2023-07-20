import React from 'react';
import ReactDOMServer from 'react-dom/server';
import styles from './ShareButton.module.css';
import { requestFactory } from '../../../../services/requester';

export const ShareButton = ({ component }) => {
    const { post } = requestFactory();

    const handleShare = async () => {
        const componentHtml = ReactDOMServer.renderToStaticMarkup(component);
        const styles = getStylesAsString();

        const response = await post('http://localhost:3030/share-template', {template: componentHtml, styles});

        if (response) {
            const shareLink = await response;
            window.open(shareLink, '_blank');
        }
    };

    const getStylesAsString = () => {
        const styleSheets = document.styleSheets;
        let stylesString = '';

        for (let i = 0; i < styleSheets.length; i++) {
            const styleSheet = styleSheets[i];
            const rules = styleSheet.rules || styleSheet.cssRules;

            for (let j = 0; j < rules.length; j++) {
                stylesString += rules[j].cssText;
            }
        }

        return stylesString;
    };

    return (
        <button className={styles['showSectionBtn']} onClick={handleShare}>Share</button>
    );
};