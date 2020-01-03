import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './authentication/axiosWithAuth';

const EditStoryDescription = ({ nodeId }) => {
  const [newStoryDesc, setNewStoryDesc] = useState({});
  const [story, setStory] = useState();
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axiosWithAuth().get(`https://cyahack.herokuapp.com/api/stories/${nodeId}`)
    .then(res => {
      setStory(res.data.story)
      console.log(res.data.story)
    })
  }, [])

  const onSubmit=() => {
    axiosWithAuth().put(`https://cyahack.herokuapp.com/api/stories/${nodeId}`, newStoryDesc)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    setNewStoryDesc({
      ...newStoryDesc,
      [e.target.name]: e.target.value
    })
  }
  return(
    <div className='edit-story-description'>
      {editing ?
      <form onSubmit={onSubmit}>
        <div>
        <h4>Story Title</h4>
        <input name='title' value={newStoryDesc.title} onChange={handleChange} />
        </div>
        <div>
        <h4>Story Description</h4>
        <input name='description' value={newStoryDesc.description} onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
     : <div className='main-story-card'>
       {story ? 
         <div>
         <h3>Story Title</h3><p>{story.title}</p>
         <h3>Story Description</h3><p>{story.description}</p>
         </div>
       : null}
       <button onClick={()=>setEditing(true)}>Edit</button>
       </div>}
    </div>
  )
};

export default EditStoryDescription;