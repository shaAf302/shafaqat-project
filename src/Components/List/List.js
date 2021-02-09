// import {Animated} from "react-animated-css";
import styled from 'styled-components'
import {contacts} from '../../Assets/Contacts.json'

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
        transition: 2s;
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
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  

function List({searchValue}) {
    let filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()));
    let firstLetters = []

    filteredContacts.forEach(val => {
        // console.log(val.name[0]);
        firstLetters.push(val.name[0]);
    })

    let unique = firstLetters.filter(onlyUnique);

    let letterClicked = (e) => {
        console.log(e.target.innerText);
        filteredContacts = contacts.filter(contact => contact.name.toLowerCase().startsWith(e.target.innerText.toLowerCase()));
    
    }

    return (
        <div>
            <Div>
                {
                    unique.map(letter => (
                        <div className="selector" onClick={letterClicked}>{letter}</div>
                    ))
                }
            </Div>
            <GDiv className="grid">
            {
                filteredContacts.map(contact => {
                    return(
                    
                        <div key={contact.id} className="grid-item animate__animated animate__flipInX">
                            <div className="cname">{contact.name}</div>
                                <div className="details">
                                    <div className="email">{contact.email}</div>
                                    <div className="number">{contact.phone}</div>
                                </div>
                        </div>
                    )
                })
            }
            </GDiv>
        </div> 
    )
}

export default List
