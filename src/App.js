import { ToastContainer } from 'react-toastify'

//components
import { NavBar } from './components/navBar'
import { ImageContainer } from './components/imageContainer'

//styles
import { GlobalStyle } from './styles/global'
import { Container } from './styles/'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Container>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
      <GlobalStyle />
      <NavBar />
      <ImageContainer />
    </Container>
  )
}

export default App
