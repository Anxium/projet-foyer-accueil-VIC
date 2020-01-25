import React from 'react'

const FormConn = ({ toggleAuth }) => {
	const setAuth = e => {
		e.preventDefault()
		toggleAuth(true);

		const fade = document.getElementsByClassName('modal-backdrop')[0]
		const modal = document.getElementsByClassName('modal')[0]
		const body = document.getElementsByTagName('body')[0]

		body.classList.remove('modal-open')
		body.style = "";
		fade.remove()
		modal.remove();

		return null;
	}

	return (
		<form
			onSubmit={setAuth} 
			className="form-conn"
		>
  			<div className="form-group">
  				<input
					  type="email" 
					  name="email"
  					className="form-control"
  					placeholder="Email"/>
  			</div>
  			<div className="form-group">
  				<input 
					  type="password"
					  name="password"
  					className="form-control"
  					placeholder="Mot de passe"/>
  			</div>
  			<div className="form-group form-check">
  				<input
  					type="checkbox"
  					className="form-check-input"
  					id="remember"/>
  				<label 
  					className="form-check-label"
  					htmlFor="remember">
  					Se souvenir de moi
  				</label>
  			</div>

  			<button
  				type="submit"
  				className="btn"
			>
            	Se connecter
        	</button>
		</form>
	);
}

export default FormConn