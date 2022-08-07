import React from "react";
import Navlogo from './images/logo.png';
import UserLogo from "./images/user.png";
import Notifaction from "./images/bell.png"
import { NavLink } from "react-router-dom";
// .

import '../css/home.css'


const Navbar = () => {

 

  return (
    <>

        <div className="row">
          <div className="col-10">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                <img src={Notifaction} style={{position: "relative" , margin: "15px" , height: "35px" , width: "35px" }}/>
                  <img alt="" src={Navlogo} width="150" />
                </NavLink>
                <button1
                  className="navbar-toggler"
                  type="button1"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button1>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/classroom"
                      >
                        Classroom
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/exam"
                      >
                        Exam
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/calender"
                      >
                        Calender
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/faculty"
                      >
                        Faculty
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/lostandfound"
                      >
                        Lost and Found
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      {/* <NavLink
                        activeClassName="menu_active"
                        className="nav-link"
                        to="#"
                      >
                        <img onClick={handleClick} src={UserLogo} style={{ height: "35px" , width: "35px" }}/>
                      </NavLink> */}

                <NavLink className="navbar-brand" to='/loginuser'>
                <img src={UserLogo} style={{position: "relative" , margin: "3px" , height: "35px" , width: "35px" }}/>
               </NavLink>
               {/*.....................................................................................  */}

          {/* <span className="separator"></span>

<div id="userbox" className="userbox">

  <a href="#" data-toggle="dropdown">

    <figure className="profile-picture">

      <img src="#" alt="user-image" class="img-circle" height="35"/>

    </figure>

  </a>

  <div className="dropdown-menu">

    <ul className="dropdown-user list-unstyled">

      <li className="user-p-box">

        <div className="dw-user-box">

          <div className="u-img">

            <img src="" alt="user"/>

          </div>

          <div className="u-text">

            <h4>Demo</h4>

            <p className="text-muted">Demo</p>

            <a href="#" class="btn btn-danger btn-xs"><i class="fas fa-sign-out-alt"></i> LogOut</a>

          </div>

        </div>

      </li>

      <li role="separator" className="divider"></li>

      <li><a href="#"><i className="fas fa-user-shield"></i> </a></li>

      <li><a href="#"><i className="fas fa-mars-stroke-h"></i> </a></li>

      <li><a href="#"><i className="far fa-envelope"></i> </a></li>

     

        <li role="separator" className="divider"></li>

        <li><a href="#"><i className="fas fa-toolbox"></i> </a></li>

      <?php endif; ?>

      <?php if(get_permission('school_settings', 'is_view') && !is_superadmin_loggedin()):?>

        <li role="separator" class="divider"></li>

        <li><a href="<?php echo base_url('settings/school');?>"><i class="fas fa-school"></i> <?php echo translate('school_settings');?></a></li>

      <?php endif; ?>

      <li role="separator" class="divider"></li>

      <li><a href="<?php echo base_url('authentication/logout');?>"><i class="fas fa-sign-out-alt"></i> <?php echo translate('logout');?></a></li>

    </ul>

  </div>
 */}

               {/* ..................................................................................... */}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      
    </>
  );
};

export default Navbar;