import React, { useContext } from 'react'
import Cards from '../components/Home/Cards'
import { IoAddCircleSharp } from "react-icons/io5";
import InputData from '../components/Home/InputData';
import { useState } from 'react';
import { TaskContext } from '../context/TaskContext';

const AllTasks = () => {
  const [InputDiv, setInputDiv] = useState("hidden")
  const {task, setTask} = useContext(TaskContext)

  return (
    <>
      <div>
        <div className="w-full flex justify-end px-4 py-2">
          <button onClick={() => setInputDiv("fixed")}>
            <IoAddCircleSharp className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300"/>
          </button>
        </div>
        <Cards home={"true"} setInputDiv={setInputDiv} task={task} setTask={setTask}/>
      </div>
      <InputData InputDiv={InputDiv} setInputDiv={setInputDiv}/>
    </>
  )
}

export default AllTasks