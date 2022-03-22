import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Ok from './components/Ok/Ok';
import Nav from './components/Navbar/Nav';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from '../src/components/Login/Login';




function App() {

  return (
    <div className="App">

      <AuthProvider>


        <Router>
        <Nav></Nav>


        <Switch>
        <PrivateRoute path="/ok">
          <Ok></Ok>
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>
        </Switch>

        
        </Router>
      </AuthProvider>
      

   

    </div>
  );
}

export default App;
