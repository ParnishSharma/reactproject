

import Home from "./components/Home";
import About from "./components/About.js"
import Interests from "./components/Interests"
import More from "./components/More"
import Navbar from "./components/Navbar";
import {
  Routes,
  Route,
} from 'react-router-dom';



const App = () => {
  return (
<>  
   <Navbar/>
  
   
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/interests" element={<Interests/> } />
        <Route exact path="/more" element={<More/> } />
      </Routes>
</>
  );
}

export default App;
