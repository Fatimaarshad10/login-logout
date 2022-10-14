import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink} from "react-router-dom";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
} from "reactstrap";
import { Link } from "react-router-dom";
import '../css/login.css'
function App() {
 
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div style={{ width: "100%" }}>
      <Navbar expand="xl">
        <NavbarBrand href="/"> Login-Logout
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
         
              <>
                <NavItem>
                  <NavLink className="navLink" to="/">
                Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Link className="navLink" to="/login">
                    Login
                  </Link>

                </NavItem>
                <NavItem>
                  <Link className="navLink" to="/logout">
                    logout
                  </Link>

                </NavItem>
                
              </>
          
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
