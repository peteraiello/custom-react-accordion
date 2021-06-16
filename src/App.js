
import logo from './assets/peter-aiello-logo.svg';
import AccordionWrapper from './components/AccordionWrapper'; 
import AccordionItem from './components/AccordionItem';
import './Accordion.css';

function App() {

  const data = [
    {
      "title": "Item 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat nibh. Mauris suscipit arcu at fermentum convallis. Pellentesque consectetur mi in felis maximus posuere."
    },
    {
      "title": "Item 2",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie tellus a maximus tempus. Duis vel leo iaculis, porttitor erat et, posuere erat. Ut blandit."
    },
    {
      "title": "Item 3",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia, nibh imperdiet tempus pharetra, arcu risus aliquet arcu, a auctor ex lacus efficitur purus. Morbi."
    },
    {
      "title": "Item 4",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc feugiat lobortis nibh, eu molestie est placerat non. Donec ornare nisl erat, non imperdiet elit porta."
    }
  ];

  return (
    <div className="App">
      <div className="content">
        <div className="app-description">
          <a href="https://peteraiello.dev" rel="noreferrer" target="_blank"><img src={logo} className="peter-aiello-logo" alt="logo" /></a>
          <h1>Custom React Accordion</h1>
          <p>Choose the section using the Tab key. Press Enter to open. Shift + Tab to go to select the previous section.</p>
        </div>
        <div className="app-wrapper">
          <AccordionWrapper>
            {data.map((item, index) => (
              <AccordionItem key={index} index={index} title={item.title} description={item.description} />
            ))}
          </AccordionWrapper>
        </div>
      </div>
      <footer className="footer">
            <p>Code on <a href="https://github.com/peteraiello/custom-react-accordion" rel="noreferrer" target="_blank">GitHub</a></p>
      </footer>
    </div>
  );
}

export default App;