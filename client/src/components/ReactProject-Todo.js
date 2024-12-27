import { useState } from "react";



function ReactProjectTodo({ cities, setCities }) {

    const [cityFormData, setCityFormData] = useState({
        cityName: ""
    })



    // handleChange function
    const handleChange = (event) => {
        setCityFormData({ ...cityFormData, [event.target.name]: event.target.value })
    }

    // onSubmit function
    const addCities = (event) => {
        event.preventDefault();
        setCities([...cities, cityFormData])
        setCityFormData({
            cityName: ""
        })

    }



    return (
        <>
            <h1>Testing the function output</h1>
            <form onSubmit={addCities}>
                <input type='text' name='cityName' onChange={handleChange} />
                <button type='submit'>Add</button>
            </form>


        </>

    )
}

export default ReactProjectTodo;