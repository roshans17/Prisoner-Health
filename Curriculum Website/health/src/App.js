import React from "react";
//Gloabl Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import InitialPages from "./Pages/InitialPages";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <GlobalStyle />
      <Nav />
      <InitialPages />
    </div>
  );
}

export default App;
