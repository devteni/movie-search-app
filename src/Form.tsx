import axios from "axios";
import React, { useEffect } from "react";

interface searchProps{
    Text: string, 
    setText: any,
    setMovies: any
}

const Form: React.FC<searchProps> = ({Text, setText, setMovies}) => {

    const SearchChange = (e:any) =>{ 
        return setText(e.currentTarget.value);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await axios.get(`https://www.omdbapi.com/?t=${Text}&apikey=6070c157`);
        if(res.data.Response === "True") {
            setMovies(res.data);
            return setText("");
        }
        else {
            alert("Input a movie name");
        }
    }

    return(        
        <div className="form">
            <form onSubmit={handleSubmit} >
                <input type="search" className="input" placeholder="Search movie" value={Text} onChange={SearchChange} />
                <button id="btn">Check movie</button>
            </form>
        </div>
        
    )
}

export default Form;