import React,{useContext} from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
  const context=useContext(noteContext);
  const {deleteNote}=context;
    const {note,updateNote}=props;
  return (
    <div className='col-md-3'>
      {/* {note.title}
      {note.description} */}
      <div className="card my-3">
        <div className="card-body ">
            <h5 className='card-text'>{note.title}</h5>
            <p className='card-text'>{note.description}</p>
            <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully","Success");}}></i>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note);props.showAlert("Updated Successfully","Success");}}></i> 
        </div>
      </div>
    </div>
  )
}

export default NoteItem
