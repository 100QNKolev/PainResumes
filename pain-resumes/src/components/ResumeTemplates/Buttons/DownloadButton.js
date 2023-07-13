import React from 'react';
import ReactDOMServer from 'react-dom/server';

import html2pdf from 'html2pdf.js';

import styles from './DownloadButton.module.css';

export const DownloadButton = ({ component, fileName }) => {
  const handleDownload = () => {
    console.log(component);
    const componentHtml = ReactDOMServer.renderToStaticMarkup(component);

    const element = document.createElement('div');
    element.innerHTML = componentHtml;

    html2pdf().from(element).save(fileName);
  };

  return <button className={styles['showSectionBtn']} onClick={handleDownload}>Download</button>;
};