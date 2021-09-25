import React, { useState } from "react";
import './App.css'

import Footer from "./Footer";
import Projects from "./Projects/Projects"
import Header from "./Header";
import Home from "./Home/Home";

// import Footer from "./Components/Footer";

export default function App() {

  const [showContent, setShowContent] = useState('Home');

  return (
    <div className="App">
      <Header setShowContent={setShowContent} />

      {showContent === "Home" &&
        <Home />}

      {showContent === "Projects" &&
        <Projects />
      }

      <Footer />
    </div>

  )
}




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
