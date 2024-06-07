import './App.css';
import HomePage from './pages/HomePage';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className=" selection:bg-color2/90 hover:selection:bg-color2 selection:text-color4 ">
     <HomePage/>
    </div>
  );
}

export default App;
