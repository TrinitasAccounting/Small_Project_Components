
import React, { useRef, useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



const SortableListPage = () => {

    const [people, setPeople] = useState([
        { id: '1', name: 'Tim Henry ', content: 'Item 1' },
        { id: '2', name: 'Clayton Bigsby', content: 'Item 2' },
        { id: '3', name: 'Dylan Humphrey', content: 'Item 3' },
        { id: '4', name: 'Sarah Johnson', content: 'Item 4' },
        { id: '5', name: 'Carley Llyodd', content: 'Item 5' },
    ]);



    const dragPerson = useRef(0)
    const draggedOverPerson = useRef(0)

    function handleSort() {
        const peopleClone = [...people]
        const temp = peopleClone[dragPerson.current]
        peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current]
        peopleClone[draggedOverPerson.current] = temp

        setPeople(peopleClone)
    }




    return (

        <div className="center" style={{ backgroundColor: "gray" }}>
            <h1 style={{ color: "white" }}>List</h1>
            {people.map((person, index) => {
                return (
                    <div style={{ border: "solid", width: "200px", marginTop: "10px", backgroundColor: "pink" }}
                        draggable
                        onDragStart={() => (dragPerson.current = index)}
                        onDragEnter={() => (draggedOverPerson.current = index)}
                        onDragEnd={handleSort}
                        onDragOver={(event) => event.preventDefault()}
                    >
                        <p style={{ marginLeft: "10px", padding: "1px", display: "inline-block" }}>{person.name} </p>
                        <p style={{ display: "inline-block", position: 'absolute', right: "60px" }}>&#8645;</p>
                    </div>
                )
            })}

        </div>
    )

}

export default SortableListPage;