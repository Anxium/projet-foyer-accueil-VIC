import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

const Connexion = ({ isAuth, toggleAuth }) => {
	return isAuth === 'true' ? (
		<div className='identifiant'>
			<span>
				<FontAwesomeIcon icon={faUserCircle} className='fa-2x conn-icon' />
				Prenom Nom
			</span>
			<nav className='menu-profil'>
				<Link to='/profiljeune'>Ton Profil</Link>
				<Link to='/'>Accueil</Link>
				<button onClick={() => toggleAuth('false')}>Se déconnecter</button>
			</nav>
		</div>
	) : (
		<button className='sign-in' type='button' data-toggle='modal' data-target='#conn'>
			<FontAwesomeIcon icon={faSignInAlt} />
			Se connecter
		</button>
	);
};

export default Connexion;
