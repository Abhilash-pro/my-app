import React from 'react';
import Mainpage from './Mainpage';
import Login from './components/LoginComponent/Login';
import AuthSuccess from './components/LoginComponent/AuthSuccess';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default class App extends React.Component{

render(){
  return(
    <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Mainpage} />
      <Route exact path="/login" component={Login} />
      <Route  path="/login/authsuccess/:" component={AuthSuccess} />

      {/* <Route path="/" component={Mainpage} />
      <Route path="/" component={Mainpage} />
      <Route path="/" component={Mainpage} />     */}
      </Switch>
    </div>
    </Router>
  );
}
}