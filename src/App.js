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
    document.body.classList.remove("light");
    document.body.classList.remove("warning");
    document.body.classList.remove("success");
    document.body.classList.remove("dark");
    document.body.classList.remove("danger");
    document.body.classList.remove("primary");
  };
  const toggleMode = (cls) => {
    if (cls === "switchMode") {
      if (mode === "dark") {
        setMode("light")
      } else {
        setMode("dark")
      }
    };
    if (mode === "light") {
      removeBgClass()
      document.body.style.backgroundColor = "white";
    } else {
      
      removeBgClass();
      document.body.classList.add("bg-" + cls);
    }
  };


  const [mode, setMode] = useState("light");

  return (
    <>
    
    <Router>
      

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/" element={<> <TextForm mode={mode} /></>} />

            

            <Route exact path="/about" element={<About />}/>

            
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
