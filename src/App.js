import logo from './assets/peter-aiello-logo.svg';
import Accordion from './components/Accordion';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="content">
        <div className="app-description">
          <a href="https://peteraiello.dev" rel="noreferrer" target="_blank"><img src={logo} className="peter-aiello-logo" alt="logo" /></a>
          <h1>Custom React Accordion</h1>
          <p>Choose the section using the Tab key. Press Enter to open. Shift + Tab to go to select the previous section.</p>
        </div>

      <Accordion />
      </div>

      <footer className="footer">
            <p>
              Code on <a href="https://github.com/peteraiello/custom-react-accordion" rel="noreferrer" target="_blank">GitHub</a>
            </p>
      </footer>
    </div>
  );
}

export default App;