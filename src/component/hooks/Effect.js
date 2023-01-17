import React ,{useState ,useEffect} from 'react';
import './style.css';

const Effect = () => {
    const [myNum,setMyNum]=useState(0);
    useEffect(()=>{
      document.title=`Chats(${myNum})`
    })
  return (
    <>
    <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={()=>setMyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           Chat
        </div>
       
    </div>
    </>
  )
}

export default Effect