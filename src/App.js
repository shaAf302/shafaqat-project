import styled from 'styled-components';
import './App.css';
import Header from './Components/Header/Header';

const Div = styled.div`
  margin: auto;
  max-width: 1200px;
`

function App() {
  return (
    <Div className="App">
      <Header />
    </Div>
  );
}

export default App;
