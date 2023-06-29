import BottomSec from './components/BottomSec';
import SecondSec from './components/SecondSec';
import Topbar from './components/Topbar';
import Home from './pages/Home';
// import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
        
        <Topbar/>
        <Home/>
        <SecondSec/>
        <BottomSec/>
        {/* <Button variant="contained">Hello World</Button> */}
        
    </div>
  );
}

export default App;
