
import React, { useRef, useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



const SortableListPage = () => {

    const [people, setPeople] = useState([
        { id: '1', name: 'John', content: 'Item 1' },
        { id: '2', name: 'Clayton', content: 'Item 2' },
        { id: '3', name: 'Mangum', content: 'Item 3' },
    ]);

    // const handleOnDragEnd = (result) => {
    //     if (!result.destination) return;

    //     const newItems = Array.from(items)
    //     const [reorderedItem] = newItems.splice(result.source.index, 1);
    //     newItems.splice(result.destination.index, 0, reorderedItem)

    //     setItems(newItems);

    // }




    return (
        // <DragDropContext onDragEnd={handleOnDragEnd}>
        //     <Droppable droppableId="list">
        //         {(provided) => (
        //             <ul {...provided.droppableProps} ref={provided.innerRef}>
        //                 {items.map((item, index) => (
        //                     <Draggable key={item.id} draggableId={item.id} index={index}>
        //                         {(provided) => (
        //                             <li
        //                                 {...provided.draggableProps}
        //                                 {...provided.dragHandleProps}
        //                                 ref={provided.innerRef}
        //                             >
        //                                 {item.content}
        //                             </li>
        //                         )}
        //                     </Draggable>
        //                 ))}
        //                 {provided.placeholder}
        //             </ul>
        //         )}
        //     </Droppable>
        // </DragDropContext>
        // );

        <>
            <h1>List</h1>
            {people.map((person) => {
                return (
                    <ul>{person.name}</ul>
                )
            })}

        </>
    )

}

export default SortableListPage;