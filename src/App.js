import './App.css';
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import Movies from"./Movies.jsx"
import Footer from "./Footer.jsx"
import ComingSoon from "./ComingSoon.jsx"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Movies></Movies>
      <ComingSoon></ComingSoon>
      <Footer></Footer>
    </div>
  );
}

export default App;