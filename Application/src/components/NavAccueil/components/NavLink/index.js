import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class NavLink extends Component {
	render() {
		return (
			<Link className='nav-link' to='#'>
				{this.props.link}
			</Link>
		);
	}
}

export default NavLink;
