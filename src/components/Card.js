import React from 'react';

const Card = ({ name, email, id }) => { // destructuring props
    return (
        <div className='bg-animate hover-bg-light-gray bg-lightest-blue dib br4 pa3 ma2 bw2 shadow-5'>
            <img alt='a robot' src={`https://robohash.org/${id}`}
             />
            <div>
                <h2 className='navy'>{name}</h2>
                <a className="link blue underline-hover hover-navy" href={`mailto:${email}`}>{email}</a>
            </div>
        </div>
    );
}

export default Card;