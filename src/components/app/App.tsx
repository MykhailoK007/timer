import React from 'react';
import { Timer } from '../timer/Timer';

export const App = () => {
  return (
    <>
      <Timer time={10} autoStart={false} step={1000} />
    </>
  );
};

export default App;
