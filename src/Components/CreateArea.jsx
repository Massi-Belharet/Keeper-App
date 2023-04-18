import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [note,setNote]= useState({
        title :"",
        content:""
    });

    const [zoomOn,setZommon] = useState(false);

    function handleChange(event){
        const {name, value}= event.target;

        setNote((preValue)=>{
            if(name==="title"){
                return {
                title : value,
                content : preValue.content
            }
            }else if(name==="content"){
                return {
                    title : preValue.title,
                    content : value
                }
            }
        })
    }

    function sumbitNote(event){
        if (note.title === "" || note.content ===""){
            setNote((preValue)=>{
                return {
                    title: preValue.title,
                    content : "You didn't take a Note!"
                }

            })
        }
        else{
            props.onAdd(note);
        setNote(()=>{
            return{
                title:"",
                content:""
            }
        })
        setZommon(false)
        }
        event.preventDefault();

    }


    function zoomfunct(){

        setZommon(true)

    }

  return (
    <div>
      <form className="create-note">
        {zoomOn ? <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/> : null}
        <textarea name="content" placeholder="Take a note..." rows={zoomOn ? "3" : "1"}  value={note.content} onChange={handleChange} onClick={zoomfunct} />
        {zoomOn ?<Zoom in={true}>
        <Fab onClick={sumbitNote}><AddIcon /></Fab>
        </Zoom> : null}
        
      </form>
    </div>
  );
}

export default CreateArea;
