import React from 'react'
import NameComp from './NameComp'
import { fakeUSerData } from '../api'
import { useDispatch } from 'react-redux'
import { addUser,deleteUsers} from '../store/slices/UserSlice'

const Home = () => {

    const dispatch=useDispatch();

    const addNewUser=(payload)=>{
        // console.log(payload);
        dispatch(addUser(payload))
    }

    const deleteallUsers=()=>{
        // console.log("hii")
        dispatch(deleteUsers())
    }

  return (
    <>
    <div className='font-mono bg-indigo-200 h-screen'>
        <div className='heading justify-center align-middle items-center flex p-5'>
            <h1 className='text-2xl md:text-4xl font-bold text-red-500 items-center md:m-5 mt-9 '>Rendome Name Creator</h1>
        </div>
        <div className=' justify-center flex m-5'>
        <div className='m-4 w-[60%] border-[1px] border-gray-600 rotate-180'>
        </div>
        </div>
        <div className='maincomponent  m-5 flex-col'>
            <div className=' justify-between flex-row-reverse flex mx-[20%] m-10'>
            <div className='addbtn justify-center flex items-center'>
                <button className='addbtn rounded-xl p-4 border-[1px] border-black font-bold text-black justify-center bg-gradient-to-r from-indigo-400 to-green-400 ' onClick={()=>addNewUser(fakeUSerData())}>Add Persone</button>
            </div>
            <div className='heading-name font-mono items-center flex'>
                <h2 className='text-lg md:text-4xl font-bold'>List OF Users Below :-</h2>
            </div>
            </div>
            <div className=' justify-center flex m-5'>
            <div className='w-[63%] m-5 border-[1px] border-gray-600 rotate-180'></div>
        </div>
        <NameComp/>         
        </div>
        <div className='addbtn justify-center flex items-center'>
                <button className='addbtn rounded-xl p-4 border-[1px] border-black font-bold text-black justify-center bg-gradient-to-r from-red-400 to-red-100 ' onClick={deleteallUsers} >Delete ALL</button>
            </div>
    </div>
    </>
  )
}

export default Home