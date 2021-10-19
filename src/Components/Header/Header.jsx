import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, LogOut } = useAuth();

  return (
    <div className='header sticky-top shadow-lg'>
      <Navbar className='' collapseOnSelect expand='lg' variant='light'>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src='https://www.linkpicture.com/q/Meddical.svg' alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='bg-navbar' id='responsive-navbar-nav'>
            <Nav className='mx-auto nav-bar'>
              <Nav.Link as={Link} to='/doctor'>
                Doctors
              </Nav.Link>
              <Nav.Link as={Link} to='/blog'>
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to='/service'>
                Service Area
              </Nav.Link>
              <Nav.Link as={Link} to='/contact'>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to='/about'>
                About Us
              </Nav.Link>

              {!user.email ? (
                <Nav.Link as={Link} to='/login'>
                  <Button className='btn-regular'>Sign in</Button>
                </Nav.Link>
              ) : (
                <NavDropdown
                  eventKey={1}
                  title={
                    <img
                      className='profile-img'
                      src={user.photoURL}
                      alt='user pic'
                      onError={(e) => {
                        e.target.onerror = false;
                        e.target.src =
                          "https://www.linkpicture.com/q/download_86.png";
                      }}
                    />
                  }
                  id='basic-nav-dropdown'>
                  <div className='dashboard-box mx-auto'>
                    <div className='profile-info text-center'>
                      <img
                        src={user.photoURL}
                        alt=''
                        className='profile-info-img'
                        onError={(e) => {
                          e.target.onerror = false;
                          e.target.src =
                            "https://www.linkpicture.com/q/download_86.png";
                        }}
                      />
                      {user.displayName ? (
                        <p className='regular-subtitle mt-2'>
                          {user.displayName}
                        </p>
                      ) : (
                        <p className='regular-subtitle mt-2'>Unknown User</p>
                      )}
                      <button className='btn btn-regular py-1 px-2 rounded-pill '>
                        <i className='far fa-user-circle'></i> View Profile
                      </button>
                    </div>
                    <hr />
                    <div className='profile-info-body'>
                      <p>
                        <Link to='/'>
                          <i className='fas fa-bookmark'></i> Bookmarks
                        </Link>
                      </p>
                      <p>
                        <Link to='/' onClick={LogOut}>
                          <i className='fas fa-sign-out-alt'></i> Logout
                        </Link>
                      </p>
                    </div>
                  </div>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
