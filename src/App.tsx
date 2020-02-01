import React from 'react';
import Counter from './components/Counter';
import Users from './components/Users';

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter />
      <hr />
      <Users />
    </div>
  );
}

export default App;
