import { Form, Row, FormGroup, Label, Input, Button } from "reactstrap";
import '../css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
  const UserLoader = async()=>{
    window.open('http://localhost:8000/auth/google',"_self")
    
  }
  const facebook = async()=>{
    window.open('http://localhost:8000/auth/facebook',"_self")
    
  }
  return (
    <>
   
      <div className="login-container">
        <h1 className="login-heading">login</h1>
        <Form className="login-form" for="email">
          <Row>
            <FormGroup>
              <Label>Email</Label>
              <Input
               
                name="email"
                type="email"
               
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                name="password"
                type="password"
           
              />
            </FormGroup>
           
           
            <FormGroup>
            <>
            <Input
    className="mb-3"
    type="select"
    name="admin"
               >
    <option  value={true}>
      Admin 
    </option>
    <option  value={false}>
     User
    </option>
  </Input>
          
  </>

  </FormGroup>
          </Row>

          <Button className="login-button"  > Login</Button>
        </Form>
        
        <button onClick={()=>UserLoader()}>Google</button>
        <button onClick={()=>facebook()}>Facebook</button>

      </div>
     
    </>
    
  );
}

export default Login;

