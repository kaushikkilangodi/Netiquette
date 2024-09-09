import "./App.css";
import "./styles/style.css";
import "./styles/responsive.css";
import "./styles/Header.css";
import "./styles/swiper-bundle.min.css";
import "./styles/bootstrapmin.css";
import "./styles/index.css";
import Post1 from "./components/Posts/Post1";
import Home from "./components/Home";
import Post2 from "./components/Posts/Post2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post1" element={<Post1 />} />
          <Route
            path="/user-centered-design-its-significance-in-web-and-app-development/"
            element={<Post2 />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
