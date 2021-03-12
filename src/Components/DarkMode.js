import React from 'react';

export default class DarkMode extends React.Component {

  state = {
    darkMode: false
  }

  switchDarkMode = () => {
    this.setState({
      darkMode: !this.state.darkMode,
    });
  }

  componentDidMount() {
    localStorage.getItem('dark') === 'true'
      ? this.setState({darkMode: true})
      : this.setState({darkMode: false});
  }

  componentDidUpdate() {
    const html = document.querySelector('html');
    this.state.darkMode
      ? html.classList.add('dark')
      : html.classList.remove('dark');
    localStorage.setItem('dark', this.state.darkMode);
  }

  render() {
    return (
      <React.Fragment>
        <button
          className={`${this.state.darkMode ? 'btn-sun' : 'btn-moon'} btn mx-auto block mt-10 focus:outline-none text-lg`}
          onClick={this.switchDarkMode}
        >
          {this.state.darkMode
            ? (<span>Thème clair <i className="fas fa-sun text-yellow-600 ml-2"/></span>)
            : (<span>Thème sombre <i className="fas fa-moon text-gray-200 ml-2"/></span>)}
        </button>
      </React.Fragment>
    );
  }
}