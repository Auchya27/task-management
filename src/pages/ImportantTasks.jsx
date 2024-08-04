import React, { useContext } from 'react'
import Cards from '../components/Home/Cards'
import { TaskContext } from '../context/TaskContext'

const ImportantTasks = () => {
  const {task, setTask} = useContext(TaskContext)
  const importantTasks = task.filter(t => t.important)

  return (
    <div>
      <Cards home={"false"} task={importantTasks} setTask={setTask}/>
    </div>
  )
}

export default ImportantTasks