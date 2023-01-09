import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Intro from "./components/Intro";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />

      <div>
        <main>
          <section>
            <div>
              <Intro />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
