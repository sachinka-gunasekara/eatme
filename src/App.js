import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Topbar/>
          <Home/>
          <Footer/>
        </Router>
        
    </div>
  );
}

export default App;
