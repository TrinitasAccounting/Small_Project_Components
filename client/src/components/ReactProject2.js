import { useState } from "react";

import './ReactProject2.css';


function ReactProject2() {

    // set form data state
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        age: ""
    })

    const [dataVisible, setDataVisible] = useState(false)

    const [storedFormData, setStoredFormData] = useState({
        username: "",
        fullname: "",
        age: ""
    })


    // function to handle form update
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
        setDataVisible(false)
    }

    // console.log(formData)

    const handleSubmit = (event) => {
        event.preventDefault()
        setDataVisible(dataVisible => !dataVisible)
        setStoredFormData({ ...formData })
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
            <form onSubmit={handleSubmit} class="project-form">
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
                {dataVisible ?
                    <div>
                        <h1>Request Sent to DB with below request data</h1><br />
                        <ul>
                            <li style={{ fontSize: '20px' }}>Username: {storedFormData.username}</li>
                            <li style={{ fontSize: '20px' }}>Fullname: {storedFormData.fullname}</li>
                            <li style={{ fontSize: '20px' }}>Age: {storedFormData.age}</li>
                        </ul>
                    </div> : <></>}
            </div>
        </>
    )
}

export default ReactProject2;