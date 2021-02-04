import logo from './assets/peter-aiello-logo.svg';
import Accordion from './components/Accordion';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="content">
        <div className="app-description">
          <img src={logo} className="peter-aiello-logo" alt="logo" />
          <h3>Custom React Accordion</h3>
        </div>

      <Accordion />
      </div>

      <footer className="footer">
            <p>
              Code on GitHub
            </p>
      </footer>
    </div>
  );
}

export default App;