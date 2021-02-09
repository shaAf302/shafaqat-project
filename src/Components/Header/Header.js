import logo from '../../Assets/vodafoneLogo.svg'
import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    padding: 30px 0;

    .logo{
        height: 50px;
    }

    .searchContact{
        height: 30px;
        width: 300px;
        align-self: center;
        justify-self: end;
        padding-left: 10px;
        border-radius: 5px;
        border: 2px solid #CCCCCC;
    }
    .searchContact::placeholder{
        color: #999999;
    }

    @media only screen and (max-width: 500px) {
        grid-template-columns: auto;
        .logo{
            margin: auto;
        }
        input{
            margin: 20px auto auto auto;
        }
    }
`

function Header({searchValueChanged}) {
    return (
        <Div className="header">
            <img src={logo} alt="" className="logo"/>
            <input className="searchContact" type="text" placeholder="Search For Contact" onChange={searchValueChanged}/>
        </Div>
    )
}

export default Header
