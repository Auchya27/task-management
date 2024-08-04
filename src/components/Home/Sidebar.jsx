import React from 'react'
import { CgNotes } from "react-icons/cg"
import { MdLabelImportantOutline } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { TbNotebookOff } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const data = [
        {
            title: "All tasks",
            icon: <CgNotes />,
            link: "/",

        },
        {
            title: "Important tasks",
            icon: <MdLabelImportantOutline />,
            link: "/importantTasks",
        },
        {
            title: "Completed tasks",
            icon: <FaCheckDouble />,
            link: "/completedTasks",
        },
        {
            title: "Incompleted tasks",
            icon: <TbNotebookOff />,
            link: "/incompletedTasks",
        },
    ];
  return (
    <>
        <div>
            <h2 className="text-xl font-semibold">Code Master</h2>
            <h4 className="mb-1 text-gray-400">kjb@gmail.com</h4>
            <hr />
        </div>
        <div>
            {data.map((items,i) => (
                <Link to={items.link}
                      key={i} 
                      className="my-2 flex items-center hover:bg-gray-600 p-2 rounded transition-all duration-300">
                    {items.icon}&nbsp; {items.title}
                </Link>
            ))}
        </div>
        <div>
            <button className="bg-gray-600 w-full p-2 rounded">Log Out</button>
        </div>
    </>
  )
}

export default Sidebar