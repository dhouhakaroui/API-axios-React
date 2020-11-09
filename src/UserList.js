import {useState,useEffect} from 'react';
import axios from 'axios';
const UserList=()=>{
    const [listOfUSer,setlistOfUSer]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setlistOfUSer(res.data))
    })
    return(
        <div style={{display:"flex",flexWrap:"wrap",margin:50}}>
            {listOfUSer.map((el,i)=> 
                <div key={i} style={{width:400,margin:10,border:"5px solid ",backgroundColor:"#957593",borderRadius:15}}>
                    <h1 >name : {el.name}</h1>
                    <h2>username : {el.username}</h2>
                    <h4>email : {el.email}</h4>
                </div>)}
        </div>
    )
}
export default UserList;