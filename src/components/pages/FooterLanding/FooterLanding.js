import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Navbar/ud_logo2.png';
import { FooterStyle } from './FooterStyle';
import FooterCol from './FooterCol';
import { Layout } from 'antd';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../NavBarLanding/NavBarStyle';

const { Footer } = Layout;

export default function FooterLanding() {
  return (
    <>
      <Footer>
        <FooterStyle>
          <div className="container">
            <div className="footer__col1">
              <img
                src={logo}
                to={`/landing`}
                alt="underdog devs logo"
                height="68"
                style={{ marginLeft: '1vw' }}
              />
            </div>
            <div className="footer__col2">
              <FooterCol
                heading="Mentees"
                links={[
                  {
                    title: 'Become a Mentee',
                    path: '/',
                    type: 'Link',
                  },
                ]}
              />
            </div>
            <div className="footer__col3">
              <FooterCol
                heading="Mentors"
                links={[
                  {
                    title: 'Become a Mentor',
                    path: '/',
                    type: 'Link',
                  },
                ]}
              />
            </div>
            <div className="footer__col4">
              <FooterCol
                heading="Connects"
                links={[
                  {
                    title: 'About Us',
                    path: '/',
                    type: 'Link',
                  },
                  {
                    title: 'Donate',
                    path: '/',
                    type: 'Link',
                  },
                  {
                    title: 'Contact Us',
                    path: '/',
                    type: 'Link',
                  },
                ]}
              />
            </div>
            <div className="footer__col5">
              <NavBtn>
                <NavBtnLink to={`/login`} key="login">
                  Login
                </NavBtnLink>
                <NavBtnLink to={`/signup`} key="signup">
                  Signup
                </NavBtnLink>
              </NavBtn>
            </div>
          </div>
          <div className="copyright">
            Underdog Devs
            <div className="container"></div>
          </div>
        </FooterStyle>
      </Footer>
    </>
  );
}
// return (
//   <>

//     {/* <Footer>
//       <Row>
//         <Col span={6} order={4}>
//           <NavBtn style={{ display: 'flex' }}>
//             <NavBtnLink to={`/login`} key="login">
//               Login
//             </NavBtnLink>
//             <NavBtnLink to={`/signup`} key="signup">
//               Signup
//             </NavBtnLink>
//           </NavBtn>
//         </Col>
//         <Col span={6} order={3}>
//           <NavLink to={`/mentor`}>Mentor</NavLink>

//         </Col>
//         <Col span={6} order={2}>
//           <NavLink to={`/mentee`}>Mentee</NavLink>
//         </Col>
//         <Col span={6} order={1}>
//           <img
//             src={logo}
//             to={`/landing`}
//             alt="underdog devs logo"
//             height="68"
//             style={{ marginLeft: '1vw' }}
//           />
//         </Col>
//       </Row>
//     </Footer> */}
//   </>
// );