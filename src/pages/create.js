import React, { useState } from 'react'
import { db } from "../firebase-config";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { Link } from "react-router-dom"
const Create = () => {

    const [newName, setNewName] = useState("");
    const [email, setEmail] = useState("");
    const usersCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(usersCollectionRef, { name: newName, email: email });
    };

    return (
        <div className='flex flex-col justify-center h-screen items-center '>
            <div className='bg-gray-300 w-[50%]    p-10 '>
                <div>
                    <form>
                        <h1 className='font-bold text-gray-500 text-xl mb-7'>ADD NEW USERS</h1>
                        <label className='text-start 2xl:text-[20px] text-[16px]'>Name</label>
                        <div className='   2xl:rounded-3xl rounded-[17px] flex items-center '>
                            <input
                                type='text'
                                placeholder='userName'
                                className=' mb-7 2xl:text-[18px] text-[14px] 2xl:h-[65px] h-[48px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none'
                                onChange={(event) => {
                                    setNewName(event.target.value);
                                }} />

                        </div>
                        <label className='text-start 2xl:text-[20px] text-[16px] '>Email </label>
                        <div className='  2xl:rounded-3xl rounded-[17px] flex items-center '>
                            <input
                                type='text'
                                placeholder='example@example.com'
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }} className='2xl:text-[18px] text-[14px] 2xl:h-[65px] h-[48px] px-5 focus:border-[#404EED] border-2  2xl:rounded-3xl rounded-[17px]  w-[100%] outline-none' />
                        </div>

                        <Link to="/"
                        >
                            <button
                                onClick={createUser}
                                className='bg-green-600 text-white  rounded-md py-2 px-4 mt-4 float-right'>Submit</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create
