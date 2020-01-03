import React from 'react';
import Mainpage from './Mainpage';
import Login from './components/LoginComponent/Login';
import AuthSuccess from './components/auth/AuthSuccess';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './components/LoginComponent/signup';

export default class App extends React.Component{

render(){
  return(
    <Router>
    <div>
      <Switch>
      <Route exact path="/" component={Mainpage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route  path="/login/authsuccess/:id" component={AuthSuccess} />
      {/* <Route path="/" component={Mainpage} />
      <Route path="/" component={Mainpage} />
      <Route path="/" component={Mainpage} />     */}
      </Switch>
    </div>
    </Router>
  );
}
}