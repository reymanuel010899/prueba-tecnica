import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Error404 from './pages/Error404' 
import Login from './pages/login'
import Home from './pages/Home'
import './App.css'
import Detail from './pages/Detail'

function App() {
  return (
    <Provider store={store}>
    <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Login/>} />
          <Route path="home" element={<Home/>} /> 
          <Route path="detail/:pk" element={<Detail/>} />
        </Routes>
      </Router>
      </Provider>
  )
}
export default App
