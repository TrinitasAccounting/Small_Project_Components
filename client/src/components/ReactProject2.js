import { useState } from "react";


function ReactProject2() {

    // set form data state
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        age: ""
    })

    const [dataVisible, setDataVisible] = useState(false)


    // function to handle form update
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
        setDataVisible(false)
    }

    // console.log(formData)


    // function to print the form data onsubmit
    // let dataVisible = false
    // const showData = (dataVisible) => {
    //     dataVisible = !dataVisible
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        setDataVisible(dataVisible => !dataVisible)
        setFormData({
            username: "",
            fullname: "",
            age: ""
        })
        // console.log("Tomatoes")
    }
    console.log(dataVisible)


    return (
        <>
            <h1>Test React Project 2</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input type="text" value={formData.username} onChange={handleChange} name="username" />
                </label>
                <label>Fullname:
                    <input type="text" value={formData.fullname} onChange={handleChange} name="fullname" />
                </label>
                <label>Age:
                    <input type="text" value={formData.age} onChange={handleChange} name="age" />
                </label>
                <button type="submit">Submit</button>
            </form>
            <div>
                {dataVisible ? <h1>Request Sent to DB with below request data</h1> : <></>}
            </div>
        </>
    )
}

export default ReactProject2;