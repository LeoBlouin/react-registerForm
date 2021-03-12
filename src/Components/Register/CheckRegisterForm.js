import React from 'react';

export default class CheckRegisterForm extends React.Component {
  render() {
    return (
      <div className="mt-5 font-semibold">

        {/* 8 caractères minimum */}
        <p>
          {this.props.validateChars
            ? (<i className="fas fa-check text-green-600 dark:text-green-400 mr-4"/>)
            : (<i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
          <span>8 caractères minimum</span>
        </p>

        {/* 1 minuscule minimum */}
        <p>
          {this.props.validateMin
            ? (<i className="fas fa-check text-green-600 dark:text-green-400 mr-4"/>)
            : (<i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
          <span>1 minuscule minimum</span>
        </p>

        {/* 1 majuscule minimum */}
        <p>
          {this.props.validateMaj
            ? (<i className="fas fa-check text-green-600 dark:text-green-400 mr-4"/>)
            : (<i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
          <span>1 majuscule minimum</span>
        </p>

        {/* 1 chiffre minimum */}
        <p>
          {this.props.validateNumber
            ? (<i className="fas fa-check text-green-600 dark:text-green-400 mr-4"/>)
            : (<i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
          <span>1 chiffre minimum</span>
        </p>

        {/* 1 caractère spécial minimum */}
        <p>
          {this.props.validateSpecials
            ? (<i className="fas fa-check text-green-600 dark:text-green-400 mr-4"/>)
            : (<i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
          <span>1 caractère spécial minimum</span>
        </p>

        {/* Mots de passes identiques */}
        <p>
          {this.props.samePassword
            ? (<i className="fas fa-check text-green-600 dark:text-green-400 mr-4"/>)
            : (<i className="fas fa-times text-red-500 mr-5 ml-0.5"/>)}
          <span>Mots de passes identiques</span>
        </p>
      </div>
    );
  }
}