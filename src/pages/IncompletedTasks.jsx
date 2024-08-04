import React, { useContext } from 'react'
import Cards from '../components/Home/Cards'
import { TaskContext } from '../context/TaskContext'

const IncompletedTasks = () => {
  const {task, setTask} = useContext(TaskContext)
  const completedTasks = task.filter(t => !t.complete)
  return (
    <div>
      <Cards home={"false"} task={completedTasks} setTask={setTask}/>
    </div>
  )
}

export default IncompletedTasks