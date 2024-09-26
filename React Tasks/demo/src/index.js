import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
// My Components
import Header from './common/header';
import Form from './common/registrationForm';
import Login from './common/loginForm';

// export default class Routes extends Component { 
//   render() {
//         return (
//         <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/technician" exact component={Technician} />
//         </Switch>
//         );
//   }
//   };
ReactDOM.render( <
  React.StrictMode > {
    /* <Header /> */ }

  {
    /* <Form/>  */ } <
  App / >
  <
  /React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();