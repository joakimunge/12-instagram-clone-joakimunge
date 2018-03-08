import React from 'react';
import { PhotoFeed } from '../containers';

const Home = () => {
    return (
        <div className="Home" style={{display: 'flex', flexDirection: 'column'}}>
            <PhotoFeed />
        </div>
    )
}

export default Home;