import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    .selector{
        font-size: 23px;
        font-weight: bold;
        margin: 40px 15px 10px 15px;
        color: #333333;
    }
`

const GDiv = styled.div`
    .grid{
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-between;
    }
    .grid-item{
        width: 300px;
        box-shadow: 0px 2px 6px #DDDDDD;
        display: inline-block;
        margin: 15px 20px;
    }
    .cname{
        width: 100%;
        padding: 10px 0;
        background-color: #222222;
        color: white;
    }
    .details{
        padding: 15px 40px;
        color: #777777;
    }
    .email{
        font-size: 13px;
    }
    .number{
        font-size: 15px;
        margin-top: 4px;
    }
`

function List() {
    return (
        <div>
            <Div>
                <div className="selector">A</div>
                <div className="selector">C</div>
                <div className="selector">F</div>
                <div className="selector">K</div>
                <div className="selector">N</div>
                <div className="selector">T</div>
            </Div>
            <GDiv className="grid">
                <div className="grid-item">
                    <div className="cname">Kiss Bence</div>
                    <div className="details">
                        <div className="email">bencekiss@kissbence.com</div>
                        <div className="number">+3670303030</div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cname">Kiss Bence</div>
                    <div className="details">
                        <div className="email">bencekiss@kissbence.com</div>
                        <div className="number">+3670303030</div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cname">Kiss Bence</div>
                    <div className="details">
                        <div className="email">bencekiss@kissbence.com</div>
                        <div className="number">+3670303030</div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cname">Kiss Bence</div>
                    <div className="details">
                        <div className="email">bencekiss@kissbence.com</div>
                        <div className="number">+3670303030</div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="cname">Kiss Bence</div>
                    <div className="details">
                        <div className="email">bencekiss@kissbence.com</div>
                        <div className="number">+3670303030</div>
                    </div>
                </div>
            </GDiv>
        </div> 
    )
}

export default List
