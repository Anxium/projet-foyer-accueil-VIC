import React, { Component } from 'react'

import './index.scss'
import { Link } from 'react-router-dom';

class Langues extends Component {
	render() {
		return (
			<ul className="choix-langues row d-flex justify-content-center">
				<li><Link to="#" className="active">Fr</Link></li>
				<li><Link to="#">Nl</Link></li>
				<li><Link to="#">Ar</Link></li>
			</ul>
		);
	}
}

export default Langues