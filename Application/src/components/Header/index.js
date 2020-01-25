import React, { Component } from 'react'

import './index.scss'

import Langues from './components/Langues'
import Connexion from './components/Connexion'
import FormConn from './components/Connexion/components/FormConn';

class Header extends Component {
	state = {
		isAuth: false
	}

	componentDidMount () {
		const authBoolean = localStorage.getItem('isAuth')
		this.setState({ isAuth: authBoolean })
	}
		
	toggleIsAuth = (bool) => {
		localStorage.setItem('isAuth', bool)
		this.setState({ isAuth: bool })
	}

	render() {
		return (
			<>
				<header className="container-fluid fixed-top">
					<div className="row d-flex align-items-center">
						{/*affichage du choix des langues*/}
						<div className="col-md-2">
							<Langues />
						</div>
						{/*affichage Titre de l'application*/}
						<div className="col-md-8 d-flex justify-content-center">
							<h1>
								<a href="/"><span>Srpe</span> - Dashboard</a>
							</h1>
						</div>
						{/*affichage connexion ou profil*/}
						<div className="col-md-2 d-flex justify-content-center">
							<Connexion isAuth={this.state.isAuth} toggleAuth={this.toggleIsAuth} />
						</div>
					</div>
				</header>
				
				{/*Modal pour se connecter*/}
				<div
					className="modal fade modal-conn"
					id="conn"
					tabIndex="-1" 
					role="dialog" 
					aria-labelledby="conn"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="modalcenter">Connecte toi à ton compte</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								{/*Formulaire de connexion*/}
								<FormConn toggleAuth={this.toggleIsAuth} /> 
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Header
