
import React, { useEffect, useRef } from 'react'

import MyImage from '../../Images/cv_img.png';

const Home = () => {
  const LetterRef = useRef<HTMLSpanElement>(null!);
  useEffect(() => {
    // const letter = document.querySelector('.hoc-sinh') as HTMLElement;
    const letter = LetterRef.current;
    const str: string[] = ['Học sinh', 'Front - end Developer', 'Back - end Developer'];
    let a: number = 0;
    let b: string = str[0];
    let c: number = 1;
    let d: string = '';
    letter.innerHTML = '';

    const getInteval =  window.setInterval(() => {
      if (a < b.length) {
        d += b[a];
        letter.innerHTML = d + '|';
        timeout();
        a++;
      }
      
      if (a === b.length) {
        const delay = setInterval(()=>{

      
        const getTimeOut = window.setTimeout(() => {
          if (letter) {
            letter.innerHTML = letter.textContent?.split('').slice(0, (letter.textContent.length || 0) - 1).join('').replace(/,/g, '') + '|';
            timeout();
          }
        }, 400);
        if (letter.textContent === '') {
          a = 0;
          clearTimeout(getTimeOut);
          b =str[c++];
          if( c > 2){
            c = 0;
          }
          d = '';
        }
        window.clearInterval(delay);
      },800)
      }
    }, 400);

    const timeout = () => {
      const getTimeout = window.setTimeout(() => {
        if (letter.textContent !== null) {
          letter.innerHTML = letter.innerHTML.split('|').join('');
        }
        clearTimeout(getTimeout);
      }, 380);
    }
    return () => clearInterval(getInteval);

  }, [])


  return (
    <div className='home-page'>
      <div className='introduce'>
        <h2>Xin chào, tôi tên là </h2>
        <h2 className='home-name'>Nguyễn Hữu Cường</h2>
        <h2>Và tôi là <span style={{ color: '#28e5e5' }} className='hoc-sinh' ref={LetterRef}>Học Sinh</span></h2>
        <p>Nay tôi muốn ứng tuyển vào vị trí thực tập React, TypeScript hoặc PHP, Laravel</p>
      </div>
      <div className='box-image'>
        <img src={MyImage} alt="" className='img-home' />
      </div>
    </div>
  )
}

export default Home
