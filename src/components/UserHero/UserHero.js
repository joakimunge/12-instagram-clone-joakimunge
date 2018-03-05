import React from 'react';
import './UserHero.css';

const UserHero = () => {
	return (
		<section className="UserHero">
			<div className="Avatar--huge">
				<img src="https://avatars1.githubusercontent.com/u/24225542?s=460&v=4" width="148px" alt="avatar"/>
			</div>
			<div className="UserHero__info">
				<h3>joakimunge</h3>
				<p><strong>Joakim Unge</strong> dolor sit amet, consectetur adipiscing elit. Aliquam at consequat purus. Quisque commodo turpis sapien, in tincidunt libero posuere vel.</p>
			</div>
		</section>
	)
}

export default UserHero;