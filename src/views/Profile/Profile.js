import React from 'react';
import { PhotoGrid } from '../../containers';
import { UserHero } from '../../components';

import './Profile.css';

const Profile = () => {
    return (
        <div className="App-Profile">
        	<UserHero />
        	<PhotoGrid />
        </div>
    )
}

export default Profile;