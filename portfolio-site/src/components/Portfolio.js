import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
    <div>
        <h1>This is the portfolio page.</h1>
        <p>Choose one here: <Link to="/portfolio/1">1st</Link> portfolio or <Link to="/portfolio/2">2nd</Link> portfolio.</p>
    </div>
);

export default Portfolio;