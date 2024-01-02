import React, { useEffect, useState, useRef } from 'react'
import Home from './Home';
import Aboutme from './Aboutme';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Academy from './Academy';
import Project from './Project';
import Career from './Career';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavbarHome = () => {
  // phải dùng useState để luôn re-render:
  const [numpage, setPage] = useState<number>(1);
  const [boldDiv, setBold] = useState<string | null>(null);
  const [checkMobileClick, setCheckMobile] = useState<boolean>(false);
  const contentMobileRef = useRef<HTMLDivElement>(null!);
  const navMobileRef = useRef<HTMLDivElement>(null!);
  const iconHomeRef = useRef<SVGSVGElement>(null!);

  const returnPage = (page: number) => {
    setPage(page);
    switch (page) {
      case 1:
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        setBold("Home");
        hiddenNavMobile();
        break;
      case 2:
        setBold("AboutMe");
        hiddenNavMobile();
        break;
      case 3:
        setBold("Academy");
        hiddenNavMobile();
        break;
      case 4:
        setBold("Project");
        hiddenNavMobile();
        break;
      case 5:
        setBold("Career");
        hiddenNavMobile();
        break;
    }
  }
  useEffect(() => {
    const navMobile = navMobileRef.current;
    const contentMobile = contentMobileRef.current;

    window.onscroll = () => {
      if (window.scrollX > 750) {
        navMobile.style.display = 'none';
      }
    }


    window.onclick = (e) => {

      if (e.pageX <= 1000) {
        if (contentMobile.style.display === 'grid') {
          if (!iconHomeRef.current.contains(e.target as Node)) {
            if (!contentMobile.contains(e.target as Node)) {
              contentMobile.style.display = 'none';
              setCheckMobile(false);
            }
          }
        }
      }
    }
    return () => {
      window.onscroll = null;
      window.onclick = null;
    }
  }, [numpage, checkMobileClick]);

  const hiddenNavMobile = (): void => {
    if (contentMobileRef.current) {
      const contentMobile = contentMobileRef.current;
      contentMobile.style.display = 'none';
      setCheckMobile(false);
    }
  }
  const handleClickNavMobile = () => {
    const contentMobile = contentMobileRef.current;
    if (!checkMobileClick) {
      contentMobile.style.display = 'grid';
      contentMobile.style.gridTemplateColumns = 'repeat(2,2fr)';
    } else {
      contentMobile.style.display = 'none';
    }
    setCheckMobile((prevCheck) => prevCheck = !prevCheck);
  }

  return (
    <div className='navbar-header'>
      <div className='nav-mobile' ref={navMobileRef}>
        <FontAwesomeIcon icon={faBars} className='icon-home' onClick={handleClickNavMobile} ref={iconHomeRef} />
        <div className='detail-nav-mobile' ref={contentMobileRef}>
          <a href="#1">  <div onClick={() => returnPage(1)}
            style={{ fontWeight: (boldDiv === 'Home') ? 'bold' : 'normal', color: (boldDiv === 'Home') ? '#28e5e5' : 'black' }}><span>Trang chủ</span>
          </div>
          </a>
          <a href="#AboutME">
            <div onClick={() => returnPage(2)}
              style={{ fontWeight: (boldDiv === 'AboutMe') ? 'bold' : 'normal', color: (boldDiv === 'AboutMe') ? '#28e5e5' : 'black' }}><span>Về bản thân tôi</span>
            </div>
          </a>
          <a href="#Academy">
            <div onClick={() => returnPage(3)}
              style={{ fontWeight: (boldDiv === 'Academy') ? 'bold' : 'normal', color: (boldDiv === 'Academy') ? '#28e5e5' : 'black' }}><span>Trình độ học vấn</span>
            </div>
          </a>
          <a href="#Project"> <div onClick={() => returnPage(4)}
            style={{ fontWeight: (boldDiv === 'Project') ? 'bold' : 'normal', color: (boldDiv === 'Project') ? '#28e5e5' : 'black' }}><span>Các dự án</span>
          </div>
          </a>
          <a href='#Career'> <div onClick={() => returnPage(5)}
            style={{ fontWeight: (boldDiv === 'Career') ? 'bold' : 'normal', color: (boldDiv === 'Career') ? '#28e5e5' : 'black' }}><span>Nghề nghiệp</span>
          </div>
          </a>
        </div>
      </div>

      <div className='nav-custome'>
        <div className='nav-logo' onClick={() => returnPage(1)}>Cv xin việc.</div>
        <div className='content-nav'>
          <div onClick={() => returnPage(1)}
            style={{ fontWeight: (boldDiv === 'Home') ? 'bold' : 'normal', color: (boldDiv === 'Home') ? '#28e5e5' : 'white' }}>Trang chủ
          </div>
          <div onClick={() => returnPage(2)}
            style={{ fontWeight: (boldDiv === 'AboutMe') ? 'bold' : 'normal', color: (boldDiv === 'AboutMe') ? '#28e5e5' : 'white' }}>Về bản thân tôi
          </div>
          <div onClick={() => returnPage(3)}
            style={{ fontWeight: (boldDiv === 'Academy') ? 'bold' : 'normal', color: (boldDiv === 'Academy') ? '#28e5e5' : 'white' }}>Trình độ học vấn
          </div>

          <div onClick={() => returnPage(4)}
            style={{ fontWeight: (boldDiv === 'Project') ? 'bold' : 'normal', color: (boldDiv === 'Project') ? '#28e5e5' : 'white' }}>Các dự án
          </div>

          <div onClick={() => returnPage(5)}
            style={{ fontWeight: (boldDiv === 'Career') ? 'bold' : 'normal', color: (boldDiv === 'Career') ? '#28e5e5' : 'white' }}>Nghề nghiệp
          </div>
        </div>
      </div>

      <div className='main-content'>
        {(numpage === 1) ? <Home></Home> : ((numpage === 2) ? <Aboutme></Aboutme> :
          ((numpage === 3) ? <Academy></Academy> : ((numpage === 4) ? <Project></Project> : ((numpage === 5) && <Career></Career>))))}
      </div>


      <div className='main-content' id='main--content-mobile'>
        <div id='Home'>
          <Home></Home>
        </div>

        <div id='AboutME'>
          <Aboutme></Aboutme>
        </div>

        <div id='Academy'>
          <Academy></Academy>
        </div>

        <div id='Project'>
          <Project></Project>
        </div>
        <div id='Career'>
          <Career></Career>
        </div>
      </div>

      <div className='footer-customer'>
        <p><span style={{ fontWeight: 'bold' }}>Email: </span><span>cuong979899@gmail.com</span></p>
        <p>Sản phẩm được viết bằng React with TypeScript</p>
      </div>
    </div>
  )
}
