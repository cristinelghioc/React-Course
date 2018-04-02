import React from 'react';

const IndividualPortfolio = (props) => {
    console.log(props);
    return (
        <div>
            <h1>This is the {props.match.params.id}{props.match.params.id == 1 ? 'st' : 'nd'} portfolio.</h1>
            I've done in this project a lot of things, I could talk about it for hours.
        </div>
    );
};

export default IndividualPortfolio;