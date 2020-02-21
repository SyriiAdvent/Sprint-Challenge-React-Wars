// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
//MaterialUI Components
import Navi from './components/Navi'
import MainContainer from './components/MainContainer.jsx'
import Cards from './components/Cards'

const App = () => {
  const [data, setData] = useState();
  const [startCharacter, setStartCharacter] = useState('1')

  useEffect(() => {
    axios(`https://swapi.co/api/people/${startCharacter}`)
      .then(response => {
        // console.log(response)
        setData(response);
      })
      .catch(error =>
        console.error(`**Unable to retrieve data from SWAPI**`, error)
      );
  }, []);

  console.log(data);
  return (
    <div className="App">
      <Navi />
        <Cards data={data} />
      <MainContainer >
      </MainContainer>
    </div>
  );
};

export default App;
