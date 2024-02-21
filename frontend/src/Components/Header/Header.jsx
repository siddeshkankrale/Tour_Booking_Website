import React,{useContext, useEffect, useRef} from 'react';
import { Button, Container, Row } from 'reactstrap';
import { NavLink, Link ,useNavigate} from 'react-router-dom';
import logo from '../../assets/images/oceannew.png';
import {AuthContext} from './../../context/AuthContext'
import './header.css';

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: './about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)

  const logout = ()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }

  const stickyHeaderFunc =()=>{
    window.addEventListener("scroll",()=>{
      if(document.body.scrollTop > 80 ||
       document.documentElement.scrollTop > 80
        ){
          headerRef.current.classList.add("sticky__header");
        }else{
          headerRef.current.classList.remove("sticky__header");
        }
    });
  };
  useEffect(()=>{
    stickyHeaderFunc();
    return window.removeEventListener("scroll",stickyHeaderFunc);
  });


  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt='' />

            </div>
            <div className="navigation">
              <ul className='menu d-flex alihn-items-center gap-5'>
                {
                  nav__links.map((items, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink to={items.path} className={navClass=>navClass.isActive ? 'active__link':""
                    }
                     >
                      {items.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>

            </div>

            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">

                {
                  user? <>
                  <h5 className='mb-0'>{user.username}</h5>
                  <Button className='btn btn-dark' onClick={logout}>LogOut</Button>
                  </> :<>
                  <Button className="btn primary__btn"><Link to='/login'>Login</Link></Button>
                <Button className="btn primary__btn"><Link to='/register'>Register</Link></Button>
                  
                  </>
                }
                
              </div>
              <span className="mobile__menu">
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
};

export default Header