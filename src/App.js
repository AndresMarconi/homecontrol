import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from "react-redux"
import initStore from './reducers/initStore'

import Navigation from './components/Navigation/Navigation'
import Dashboard from './components/Dashboard/Dashboard'
import Category from './components/Categories/Category'
import Destination from './components/Destinations/Destination'

import CssBaseline from '@material-ui/core/CssBaseline';

const store = initStore()

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <CssBaseline />
        <Router>
          <Navigation />
          <Route path="/" exact component={Dashboard} />
          <Route path="/category" component={Category} />
          <Route path="/destination" component={Destination} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
