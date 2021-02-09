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
  return (
    <Div className="App">
      <Header />
      <Heading />
      <List />
      <Footer className="footer"/>
    </Div>
  );
}

export default App;
