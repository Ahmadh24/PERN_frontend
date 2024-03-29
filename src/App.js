// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from './Components/Background';
// PAGES
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Background />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/websites" element={<Index />} />
            <Route path="/websites/new" element={<New />} />
            <Route exact path="/websites/:id" element={<Show />} />
            <Route path="/websites/:id/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;