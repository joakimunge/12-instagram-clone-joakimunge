import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className="App-footer">
			<h5>by <a href="http://github.com/joakimunge">Joakim Unge</a></h5>
			<p className="App-footer__attribution">
				Icons made by <a href="http://www.freepik.com" title="Freepik">
					<strong>Freepik</strong></a> from <a href="https://www.flaticon.com/" title="Flaticon">
						<strong>www.flaticon.com</strong></a> are licensed by 
							<a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">
								<strong>CC 3.0 BY</strong></a>
			</p>
		</footer>
	)
}

export default Footer;