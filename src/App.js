import React, { useEffect } from 'react';
import Calculator from './Calculator';

const App = () => {
  useEffect(() => {
    document.title = "Calculator App";
  }, []);

  return (
    <div>
      <Calculator />
    </div>
  );
};

export default App;