
import React from 'react';
import './Spinner.css'; // Optional if you're styling separately or using Bootstrap

const Spinner = () => {
    return (
        <div id="spinner" className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div>
    );
};

export default Spinner;
