import React, {useState} from "react"

function NewToDoForm(props){

    const[assigned, setAssigned] = useState('');
    const[description, setDescription] = useState('');

    const descriptionChange = (event) => {
        // console.log(event.target.value)
        setDescription(event.target.value);
    }
/*
    const assignedChange = (event) => {
        // console.log(event.target.value)
        setAssigned(event.target.value)
    }
*/

    const addTodo = () => {
        if(assigned !== '' && description !== ''){
            props.addTodo(assigned, description)
            setAssigned('')
            setDescription('')
            props.showAddToDoForm(!props.showAddToDoForm)
        }
    }

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={e => setAssigned(e.target.value)}
                    value={assigned}></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={descriptionChange}
                    value={description}></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={addTodo}>Add ToDo</button>
            </form>
        </div>
    )

}

export default NewToDoForm