import React from 'react'
import { MdDelete } from "react-icons/md";
import { useSelector } from 'react-redux';
import { removeUser } from '../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

const NameComp = () => {

    const dispatch=useDispatch();

    const data=useSelector((state)=>{
        return state.users;
    })

//  console.log(data)

const deleteUser=(id)=>{
    dispatch(removeUser(id))
}

  return (
   <>
   {
  data.map((user, id) => (
    <div className=' justify-center items-center flex h-auto'>
      <div className='m-2 w-[61%] border-b-2  border-black'>
        <div className=' flex-row flex m-2 justify-between'>
          <div className='name'>            
            <h4 key={id} className='text-xl font-bold'>{user}</h4>            
          </div>
          <div className='delete m-2 justify-center items-center flex'>
            <MdDelete className=' cursor-pointer text-red-500 text-xl' onClick={()=>deleteUser(id)}/>
          </div>
        </div>
      </div>
    </div>
  ))
}
   
   </>
  )
}

export default NameComp