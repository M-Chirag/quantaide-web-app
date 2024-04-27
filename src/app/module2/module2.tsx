// Module1.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Stage1 from './Stage1/index';
import Stage2 from './Stage2/index';

const Module2 = () => {
  const [data, setData] = useState('');

  return (
    <Router>
      <Switch>
        <Route path="/module2/Stage1">
          <Stage1 setData={setData} />
        </Route>
        <Route path="/module2/Stage2">
          <Stage2 data={data} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Module2;
