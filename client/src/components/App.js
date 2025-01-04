import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import ReactProject2 from "./ReactProject2";
import ReactProjectTodo from "./ReactProject-Todo";
import TimerComponent from "./TImerAndButton_Component/Timer";
import ButtonCounter from "./TImerAndButton_Component/Button";

import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import AboutPage from "./Navbar/AboutPage";
import ProfilePage from "./Navbar/ProfilePage";
import HomePage from "./Navbar/HomePage";



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


  // Fetch data component


  const [dataFetched, setDataFetched] = useState("")
  const [index, setIndex] = useState(1)

  // Fetch function from the url provided
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
      .then(res => {
        if (res.ok) {
          res.json().then(data => setDataFetched(data))
        }
      })
  }, [index])

  console.log(dataFetched);


  // function to increment the index
  const handleClickOfNextPost = () => {
    if (index < 6) {
      setIndex(() => index + 1)
    }
    else {
      setIndex(1)
    }
    // setIndex(() => index + 1)
  }

  console.log(index)





  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
        </Routes>
      </Router>
      {/* <h1>Project Client</h1>; */}
      {/* <ReactProject2 /> */}
      {/* <ReactProjectTodo cities={cities} setCities={setCities} />
      <ul>
        {citiesToDisplay}
      </ul> */}
      {/* <TimerComponent /> */}
      {/* <ButtonCounter /> */}
      {/* <h2>id: {dataFetched.id}</h2>
      <h3>title: {dataFetched.title}</h3>
      <h4>body: {dataFetched.body}</h4>
      <button onClick={handleClickOfNextPost} style={{ backgroundColor: 'purple', color: 'white' }}>Next Post</button> */}

    </>
  )
}

export default App;
