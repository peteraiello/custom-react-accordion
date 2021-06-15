
import React, { useState } from 'react';
import logo from './assets/peter-aiello-logo.svg';
/* Accordion specific */
import data from './data.json';
import Accordion from './components/Accordion';
import AccordionWrapper from './components/AccordionWrapper'; 
import AccordionItem from './components/AccordionItem';
import AccordionTitle from './components/AccordionTitle';
import AccordionPanel from './components/AccordionPanel';
import './Accordion.css';

function App() {

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
              <AccordionItem index={0} title={'item 1'} description={'lorem ipsum'} />
              <AccordionItem index={1} title={'item 2'} description={'lorem ipsum'} />
              <AccordionItem index={2} title={'item 3'} description={'lorem ipsum'} />
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