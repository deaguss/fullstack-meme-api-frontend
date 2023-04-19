import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListMeme = () => {
    const [meme, setMeme] = useState([]);

    useEffect(() => {
        getMeme();
    }, [])

    const getMeme = async() => {
        const response = await axios.get("http://localhost:5000/meme");
        setMeme(response.data)
    }
  return (
    <div className='bg-blue-100 h-[100%]'>
        <div className="layout p-1">
        <Link to={"/"} className='mt-10 mx-2 py-5 px-[23vh] font-semibold text-blue-950 whitespace-nowrap flex text-center rounded-md bg-blue-400 hover:bg-blue-300 transition-all ease-in-out hover:ring-2 hover:ring-offset-2'>Add One</Link>
            <div className="grid grid-cols-2 mt-4">
                {meme.map((meme:any) => (
                    <div className="card pb-[15px] m-1.5 bg-slate-100 rounded-md drop-shadow" key={meme.id}>
                        <img className='max-w-[179px] rounded-t-md' src={meme.url} alt={meme.name ? meme.name : "anonim"} />
                        <div className="title flex pl-2 mt-2  text-[12px] ">Upload By&nbsp;<div className='px-1 text-zinc-500 bg-blue-100 rounded-md'>{meme.name ? meme.name : "anonim"}</div></div>
                    </div>

                ))}
            </div>
        </div>
    </div>
  )
}

export default ListMeme