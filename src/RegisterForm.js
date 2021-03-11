import React, {Component} from 'react';

class RegisterForm extends Component {

  state = {
    validateChars: false,
    validateMin: false,
    validateMaj: false,
    validateNumber: false,
    validateSpecials: false,
    password: '',
    email: '',
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.checkPassword(e.target.value);
  }

  checkPassword = (password) => {
    this.setState({
      validateChars: password.length >= 8,
      validateMin: /[a-z]/.test(password),
      validateMaj: /[A-Z]/.test(password),
      validateNumber: /\d/.test(password),
      validateSpecials: /\W/.test(password)
    });
  }

  render() {
    return (
      <div className="grid grid-cols-12 grid-rows-1 my-20">
        <div
          className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-4 xl:col-span-4 xl:col-start-5 bg-gray-700 text-white p-8 rounded-lg">
          <h3 className="font-bold text-center text-4xl mb-10">Inscription</h3>
          <form>
            <label className="block" htmlFor="email">Adresse email</label>
            <input type="email" placeholder="Entrez une adresse email"
                   name="email"
                   autoComplete="off"
                   value={this.state.email}
                   onChange={this.onChange}
                   className="text-gray-800 border mt-2 w-full py-2 px-4 rounded-md duration-300 outline-none focus:ring"/>

            <label className="block mt-5" htmlFor="password">Mot de passe</label>
            <input type="password" placeholder="Entrez un mot de passe"
                   className="text-gray-800 border mt-2 w-full py-2 px-4 rounded-md duration-300 outline-none focus:ring"
                   name="password"
                   autoComplete="off"
                   value={this.state.password}
                   onChange={this.onChange}/>

            <div className="mt-5 font-semibold">
              <p>
                {this.state.validateChars ? (<i className="fas fa-check text-green-400 mr-4"/>) : (
                  <i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
                <span>8 caractères minimum</span>
              </p>

              <p>
                {this.state.validateMin ? (<i className="fas fa-check text-green-400 mr-4"/>) : (
                  <i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
                <span>1 minuscule minimum</span>
              </p>

              <p>
                {this.state.validateMaj ? (<i className="fas fa-check text-green-400 mr-4"/>) : (
                  <i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
                <span>1 majuscule minimum</span>
              </p>

              <p>
                {this.state.validateNumber ? (<i className="fas fa-check text-green-400 mr-4"/>) : (
                  <i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
                <span>1 chiffre minimum</span>
              </p>

              <p>
                {this.state.validateSpecials ? (<i className="fas fa-check text-green-400 mr-4"/>) : (
                  <i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
                <span>1 caractère spécial minimum</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

}

export default RegisterForm;