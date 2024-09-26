import Table from './common/table';
import Tab from './common/tab';
import Card from './common/card';
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Tab} exact />
        <Route path="/table" component={Table} />
        <Route path="/card" component={Card} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
