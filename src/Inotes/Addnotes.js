import { useState } from "react";

const OnAddnotes = (props) => {
    const defaultNote = {
        date: "",
        title: "",
        discription: ""
    }
    //hooks usestate
    const [Note, setaddItem] = useState([defaultNote])

    /* const HandleOnChangeDate = (event) => {
        Note.date = event.target.value
    }
    const HandleOnChangeTitle = (event) => {
        Note.title = event.target.value
    }
    const HandleOnChangeDiscription = (event) => {
        Note.discription = event.target.value
    }
    const onClickHandler = () => {
        props.newNoteAdd(Note)
    } */

    //simplify this code 
    const onClickHandler = (event) => {
        event.preventDefault();

        props.newNoteAdd(Note);
        setaddItem(defaultNote)
    }
    const handleInputChange = (event, field) => setaddItem({ ...Note, [field]: event.target.value })


    return (
       
        <form onSubmit={onClickHandler} className="input-container" >
            <h2>Add Note</h2>
            <label className="label-input">Date</label>
            <input type="date" placeholder="Date" onChange={(e) => handleInputChange(e, 'date')} value={Note.date}></input>
            <label className="label-input" >Title</label>
            <input type="text" placeholder="Title" onChange={(e) =>
                handleInputChange(e, 'title')} value={Note.title} ></input>
            <label className="label-input">Discription</label>
            <textarea rows="4" cols="50" onChange={(e) =>
                handleInputChange(e, 'discription')} value={Note.discription} > </textarea>
            <button type="submit">Add Note</button>
        </form>
    )
}
export default OnAddnotes;