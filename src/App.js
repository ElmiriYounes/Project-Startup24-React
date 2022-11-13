import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./globalStyles";

function App() {
  console.log(window.location.hostname);
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path={
            window.location.hostname.substring(0, 9) === "localhost"
              ? "/"
              : "/Project-Startup24-React"
          }
          exact
          element={<HomePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
