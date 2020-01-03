import React, { useState } from 'react';
import styled from 'styled-components';

const Decision = () => {

  const [isDragging, setDragging] = useState(false)
  const [coords, setCoords] = useState({originalX: 0, originalY: 0, translateX: 0, translateY: 0, lastTranslateX: 0, lastTranslateY: 0 })

  const handleMouseDown = ({ clientX, clientY }) => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    console.log('hi')
    setCoords({...coords, originalX: clientX, originalY: clientY})
    setDragging(true) 
  }

  const handleMouseMove = ({ clientX, clientY }) => {
    if (!isDragging) {
      return
    }
    setCoords({...coords, translateX: clientX - coords.originalX + coords.lastTranslateX, translateY: clientY - coords.originalY + coords.lastTranslateY})
  }

  const handleMouseUp = () => {
    setCoords({
      ...coords, 
      originalX: 0,
      originalY: 0,
      lastTranslateX: coords.translateX,
      lastTranslateY: coords.translateY,
    })
    setCoords(false)
  }

  const Box = styled.div.attrs(
    props => ({
      transform: `translate(${props.x}px, ${props.y}px)`
    }))`
    cursor: grab;
    
    ${({ isDragging }) =>
    isDragging &&`
      opacity: 0.8;
      cursor: grabbing;
    `};
    width: 200px;
    height: 200px;
    border: 1px solid blue;
  `;
  console.log(coords);
  return (
    <Box onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} x={coords.translateX} y={coords.translateY} isDragging={isDragging}>
      I am a box
    </Box>
  )
}
export default Decision