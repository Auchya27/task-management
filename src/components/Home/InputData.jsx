import React, { useState, useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TaskContext } from '../../context/TaskContext'; // Adjust the import path as needed

const InputData = ({ InputDiv, setInputDiv }) => {
  const { task, setTask } = useContext(TaskContext); // Get the context values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title && description) {
      setTask(prevTasks => [
        ...prevTasks,
        {
          id: prevTasks.length + 1,
          title,
          description,
          complete: false,
          important: false
        }
      ]);

      setTitle('');
      setDescription('');
      setInputDiv('hidden');
    }
  };

  return (
    <>
      <div className={`${InputDiv} top-0 left-0 bg-gray-800 opacity-80 h-screen w-full`}></div>
      <div className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
        <div className="w-2/6 bg-gray-900 p-4 rounded">
          <div className="flex justify-end">
            <button className="text-2xl" onClick={() => setInputDiv('hidden')}>
              <RxCross2 />
            </button>
          </div>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          />
          <textarea
            name="desc"
            cols="30"
            rows="10"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-3 py-2 rounded w-full bg-gray-700 my-3"
          />
          <button
            onClick={handleSubmit}
            className="px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default InputData;
