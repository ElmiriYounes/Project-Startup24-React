import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>

      <GlobalStyle/>
      <Routes>
        <Route path="/Project-Startup24-React" exact element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
