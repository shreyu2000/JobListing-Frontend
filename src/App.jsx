
import {BrowserRouter , Routes ,Route} from  'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import JobDetails from './pages/JobDetails/JobDetails';
import JobPost from './pages/JobPost/JobPost';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/jobpost' element={<JobPost/>}/>
      {/* <Route path='/register' element={<RegisterPage/>}/> */}
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
