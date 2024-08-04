import { createContext , useState } from "react";

export const TaskContext = createContext(null)
export const TaskProvider = ({children}) => {
    const [task, setTask] = useState([
        { 
          id: 1,
          title: "Complete Project Proposal",
          description: "Draft the initial project proposal and share it with the team for feedback.",
          complete: false,
          important: true,
        },
        { 
          id: 2,
          title: "Team Meeting",
          description: "Weekly sync-up meeting to discuss project progress and roadblocks.",
          complete: true,
          important: false,
        },
        {
          id: 3,    
          title: "Code Review",
          description: "Review the latest code submissions from team members and provide feedback.",
          complete: false,
          important: false,
        },
        {
          id: 4,        
          title: "Design Mockups",
          description: "Create design mockups for the new feature and present them to the client.",
          complete: false,
          important: false,
        }
      ])

      return(
        <TaskContext.Provider value={{task, setTask}}>
            {children}
        </TaskContext.Provider>
      )
}