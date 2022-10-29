import "./NewShow.css";
import { useContext, useState } from "react";
import {Storage} from '../../Firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { createMovies } from "../../context/movieContext/ApiCalls";
import { MovieContext } from "../../context/movieContext/MovieContext";

export default function NewShow() {
  const [show, setShow] = useState(null)
  const [showimage, setShowimage] = useState(null)
  const [showtitleimage, setShowtitleimage] = useState(null)
  const [showthumbnailimage, setShowthumbnailimage] = useState(null)
  const [showtrailer, setShowtrailer] = useState(null)
  const [showcontent, setShowcontent] = useState(null)
  const [uploaded, setUploaded] = useState(0)
  
  const {dispatch} = useContext(MovieContext)

  const handleChange = (e)=>{
    const value = e.target.value
    setShow({ ...show, [e.target.name]:value})
  }

  const upload = (items) => {
    items.forEach(item=>{
    const fileName = new Date().getTime() + item.label + item.file.name;
    const storageRef = ref(Storage, `flixshow/${show.title}/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, item.file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        console.log("Upload is " + progress + "% done");
      },
      //if there is an error the script will stop runing and alert it
      (error) => {
        alert(error);
      },
      //after the file was uploaded get the file's Url and add it to the state of the element
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setShow(prev=>{return{...prev,[item.label]:downloadURL}});
          setUploaded((prev) => prev + 1)
      }
    );
  })
})
};

  const handleUpload = (e)=>{
    e.preventDefault();
    upload([
      {file: showimage, label:"img"},
      {file: showtitleimage, label:"imgtitle"},
      {file: showthumbnailimage, label:"imgsm"},
      {file: showtrailer, label:"trailer"},
      {file: showcontent, label:"video"}
    ])
  }
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    createMovies(show, dispatch)
  }
console.log(show)
  return (
    <div className="NewShow">
      <form className="addshowForm">
        <div className="addshowItem">
          <label>Show image</label>
          <input type="file" id="Showimage" onChange={(e)=>setShowimage(e.target.files[0])}/>
        </div>
        <div className="addshowItem">
          <label>Show title image</label>
          <input type="file" id="Showtitleimage" onChange={(e)=>setShowtitleimage(e.target.files[0])}/>
        </div>
        <div className="addshowItem">
          <label>Show thumbnail image</label>
          <input type="file" id="Showthumbnailimage" onChange={(e)=>setShowthumbnailimage(e.target.files[0])}/>
        </div>
        <div className="addshowItem">
          <label>Show title</label>
          <input type="text" placeholder="Title..." name="title" onChange={handleChange}/>
        </div>
        <div className="addshowItem">
          <label>Show description</label>
          <input type="text" placeholder="description..." name="desc" onChange={handleChange}/>
        </div>
        <div className="addshowItem">
          <label>Show release date</label>
          <input type="text" placeholder="release date..." name="year" onChange={handleChange}/>
        </div>
        <div className="addshowItem">
          <label>Show duration</label>
          <input type="text" placeholder="episode count or movie length..." name="duration" onChange={handleChange}/>
        </div>
        <div className="addshowItem">
          <label>Show age limit</label>
          <input type="text" placeholder="show age limit..." name="agelimit" onChange={handleChange}/>
        </div>
        <div className="addshowItem">
          <label>Show type</label>
          <select name="type" id="active" onChange={handleChange}>
            <option value="">Serie</option>
            <option value="movie">Movie</option>
          </select>
        </div>
        <div className="addshowItem">
          <label>Show trailer</label>
        <input type="file" id="Showtrailer" onChange={(e)=>setShowtrailer(e.target.files[0])}/>
        </div>
        <div className="addshowItem">
          <label>Show content</label>
          <input type="file" id="Showcontent" onChange={(e)=>setShowcontent(e.target.files[0])}/>
        </div>
        <div className="addshowItem">
            <label>Create button</label>
        {uploaded === 5 ?(
            <button className="create_show_Button" onClick={handleSubmit}>create new show</button>
        ):(
            <button className="upload_media_button" onClick={handleUpload}>upload media</button>
        )}
        </div>
      </form>
    </div>
  );
}
