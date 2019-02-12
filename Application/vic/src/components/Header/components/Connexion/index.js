import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

import FormConn from './components/FormConn'

class Connexion extends Component { 

	state = {
    	goToProfile : false
  	}

  	goToProfile = (event) => {
  		event.preventDefault()
  		this.setState({ goToProfile: true })
    	const fade = document.getElementsByClassName('modal-backdrop')[0]
    	const body = document.getElementsByTagName('body')[0]
    	body.classList.remove('modal-open')
    	fade.remove()
  	}

	render() {

		if(!this.state.goToProfile){
		return (
			<Fragment>
				<button 
					className="sign-in"
					type="button"
					data-toggle="modal"
					data-target="#conn">

					<FontAwesomeIcon icon={faSignInAlt} />
					Se connecter
				</button>

				{/*Modal pour se connecter*/}
				<div
					className="modal fade modal-conn"
					id="conn"
					tabindex="-1" 
					role="dialog" 
					aria-labelledby="conn"
					aria-hidden="true">
	  				
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
	        					<FormConn profile={this.goToProfile}/> 
	      					</div>
	    				</div>
	  				</div>
				</div>	
			</Fragment>
		)
		}else{
			return (
				<Fragment>
					<a href="/profiljeune" className="identifiant">
						<FontAwesomeIcon icon={faUserCircle} className="fa-2x conn-icon"/>
						Prenom Nom
					</a>
					{/*A retirer lors de la liaison avec la BD*/}
					<Redirect to={'/profiljeune'} ></Redirect>
				</Fragment>
			)
		}
	}
}

export default Connexion