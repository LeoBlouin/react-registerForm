import React from 'react';
import './DarkMode.css';

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
        <input type="checkbox" id="darkMode" checked={this.state.darkMode ? 'checked' : ''}/>
        <label htmlFor="darkMode" id="labelDarkMode" onClick={this.switchDarkMode}>
          <i class="far fa-lightbulb"/>
        </label>
      </React.Fragment>
    );
  }
}
