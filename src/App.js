import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";

function App() {
  const removeBgClass = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
  };
  const toggleMode = async (cls) => {
    removeBgClass();
    document.body.classList.add("bg-" + cls);
    console.log(document.body.classList);
    if (cls !== "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  const [mode, setMode] = useState("light");

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  {" "}
                  <TextForm mode={mode} />
                </>
              }
            />

            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
    // <>
    // <Router>
    //   <Navbar
    //     mode={mode}
    //     toggleMode={toggleMode}
    //     theme={theme}
    //     settheme={settheme}
    //     changeTheme={changeTheme}
    //   />
    //   <div className="container">
    //     <Routes>
    //       <Route exact path="/" element={<TextForm mode={mode} />}></Route>

    //       <Route exact path="/about" element={<About />}></Route>
    //     </Routes>
    //   </div>
    //   </Router>
    // </>
  );
}

export default App;
