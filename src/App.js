import { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Heading from './Components/Heading/Heading';
import List from './Components/List/List';

const Div = styled.div`
  margin: auto;
  max-width: 1200px;

`


function App() {
  const [searchValue, setSearchValue] = useState("")
  let searchValueChanged = (e) => {
    setSearchValue(e.target.value);
  }
  return (
    <Div className="App">
      <Header searchValueChanged={searchValueChanged}/>
      <Heading />
      <List searchValue={searchValue}/>
      <Footer className="footer"/>
    </Div>
  );
}

export default App;
