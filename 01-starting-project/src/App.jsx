import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import { createAction } from '@reduxjs/toolkit';

function App() {
  const a = createAction();
  return (
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
