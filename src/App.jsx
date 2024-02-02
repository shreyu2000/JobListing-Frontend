
import {BrowserRouter , Routes ,Route} from  'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import JobDetails from './pages/JobDetails/JobDetails';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/job-details' element={<JobDetails/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      {/* <Route path='/register' element={<RegisterPage/>}/> */}
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
