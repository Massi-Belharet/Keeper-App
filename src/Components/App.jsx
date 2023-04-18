import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App(){
    const [notes,setNotes]= useState([]);

    function addNote(note){
        setNotes((preValue)=>{
            return [...preValue,note]
        })
    }

    function deleteNote(id){
        setNotes((notesprev)=>{
            return notesprev.filter((note,index)=>{
                return id !== index;
            })
        })
    }


    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {notes.map((note,index)=>{
                return <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>
            })}
            <Footer />
        </div>


    );
}

export default App;