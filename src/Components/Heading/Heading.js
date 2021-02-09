import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    h1{
        margin-top: -0px;
        color: #333333;
    }
    hr{
        width: 50px;
        border-color: red;
        margin-top: -15px;
        border-width: 2px;
    }
`

function Heading() {
    return (
        <Div>
            <h1>Contacts</h1>
            <hr/>
        </Div>
    )
}

export default Heading
