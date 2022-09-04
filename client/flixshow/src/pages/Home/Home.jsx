import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss"
import { useState, useEffect } from "react"
import axios from "axios"

const Home = ({type}) => {
    const [lists, setLists] = useState([])
    const [genre, setGenre] = useState(null)
    useEffect(()=>{
        const getRandomLists = async ()=>{
            try {
                const res = await axios.get(`api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                  {
                    headers: {
                      token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmQ5OTM4M2E2MWZkNjA3NGNhNmM2NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTEwNjcwNCwiZXhwIjoxNjg1MDI2NzA0fQ.MMUlE01JvFUGm-XbhqsQWqu4liqk2XFVNLp8YGh8-iI",
                    },
                  }
                );
                setLists(res.data)
              }catch(err){
                console.log(err);
            }
        }
        getRandomLists()
    },[type, genre])
    return (
        <div className='home'>
            <Navbar/>
            <Featured type={type}/>
            {lists.map((list, i)=>(
              <List list={list} key={i}/>
            ))}
            
        </div>
    );
}

export default Home;
