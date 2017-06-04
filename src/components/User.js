import React from 'react';

export const User = (props) => {

    const { user } = props;

    return (
        <div className="main">
            <div className="user">
                <h3>NAME: {user.name}</h3>
                <h4>AGE: {user.age}</h4>
            </div>
            <div>
                <button onClick={() => props.changeName('Tien, Le Huu')}>HERE THEY ARE</button>
            </div>
        </div>
    );

};