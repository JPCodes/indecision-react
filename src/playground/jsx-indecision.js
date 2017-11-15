console.log('app.js');

// JSX JavaScript XML
const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderReactDOM();
  }
}

const removeAll = () => {
  app.options = [];
  renderReactDOM();
}

const makeDecision = () => {
  const randomNumGen = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumGen];

  console.log(option);
}

// react dom elements - supported html elements
// react dom events - SyntheticEvent

const appRoot = document.getElementById('app');

const numbers = [1, 2, 3, 55, 11];

const renderReactDOM = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'There are options' : 'There are no options'}</p>
      <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All Options</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot)
}

renderReactDOM();
