import React from 'react';
import { AccordionProvider } from './app-state/accordionContext';
import './App.scss';
import Countries from './components/Countries';
// import Users from './components/Users/Users';

function App(): JSX.Element {
  return (
    <div className="app">
      <div className="app__heading">Stackpath App</div>
      <AccordionProvider>
        <Countries />
      </AccordionProvider>
    </div>
  );
}

export default App;
