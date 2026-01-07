import React, { useState } from "react";

const App = () => {
    const [heading, setheading] = useState('');
    const [Details, setDeatails] = useState('');
    const [Task, setTask] = useState([]);
  
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("form submitted");

    const copyTask = [...Task];
    copyTask.push({heading,Details});
    setTask(copyTask);
    console.log(copyTask);

    setheading('');
    setDeatails('');
  }
  return (
  <div className="h-full  bg-[#111] p-4">
    <h1 className="text-white text-5xl text-center w-full ">Notes App</h1>
    <div className="bg-[#111] h-full text-white p-10">
        <form onSubmit={(e)=>{
        submitHandler(e);
        
      }} className="border-solid text-white flex flex-col gap-8 ">
        <input
        onChange={(e)=>{
          setheading(e.target.value);
        }}
          className="border p-2 rounded"
          type="text"
          value={heading}
          placeholder="Enter title"
        />
        <textarea
          type="text"
          value={Details}
          onChange={(e)=>{
          setDeatails(e.target.value);
        }}
          className="border p-2 h-35 rounded"
          placeholder="Write Here"
        />
        <button className="bg-white text-black p-2 rounded">Add Note</button>
      </form>
      <div className="flex flex-wrap flex-col gap-10 px-0 py-10">
        <h1>Your Notes</h1>
        <div className="flex gap-10 flex-wrap">
      
        {Task.map(function(elem , idx){
            return <div key={idx} className="h-80 w-50 bg-white rounded p-5  ">
              <h3 className="text-black font-medium">{elem.heading}</h3>
              <p className="text-gray-600">{elem.Details}</p>
            </div>
        })}
       </div>
      </div>
    </div>
    </div>
  );
};

export default App;
