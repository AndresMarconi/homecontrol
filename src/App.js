import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Dashboard from './components/Dashboard/Dashboard'
import Category from './components/Categories/Category'
import Destination from './components/Destinations/Destination'

import CssBaseline from '@material-ui/core/CssBaseline';




function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Navigation />
        <Route path="/" exact component={Dashboard} />
        <Route path="/category" component={Category} />
        <Route path="/destination" component={Destination} />
      </Router>
    </div>
  );
}

export default App;
