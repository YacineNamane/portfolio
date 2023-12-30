import "./App.css";
import StarEffect from "./Effects/Star";
import Banner from "./components/Banner";
import Home from "./components/Home";
import APropos from "./components/APropos";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="star-container">
          <StarEffect />
          <Banner />
          <Home />

          <APropos />

          <ContactMe />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
