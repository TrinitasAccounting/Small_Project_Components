import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import ReactProject2 from "./ReactProject2";
import ReactProjectTodo from "./ReactProject-Todo";
import TimerComponent from "./TImerAndButton_Component/Timer";
import ButtonCounter from "./TImerAndButton_Component/Button";

function App() {

  const [cities, setCities] = useState([]);

  // Delete city function
  const deleteCity = (cityToDelete) => {
    setCities(cities.filter((city) => city !== cityToDelete))
  }




  // Map through the cities array and output each in list format
  let citiesToDisplay = cities.map((city) => (
    <>
      < li > {city.cityName}</li >
      <button onClick={() => deleteCity(city)}>X</button>
    </>
  ))





  return (
    <>
      {/* <h1>Project Client</h1>; */}
      {/* <ReactProject2 /> */}
      {/* <ReactProjectTodo cities={cities} setCities={setCities} />
      <ul>
        {citiesToDisplay}
      </ul> */}
      {/* <TimerComponent /> */}
      <ButtonCounter />
    </>
  )
}

export default App;
