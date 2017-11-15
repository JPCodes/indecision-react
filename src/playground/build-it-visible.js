let visible = false;
let buttonState = false;
let buttonText = 'Show Details';

const buttonStateChanger = () => {
  if (buttonState === true) {
    buttonState = !buttonState;
    buttonText = 'Show Details';
  } else {
    buttonState = !buttonState;
    buttonText = 'Hide Details';
  }
  render();
}

const toggleVisibility = () => {
  visible = !visible;
  buttonStateChanger();
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{buttonText}</button>
      {buttonState && visible && <p>Hey!</p>}
    </div>
  )
  ReactDOM.render(template, appRoot)
}

render();
