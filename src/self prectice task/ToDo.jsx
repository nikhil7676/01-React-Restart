// 07-12-2024 make a todo list and perform add task to list and show in to table

import React, { useState } from 'react'

function ToDo() {

    const [taskName, setTaskName] = useState('')
    const [taskList, setTaskList] = useState([])

    const handleChange = (e) => {
        console.log(e.target.value);
        setTaskName(e.target.value)
    }

    const addTask = () => {
        setTaskList([...taskList, taskName])
    }

    console.log(taskList);
    return (
        <div>
            <h1> Our ToDo </h1>
            <label htmlFor="" style={{ marginLeft: "10px", fontWeight: "bold" }}>
                Enter Your task
            </label>
            <input onChange={handleChange} type="text" placeholder='task name' style={{ marginLeft: "10px" }} />
            <button onClick={addTask} style={{ marginLeft: "10px" }} > Add </button>

            <div>
                <table border={2} style={{ width:"15%", marginTop: "30px", marginLeft: "10px" }}>
                    <tr>
                        <th>
                            No
                        </th>
                        <th >
                            Tasks
                        </th>
                    </tr>

                    {/* show task in table row */}
                    {
                        taskList.map((value, index) => (
                            <tr>
                                <td> {index+1} </td>
                                <td> {value} </td>
                            </tr>
                        ))
                    }

                </table>
            </div>
        </div>
    )
}

export default ToDo