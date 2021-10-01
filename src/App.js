import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/Home';
import Popular from './components/Popular';
import Upcoming from './components/Up/Upcoming';
import A from './components/Navbar1';
import Year from './components/Up/Year';
import Foot from './components/Foot';
import Search from './components/Up/Search';

const App = () => {
  return (
    <Router>
     <A/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/findby-popular" component={Popular}/>
       <Route exact path="/findby-upcoming" component={Upcoming}/>
       <Route exact path="/findby-year" component={Year}/>
       <Route exact path="/search" component={Search}/>
     </Switch>
     <Foot/>
    </Router>
  );
}

export default App;
