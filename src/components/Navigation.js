import React from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { logout } from '../actions/action'

const Navigation = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/')
    }

  return (
    <>
        <Navbar bg="dark" style={{height:"75px"}}>
            <Navbar.Brand href="/purchasedItems" style={{marginTop:"10px"}}>
                <img height="55px" alt="csp1" src={process.env.PUBLIC_URL+ '/images/csp1.png'} />
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-end' style={{marginRight:"10px"}}>
                <Nav>
                    <NavItem>
                        <button className='logout' onClick={(e) => {handleLogout(e)}}>
                            Logout
                        </button>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      
    </>
  )
}

export default Navigation
