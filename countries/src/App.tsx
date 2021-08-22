import React from 'react';
import { AccordionProvider } from './context/accordionContext';
import './App.scss';
import Countries from './components/Countries';
import TextLabel from './components/TextLabel';

function App(): JSX.Element {
  return (
    <div className="app">
      <TextLabel type="App-Title" text="Stackpath App" />
      <AccordionProvider>
        <Countries />
      </AccordionProvider>
    </div>
  );
}

export default App;
