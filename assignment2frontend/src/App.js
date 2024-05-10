import { useEffect, useState } from 'react';
import './App.css'
import {ADD_DATA, GETDATA, GET_COUNT, GET_SINGLE_DATA, UPDATE_DATA} from './apiLink'
import axios from 'axios';

function App() {
  const [data,setData]=useState();
  const [count,setCount]=useState();
  const [add,setAdd] = useState(false);
  const [edit,setEdit] = useState(false);
  const [name,setName]=useState('');
  const [age,setAge]=useState(null);
  const [email,setEmail]=useState('');
  const [aboutMe,setAboutMe]=useState('');



const fetchData =async()=>{
try {
   const res = await axios.get(GETDATA())
   if(res?.status===200){
     setData(res.data.getData)
   }  
} catch (error) {
  console.log(error)
}
};


const addData=async()=>{
  try {
    const res= await axios.post(ADD_DATA(),{
      name:name,
      age:age,
      email:email,
      aboutMe:aboutMe
    })
    if(res.status===200){
      fetchCount()
      setAdd(false);
      window.alert(res.data.message)
      setAboutMe(null);
      setName(null);
      setAge(null);
      setEmail(null);
      fetchData()
    }
  } catch (error) {
    console.log(error)
  }
}

const editData=async(id)=>{
  try {
    const res= await axios.put(UPDATE_DATA(id),{
      name:name,
      age:age,
      email:email,
      aboutMe:aboutMe
    })
    if(res.status===200){
      fetchCount()
      window.alert(res.data.message)
      setEdit(false);
      fetchData();
      setAboutMe(null);
      setName(null);
      setAge(null);
      setEmail(null)
    }
  } catch (error) {
    console.log(error)
  }
}

const singleData=async(id)=>{
  try {
     const res = await axios.get(GET_SINGLE_DATA(id))
     if(res?.status===200){
       setName(res.data.getData[0].name)
       setAge(res.data.getData[0].age)
       setEmail(res.data.getData[0].email)
setAboutMe(res.data.getData[0].aboutMe)
     }
  } catch (error) {
    console.log(error)
  }
  };

  const fetchCount=async()=>{
    try {
      const res = await axios.get(GET_COUNT())
      if(res?.status===200){
        setCount(res.data)
      }  
   } catch (error) {
     console.log(error)
   }
  }

  useEffect(()=>{
    fetchData()
  },[]);

  useEffect(()=>{
    fetchCount()
  },[]);


return(
  <>
<div>
  {!add&& !edit&&<div className="headingContainer">
    <h1 className='heading'>DATA</h1>
    <button className='button' onClick={()=>setAdd(true)}>ADD+</button>
    <button className='button' style={{background:'#FA3A71 '}} onClick={()=>{singleData(data[0]._id);setEdit(true)}}>edit</button>
  </div>
  
  }

  {add&&<h1 className='heading'>ADD DATA</h1>}
  {edit&&<h1 className='heading'>Edit DATA</h1>}
  {!add &&!edit&&<div className='container'>
  {
    data?.map((detail,index)=>(
      <div className="data" key={detail?._id} >
      <p> name: {detail?.name}</p>
      <p> Age: {detail.age}</p>
      <p> Email: {detail.email}</p>
      <p> AboutMe: {detail.aboutMe}</p>
     </div>
    ))
  }
  </div>}
 {add&& <div className='container'>
     <div className="add">
      <input type='text' className='input' value={name} onChange={(e)=>setName(e.target.value)} placeholder="NAME"/>
      <input type='number' className='input' value={age} onChange={(e)=>setAge(e.target.value)} placeholder="AGE"/>
      <input type='text' className='input' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
      <input type='text' className='input' value={aboutMe} onChange={(e)=>setAboutMe(e.target.value)} placeholder="About Me"/>
      <div className='buttonContainer'>
    <button className='button' style={{background:'#FA4E4E'}} onClick={()=>setAdd(false)}>Cancel</button>
    <button className='button'  onClick={()=>addData()}>ADD</button>

      </div>
</div>
  
  </div>}
 {edit&& <div className='container'>
     <div className="add">
      <input type='text' className='input' value={name} onChange={(e)=>setName(e.target.value)} placeholder="NAME"/>
      <input type='number' className='input' value={age} onChange={(e)=>setAge(e.target.value)} placeholder="AGE"/>
      <input type='text' className='input' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
      <input type='text' className='input' value={aboutMe} onChange={(e)=>setAboutMe(e.target.value)} placeholder="About Me"/>
      <div className='buttonContainer'>
    <button className='button' style={{background:'#FA4E4E'}} onClick={()=>{setEdit(false);setName(null);setAge(null);setAboutMe(null);setEmail(null)}}>Cancel</button>
    <button className='button'  onClick={()=>editData(data[0]._id)}>EDIT</button>

      </div>
</div>
  
  </div>}
</div>
<div>
<div className="data">
      <p>ADD API COUNT={count?.add_count}</p>
      <p>UPDATE API COUNT={count?.update_count}</p>
      
      
     </div>
</div>
</>
)
}

export default App;
