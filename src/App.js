import Header from "./components/Header";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import { originals,action, comedy,horror } from "./constants/urls";

function App() {
  return (
    <div className="bg-neutral-950 text-white ">
    <Navbar/>
    <Header/>
    <Movies url={originals} title={'Netflix Originals'}/>
    <Movies url={action} title={'Actions'}/>
    <Movies url={comedy} title={'Comedy'}/>
    <Movies url={horror} title={'Horror'}/>
    
    </div>
  );
}

export default App;
