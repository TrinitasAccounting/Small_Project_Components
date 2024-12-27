import { useState } from "react";


function ReactProject2() {

    // set form data state
    const [formData, setFormData] = useState({
        username: "",
        fullname: "",
        age: ""
    })


    // function to handle form update


    // function to print the form data onsubmit


    return (
        <>
            <h1>Test React Project 2</h1>
            <form>
                <label>Username:
                    <input type="text" value={formData.username} />
                </label>
                <label>Fullname:
                    <input type="text" value={formData.fullname} />
                </label>
                <label>Age:
                    <input type="text" value={formData.age} />
                </label>
            </form>
        </>
    )
}

export default ReactProject2;