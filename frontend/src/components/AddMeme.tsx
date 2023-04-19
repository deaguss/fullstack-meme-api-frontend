import React, { useEffect, useState, useRef } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMeme = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  // const [msg, setMsg] = useState([]);
  // const [err, setErr] = useState([]);
  const navigate = useNavigate();
  const changeWarna:any = useRef(null);

  const loadImage = (e:any) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  }

  // useEffect(() => {
  //   getMsg();
  // }, [])

  // const getMsg = async() => {
  //   const response = await axios.get("http://localhost:5000/meme");
  //   setMsg(response.data)
  //   // .then(response => {
  //   //   const msg = response.data
  //   //   setMsg(msg)
  //   // })
  //   // .catch(error => {
  //   //   const err = error.response.data.msg
  //   //   setErr(err)
  //   // })
  // }

  const saveImg = async(e:any) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    try {
      await axios.post("http://localhost:5000/meme", formData, {
        headers: {
          "Content-Type" : "multipart/form-data",
        }
      })
      changeWarna.current.style.color = "red";
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center bg-blue-100 h-[100vh]">
      <div className="form-container bg-slate-100 py-[45px] rounded-md flex justify-center items-center w-[50vh] flex-row flex-wrap max-w-[50vh] drop-shadow">
        <div className="text-header flex flex-col items-center">
            <h5 className='font-bold text-[18px] text-blue-400'>UPLOAD FILES</h5>
            <p ref={changeWarna} className='text-[10px] text-zinc-400'>Upload gambar meme yang kau mau!</p>
            {/* <p>{ms}</p> */}
        </div>
        <div className="form-input flex flex-col justify-center items-center">
          <form onSubmit={saveImg}>
            <div className="nickname flex flex-wrap">
            <label className='text-blue-400 text-[14px] font-semibold mb-2 after:content-["*"] after:text-red-600 after:font-bold after:p-1 '>Upload By</label>
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            className='w-[100%] h-10 rounded-md p-2 drop-shadow-sm focus:ring-offset-2 focus:ring-2 focus:ring-blue-500 outline-0 focus:placeholder:text-opacity-0' placeholder='Nickname'/>
            </div>
            <div className="upload-meme mt-3 mb-5">
              <label htmlFor='img' className='w-[40vh] h-[25vh] rounded-xl  border-2 border-dashed border-purple-600 flex flex-wrap m-auto justify-center items-center bg-blue-100 hover:border-opacity-50 transition duration-300 ease-in-out bg-opacity-30 hover:bg-opacity-20 group'>
                <FaCloudUploadAlt className='text-blue-400 text-[56px] group-hover:-translate-y-2 transition duration-300 ease-in-out group-hover:text-slate-400'/>
                <div className='-mt-10 font-semibold text-[16px] text-blue-300 group-hover:text-slate-400 transition duration-300 ease-in-out '>Drag & Drop your image here</div>
                <input type="file"
                id='img'
                onChange={loadImage}
                className='hidden' />
                <label htmlFor="img" className='w-[8rem] h-[2.5rem] bg-blue-600 rounded-md -mt-5 flex items-center justify-center text-zinc-200 font-semibold text-[14px] hover:bg-blue-950 hover:ring-offset-3 hover:ring-2 hover:ring-blue-400 transition duration-300 ease-in-out focus:ring-offset-3 focus:ring-2 hover:text-zinc-300 '>Browse Images</label>
              </label>
            </div>
            <div className="btn flex justify-center items-center ">
              <button type="submit" className='bg-blue-600 w-[8rem] h-10 rounded-md text-white font-semibold text-[16px] hover:bg-blue-950 hover:ring-offset-3 hover:ring-2 hover:ring-blue-400 transition duration-300 ease-in-out focus:ring-offset-3 focus:ring-2 hover:text-zinc-300'>UPLOAD</button>
          </div>
          </form>
        </div>
        </div>
      </div>
      <div className="preview bg-blue-100 -mt-28 flex justify-center align-middle p-6">
          {preview ? (
            <figure className='p-8 bg-slate-100 rounded-md drop-shadow-sm'>
            <img src={preview} alt="preview" className='w-[300px]' />
          </figure>
          ) : ("")}
        </div>
    </div>
  )
}

export default AddMeme