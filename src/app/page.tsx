"use client"
import { useState } from "react";

function index() {
  const [lst, setLst] = useState([{ name: 'vsw', done: false }, { name: 'ew', done: false }]);
  const [value, setvalue] = useState({ name: '', done: false });

  const appendnew = () => {
    if (!value) {
      return;
    }
    const newlst = lst.concat(value);
    setLst(newlst);
    setvalue({ name: '', done: false });
  }
  const handleChange = (e: any) => {
    const newvalue = { name: e.target.value, done: false };
    setvalue(newvalue);
  }
  const handleCheckbox = (e: any,index:number) => {
    const newLst=lst.map((e,i)=>{
        if (index==i) {
          return {name:e.name,done:!e.done};
        }
        return e;
    });
    setLst(newLst);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <title>my todolist</title>
        <div>
          <input type="text" onChange={handleChange} value={value.name}></input>
          <button onClick={appendnew}>Add</button>
        </div>
        <ul>
          {
            lst.map((e,i) => {
              return <li><input type="checkbox" checked={e.done} onClick={e=>handleCheckbox(e,i)}></input>{e.name}</li>;
            })
          }
        </ul>
      </div>
    </main>
  );
}

export default index;
