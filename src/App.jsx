
import {BrowserRouter , Routes ,Route} from  'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import JobPost from './pages/JobPost/JobPost';
import JobDetailsPage from './pages/JobDetails/JobDetailsPage';


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/job-post' element={<JobPost/>}/>
      <Route path='/job-details/:id' element={<JobDetailsPage/>}/>
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
