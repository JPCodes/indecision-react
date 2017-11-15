class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visible: false
    }
  }

  toggleVisibility() {
    this.setState((prevState) => {
      return {
        visible: !this.state.visible
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visible && <p>Woot!</p>}
      </div>
    )
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'));
