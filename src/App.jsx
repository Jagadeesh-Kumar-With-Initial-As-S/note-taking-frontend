import "./App.css";
import Ad from "./ad";
import { Navbar } from "./components/Homepage/Navbar";
import AllRoutes from "./routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <Ad />
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
