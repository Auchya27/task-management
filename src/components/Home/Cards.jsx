import React, { useContext, useState } from 'react';
import { FiHeart } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { IoAddCircleSharp } from "react-icons/io5";
import { TaskContext } from '../../context/TaskContext';
import { IoMdHeart } from "react-icons/io";

const Cards = ({ home, setInputDiv,task,setTask}) => {
      
return (
    <div className="grid grid-cols-3 gap-4 p-4">
        {task && task.map((items, i)=> (
            <div key={i} className="flex flex-col justify-between bg-gray-800 rounded-xl p-4">
                <div>
                    <h3 className="text-xl font-semibold">{items.title}</h3>
                    <p className="text-gray-300 my-2">{items.description}</p>
                </div>
                <div className="mt-4 w-full flex items-center">
                    <button 
                    className={`${!items.complete ? "bg-red-400" : "bg-green-600"}  p-2 rounded w-3/6`}
                    onClick={() => setTask(prevTasks =>
                      prevTasks.map(task => 
                        task.id === items.id ? { ...task, complete: !task.complete } : task
                      )
                    )}
                    >
                      {items.complete?'Complete':'Incomplete'}
                    </button>

                    <div className="text-white p-2 w-3/6 text-2xl flex justify-end gap-6">
                        <button 
                         onClick={() => setTask(prevTasks =>
                         prevTasks.map(task => 
                         task.id === items.id ? { ...task, important: !task.important } : task
                      )
                    )}>
                          {!items.important ? <FiHeart /> : <IoMdHeart />}
                        </button>

                        <button onClick={() => setTask(prevTasks => prevTasks.filter(task => task.id !== items.id))}>
                         <MdDelete />
                        </button>

                    </div>
                </div>
            </div>
      ))}
      {home==="true" && (
        <button 
        className="flex flex-col justify-center items-center bg-gray-800 rounded-xl p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300"
        onClick={()=>setInputDiv("fixed")}
        >
            <IoAddCircleSharp className="text-5xl"/>
            <h2 className="text-2xl mt-4">Add Task</h2> 
        </button>
      )}
       
    </div>
)
}

export default Cards