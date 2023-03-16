import Notes from "./Notes";
import Addnotes from "./Addnotes";
import './Notestyle.css';
import { useState } from "react";


/* const Notedata = [
    { date: "03/10/2023", title: "React tutorial", discription: "discription" },
    { date: "03/11/2023", title: "Javascript", discription: "discription" },
]
const newNoteAdd = (Note) => {
    Notedata.push(Note);
     console.log(Notedata); 
} */


const AddItem = () => {
    //use usestate
    const [Notedata, setaddItem] = useState([])
    const newNoteAdd = (Note) => { setaddItem([...Notedata, Note]) }

    return (
        <>
            <Addnotes newNoteAdd={newNoteAdd}></Addnotes>
            {
                Notedata.map(item => {
                    return (
                        <Notes Note={item}></Notes>
                    )
                })
            }
        </>
    )
}
export default AddItem; 