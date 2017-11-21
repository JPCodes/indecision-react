import React from 'react';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component { // React enforces uppercase class name to differentiate from HTML elements
  state = {
    options: [],
    selectedOption: undefined
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
    let randomNum = Math.floor(Math.random() * this.state.options.length);
    let randomOption = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: randomOption
    }));
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
      localStorage.setItem('options', json);
    }
  };

  confirmOption = () => {
    this.setState(() => ({ selectedOption: false }));
  };

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
          <div className="widget">
            <Options options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption} />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          confirmOption={this.confirmOption}
        />
      </div>
    )
  };
}
