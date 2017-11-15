import React from 'react';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component { // React enforces uppercase class name to differentiate from HTML elements
  state = {
    options: []
  };

  handleDeleteOptions = () => {
    localStorage.clear();
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionPendingDeletion) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionPendingDeletion !== option)
    }))
  };

  handlePick = () => {
    let randomOption = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomOption]);
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter a valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option])}));
  };

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {

    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json)
    }
  };

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
        <Options options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption} />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  };
}
