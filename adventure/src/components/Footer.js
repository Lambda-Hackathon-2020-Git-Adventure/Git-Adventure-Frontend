import React from 'react'
import styled from 'styled-components'

export default function Footer () {
    return (
        <StyledFooter>
            <p>FOOTER</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #5b88a4;
    border-top: .6rem solid #f1bd19;
`;