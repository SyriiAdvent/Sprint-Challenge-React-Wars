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
  const [data, setData] = useState({});
  const [characters, setCharacters] = useState([]);
  // const [page, setPage] = useState('')
  const [pageBool, setPageBool] = useState(false)


  const pageHandler = e => {
    setPageBool(true)
    // pageBool ? setPageBool(true) : setPageBool(false)
    console.log('I was clicked', pageBool, data)
  }


  useEffect(() => {
    if(pageBool === false) {
      axios(`https://swapi.co/api/people/?page=1`)
      .then(response => {
        // console.log(response.data)
        // setData(response);
        setCharacters(response.data.results)
        setData(response.data)
      })
      .catch(error =>
        console.error(`**Unable to retrieve data from SWAPI**`, error)
      );
    }
     else if(pageBool === true) {
      axios(`${data.next}`)
      .then(response => {
        // console.log(response.data)
        setCharacters(response.data.results)
        setData(response.data);
      })
      .catch(error =>
        console.error(`**Unable to retrieve data from SWAPI**`, error)
      );
    }
  }, [pageBool]);

  // useEffect(() => {
  //   if(pageBool === true) {
  //     axios(data.next)
  //     .then(response => {
  //       // console.log(response.data)
  //       setCharacters(response.data.results)
  //       setData(response);
  //     })
  //     .catch(error =>
  //       console.error(`**Unable to retrieve data from SWAPI**`, error)
  //     );
  //   }
  // }, [pageBool])

  console.log(data.next);
  // console.log(data);
  return (
    <div className="App">
      <Navi next={pageHandler} />
        {/* <button onClick={() => console.log(data)}></button> */}
        {characters.map( (ele, index) => <Cards pageBool={pageBool} data={ele} key={index}/>)}
      {/* <MainContainer >
      </MainContainer> */}
    </div>
  );
};

export default App;
