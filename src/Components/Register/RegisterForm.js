import React from 'react';
import CheckRegisterForm from "./CheckRegisterForm";

export default class RegisterForm extends React.Component {

  state = {
    password: '',
    confirmPassword: '',
    validateChars: false,
    validateMin: false,
    validateMaj: false,
    validateNumber: false,
    validateSpecials: false,
    validatePassword: false,
    samePassword: false,
    email: '',
    validateEmail: false,
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });

    switch (e.target.name) {
      case 'password':
        this.checkPassword(e.target.value);
        break;

      case 'confirmPassword':
        this.checkConfirmPassword(e.target.value);
        break;

      case 'email':
        this.checkEmail(e.target.value);
        break;

      default:
        break;
    }
  }

  checkPassword = password => {
    this.setState({
      validateChars: password.length >= 8,
      validateMin: /[a-z]/.test(password),
      validateMaj: /[A-Z]/.test(password),
      validateNumber: /\d/.test(password),
      validateSpecials: /\W/.test(password),
      validatePassword: password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password) && /\W/.test(password),
      samePassword: (password === this.state.confirmPassword && password.length > 0 && this.state.confirmPassword.length > 0),
    });
  }

  checkConfirmPassword = password => {
    this.setState({
      samePassword: (password === this.state.password && password.length > 0 && this.state.password.length > 0),
    });
  }

  checkEmail = email => {
    this.setState({validateEmail: (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))})
  }

  render() {
    return (
      <div className="reveal-hide grid grid-cols-12 grid-rows-1 my-20">
        <div
          className="reveal-1 col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-4 xl:col-start-5 bg-gradient-to-b from-gray-100 to-gray-300 dark:from-gray-600 dark:to-gray-800 dark:text-white text-gray-900 p-8 rounded-lg">

          {/* Titre */}
          <h3 className="reveal-1 font-bold text-center text-4xl tracking-wide">Inscription</h3>

          {/* Séparation */}
          <hr className="reveal-2 w-1/5 mt-6 mb-8 mx-auto h-1 bg-gray-900 dark:bg-white"/>

          {/* Formulaire */}
          <form>
            {/* Adresse email */}
            <label className="reveal-3 block pl-5 font-medium" htmlFor="email">Adresse email</label>
            <input
              type="email"
              placeholder="Entrez une adresse email"
              className="reveal-3 input input-clair dark:placeholder-gray-400 dark:bg-gray-600 dark:focus:bg-gray-500 dark:focus:placeholder-gray-300"
              name="email"
              autoComplete="off"
              value={this.state.email}
              onChange={this.onChange}
            />

            {/* Password */}
            <label className="reveal-4 block mt-5 pl-5 font-medium" htmlFor="password">Mot de passe</label>
            <input
              type="password"
              placeholder="Entrez un mot de passe"
              className="reveal-4 input input-clair dark:placeholder-gray-400 dark:bg-gray-600 dark:focus:bg-gray-500 dark:focus:placeholder-gray-300"
              name="password"
              autoComplete="off"
              value={this.state.password}
              onChange={this.onChange}
            />

            {/* Confirm Password */}
            <label className="reveal-5 block mt-5 pl-5 font-medium" htmlFor="confirmPassword">Confirmation mot de passe</label>
            <input
              type="password"
              placeholder="Veuillez confirmer votre mot de passe"
              className="reveal-5 input input-clair dark:placeholder-gray-400 dark:bg-gray-600 dark:focus:bg-gray-500 dark:focus:placeholder-gray-300"
              name="confirmPassword"
              autoComplete="off"
              value={this.state.confirmPassword}
              onChange={this.onChange}
            />

            <CheckRegisterForm
              validateChars={this.state.validateChars}
              validateMin={this.state.validateMin}
              validateMaj={this.state.validateMaj}
              validateNumber={this.state.validateNumber}
              validateSpecials={this.state.validateSpecials}
              samePassword={this.state.samePassword}
            />

            {/* Bouton s'inscrire */}
            <input
              type="submit"
              value="S'inscrire"
              className={`${this.state.validatePassword && this.state.validateEmail && this.state.samePassword ? 'btn-success' : 'btn-error'} reveal-7 btn mt-10 w-full`}
              onClick={e => e.preventDefault()}
            />
          </form>

        </div>
      </div>
    );
  }
}