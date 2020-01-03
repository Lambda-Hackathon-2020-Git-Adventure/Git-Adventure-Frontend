// U CAN DELETE THIS EVENTUALLY

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { axiosWithAuth } from './authentication/axiosWithAuth';

const Container = styled.div`
  display: flex;
  justify-content:center;
`

const Card = styled.div`
  padding: 20px;
  border: 1px solid black;
`
const Button = styled.div`
  padding: 10px 0;
  border: 2px solid blue;
  width: 20%;
  margin: 10px auto;
`

const ViewStory = (props) => {
  const [story, setStory] = useState();
  const [collabs, setCollab] = useState();
  const [history, setHistory] = useState([]);

  const [current, setCurrent] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    setHistory([story.start.id])
    axiosWithAuth().get(`/api/nodes/${story.start.id}`)
      .then(res => setCurrent(res.data))
  }

  const handleNext = (e, id) => {
    e.preventDefault();
    setHistory([...history, current])
    axiosWithAuth().get(`/api/nodes/${id}`)
      .then(res => setCurrent(res.data))
  }

  const handleBack = (e) => {
    e.preventDefault();
    setCurrent(history[history.length - 1])
    const newHistory = history.slice(0, history.length - 1)
    setHistory(newHistory)
  }
  
  useEffect(() => {
    axiosWithAuth().get(`https://cyahack.herokuapp.com/api/stories/${props.match.params.id}`)
      .then(res => {
        setStory(res.data.story)
        let str = res.data.story.collaborators.reduce((acc, curr) => acc + curr.username + ',', '')
        str = str.substring(0,str.length - 1)
        setCollab(str);
      })
  }, [])
  if (!story) return <div>Loading...</div>
  console.log(story);
  return (
    <Container>
      <div>
        <h2>{story.title}</h2>
        <h3>{story.description}</h3>
        <p>Created by {story.creator} with the help of {collabs}</p>
        {history.length == 0 && <button onClick={handleClick}>Get Started</button>}
        {current && <div>
          <Card>{current.specifiedNode.text}</Card>
          {history.length > 1 && <button onClick={handleBack}>Go Back</button>}
          {current.nodeChildren.map(child => <Button key={child.id} onClick={(e) => handleNext(e, child.id)}>{child.name}</Button>)}
        </div>
        }
      </div>
    </Container>
  ) 
}

export default ViewStory;