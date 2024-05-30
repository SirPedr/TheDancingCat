import React from 'react';
import { Footer } from './components/Footer';
import './global.css';
import { TavernNameGeneratorPage } from './pages/TavernNameGeneratorPage';

function App() {
  return (
    <React.Fragment>
      <TavernNameGeneratorPage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
