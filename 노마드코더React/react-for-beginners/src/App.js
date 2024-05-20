import React, { useState, useEffect, createContext } from 'react';
import Children from './Children';

export const AppContext = createContext();

function App() {
  const user = {
    name: '김주민',
    job: '사망년',
  };
  return (
    <div>
      <App.Context.Provider value={user}>
        <div>
          <Children />
        </div>
      </App.Context.Provider>
    </div>
  );
}
export default App;
