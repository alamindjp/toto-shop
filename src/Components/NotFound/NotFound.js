import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Link to='/'><img src="404-error-page-templates.webp" alt="" /></Link>
        </div>
    );
};

export default NotFound;