import React, {useState} from 'react'
import styled from 'styled-components'
import {axiosWithAuth} from './authentication/axiosWithAuth'

export default function InviteForm ({id}) {
    const [invites, setInvites] = useState({
        list: []
    })

    const handleChange = (e) => {
        let temp = e.target.value
        console.log(temp)
        let newArray = temp.split(",")
        setInvites(newArray);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        return invites.map(a => {
            axiosWithAuth().post(`https://cyahack.herokuapp.com/api/stories/id/collaborator`, a.trim())
                .then(res => console.log(res))
                .catch(err => console.log(a.trim(), err))
        })
    }

    return (
        <ModalBG>
            <CollabForm onSubmit={handleSubmit}>
                <CloseBtn>x</CloseBtn>
                <label htmlFor="invites">Enter usernames to invite, separated by commas.</label><br/>
                <input
                type="text"
                name="list"
                id="invites"
                onChange={handleChange}
                ></input>
                <button>Invite to collaborate</button>
            </CollabForm>
        </ModalBG>
    )
}


const ModalBG = styled.div`
    background-color: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CollabForm = styled.form`
    margin: 0 auto;
    border: 3px hotpinksolid;
    background-color: rgba(255, 255, 255, .9);
    border-radius: .25rem;
    width: 500px;
    display: flex;
    flex-flow: column;
    padding: 3rem;
    box-shadow: 2px 2px 3px rgba(0,0,0,.5);
    position: relative;

    input {
        padding: 1.5rem;
    }
    textarea {
        padding: 1.5rem;
    }
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;