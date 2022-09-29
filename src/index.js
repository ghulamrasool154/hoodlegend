import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'



//Pages
import Main from './components/pages/Main'


ReactDOM.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <Switch>
  //       <Route exact path='/' component={Main} />
  //     </Switch>
  //   </BrowserRouter>
  // </React.StrictMode>,
  <Main />,
  document.getElementById('root')
);



