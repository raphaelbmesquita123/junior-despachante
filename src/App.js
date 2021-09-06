//components
import { NavBar } from './components/navBar';

//styles
import { GlobalStyle } from './styles/global'
import { Container } from './styles/';
 
function App() {
  return (
    <Container>
      <GlobalStyle />
      <NavBar />
    </Container>
  );
}

export default App;
