
import { useState, useEffect } from "react"


const HomePage = () => {

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
            <h2>id: {dataFetched.id}</h2>
            <h3>title: {dataFetched.title}</h3>
            <h4>body: {dataFetched.body}</h4>
            <button onClick={handleClickOfNextPost} style={{ backgroundColor: 'purple', color: 'white' }}>Next Post</button>

        </>
    )
}

export default HomePage;