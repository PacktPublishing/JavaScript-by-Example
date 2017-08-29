import React from 'react';

const LoadingIndicator = () => (
  <div className={`container`}>
    <img src={require('../../assets/images/loading.gif')} alt="loading-info" className="loadingIndicator" />
  </div>
);

export default LoadingIndicator;
