class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    let options = ['one', 'two', 'three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOptions />
      </div>
    )
  }
}

class Header extends React.Component { // React enforces uppercase class name to differentiate from HTML elements
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
  );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}


class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this); // to keep correct context for 'this'
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.optionText}</p>
      </div>
    )
  }
}

class AddOptions extends React.Component {
  onFormSubmit(e)  {
    e.preventDefault();
    // let option = e.target.elements.option.value.trim();
    // if (option) {
    //   options.push(option);
    //   e.target.elements.options.value = '';
    //   renderReactDOM();
    // }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

const renderReactDOM = () => {
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
}

renderReactDOM();
