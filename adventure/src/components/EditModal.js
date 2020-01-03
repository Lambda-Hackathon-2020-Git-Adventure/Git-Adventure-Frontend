import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from './authentication/axiosWithAuth';

const EditModal = ({ editNode }) => {

  const [nodeData, setNodeData] = useState();
  const [editing, setEditing] = useState(false);
  const [newNodeData, setNewNodeData] = useState({})

  useEffect(() => {
    axiosWithAuth().get(`https://cyahack.herokuapp.com/api/nodes/${editNode}`)
    .then(res => {
      console.log(res.data)
      setNodeData(res.data.specifiedNode)
    })
    .catch(err => console.log(err))
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setNewNodeData({
      ...newNodeData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () =>{
    axiosWithAuth().put(`https://cyahack.herokuapp.com/api/nodes/${editNode}`,{node: newNodeData})
    .then(res => console.log(res)
    .catch(err => console.log(err)))
  }
  return(
    <div className='edit-node-modal'>
      {editing ? <form onSubmit={handleSubmit}><input name='name' value={newNodeData.name} handleChange={handleChange}/><input name='text' value={newNodeData.text} handleChange={handleChange} /> <button type='submit'>Save Changes</button></form>
      :nodeData && <>
      <h3>{nodeData.name}</h3>
      <p>{nodeData.text}</p>
      </>}
      <div className='edit-modal-buttons'>
      <button onClick={()=>setEditing(true)}>Edit</button><button>Delete</button>
      </div>
    </div>
  )
};

export default EditModal;