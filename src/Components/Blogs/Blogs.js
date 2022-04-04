import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h3> Q 1. What is Context api ? What does Context work ?</h3>
            <p><span className='span'>Ans:</span> The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. Context provides a way to share values like these between components without having to explicitly pass a prop drilling  through.</p>
            <h3>Q 2. What is semantic tag ?</h3>
            <p><span className='span'>Ans:</span> Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. All elements considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            <h3>Q3. What are inline, block, inline-block elements difference ?</h3>
            <p> <span className='span'>Ans:</span><br />
                <span className='span-600'>*Inline:</span> The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height. <br />
                <span className='span-600'>*Block:</span> The element will start on a new line and occupy the full width available. And you can set width and height values. <br />
                <span className='span-600'>*Inline-block:</span> It’s formatted just like the inline element, where it doesn’t start on a new line. But, you can set width and height values.</p>
        </div>
    );
};

export default Blogs;