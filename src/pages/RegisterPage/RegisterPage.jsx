import Register from "../../components/Register/Register";
import banner from '../../assets/images/banner.png'
const RegisterPage = () => {
  return (
    <div style={{display : "flex"}}>
      <Register/>
      <img 
        style={{maxHeight:"100vh" , width:"50vw"}}
        src={banner}
        alt="bannerimg"
      />
    </div>
  )
}

export default RegisterPage
