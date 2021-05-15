import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Navigation from './components/Navigation/Navigation'
import Dashboard from './components/Dashboard/Dashboard'
import Category from './components/Categories/Category'
import Destination from './components/Destinations/Destination'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

import CssBaseline from '@material-ui/core/CssBaseline';




function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <ToastContainer />
        <Navigation />
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/category" component={Category} />
        <Route path="/destination" component={Destination} />
      </Router>
    </div>
  );
}

export default App;
