import React from 'react'
import styled from 'styled-components'
import ReadIcon from '../images/book-open-page-variant.png'
import EditIcon from '../images/lead-pencil.png'
import InviteIcon from '../images/account-plus.png'
import DeleteIcon from '../images/delete-forever.png'

export default function StoryCard ({story}) {
    const {image, title, authors, description, dateEdited} = story;    return (
        <Tile>
            <StoryInfo>
                {image && <img src='' alt=''></img>}
                <Title>{title}</Title>
                {authors && authors.map((author, index) => <Authors key={index}>{author}</Authors>)}
                <Desc>{description}</Desc>
                {dateEdited && <p>{dateEdited}</p>}
            </StoryInfo>
            
            <ButtonBar>
                <Button read><img src={ReadIcon}/>Read story</Button>
                <Button edit><img src={EditIcon}/>Edit story</Button>
                <Button share><img src={InviteIcon}/>Share & invite</Button>
                <Button > <img src={DeleteIcon}/> Delete story</Button>
            </ButtonBar>
        </Tile>
    )
}

// GENERAL STYLES

const Tile = styled.section`
    /* border: 1px hotpink solid; */
    /* padding: 1rem; */
    margin: 1rem;
    max-height: 250px;
    background-color: #B5646E0f;
    border-radius: .25rem;
    box-shadow: 2px 2px 5px #B5646E3f;
    max-width: 300px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    &:hover {
        cursor: default;
    }
    `;

// TEXT STYLES
const Title = styled.h3`
    font-size: 2rem;
    `;

const Authors = styled.h4`
    font-size: 1rem;
    
    `;

const Desc = styled.p`
    font-size: 1rem;
    `;

// BUTTONS

const ButtonBar = styled.nav`
    display: flex;
    width: 100%;
    `;

const Button = styled.button`
    width: 100%;
    background-color: ${props => props.read ? "green" : props.edit ? "teal" : props.share ? "palevioletred" : "maroon"};
    border: none;
    color: white;
    font-size: 10px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding: .25rem;
    cursor: pointer;

    &:hover {
        background-color: black;
    }
    
    &:nth-of-type(1) {
        border-radius: 0 0 0 .25rem;
    }
    &:nth-of-type(4) {
        border-radius: 0 0 .25rem 0;
    }
    img {
        width: 60%;
        padding-bottom: 3px;
    }

`;

const StoryInfo = styled.div`
    padding: 1rem;
`;