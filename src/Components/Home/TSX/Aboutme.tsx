import React, { useEffect, useRef } from 'react'
const MyImage = require('../../Images/cv_img.png');

const Aboutme = () => {
  const getContentRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const getContent: HTMLDivElement = getContentRef.current;
    let content: string = getContent.innerHTML;
    let contentArray: string[] = content.split('</p>');
    contentArray = contentArray.map(item => item.replace(RegExp('<p>|<span>|</span>', 'g'), ''));
    contentArray = contentArray.filter(item => item !== '');
    let getNumberSpan: number[] = contentArray.map(item => item.indexOf(':'));
    getNumberSpan = getNumberSpan.map(item => item + 1);
    let countDetailContent = 0, countLengthArray = 0, checkNumber2 = false;
    getContent.innerHTML = '';
    const getInterval: NodeJS.Timer = setInterval(() => {
      if (countLengthArray < contentArray.length) {
        if (countDetailContent === 0) {
          getContent.innerHTML += '<p class="EleP_' + countLengthArray + '"><span class="EleS_' + countLengthArray + '"></span></p>';
        }
        if (countDetailContent < contentArray[countLengthArray].length) {
          if (getContent.querySelector('.EleS_' + countLengthArray)) {
            const getContentSpan = getContent.querySelector('.EleS_' + countLengthArray) as HTMLSpanElement;
            const getContentP = getContent.querySelector('.EleP_' + countLengthArray) as HTMLParagraphElement;
            if (countDetailContent <= getNumberSpan[countLengthArray]) {
              getContentSpan.innerHTML += contentArray[countLengthArray][countDetailContent] + '|';
              timeout(getContentSpan);
            } else {
              if(countLengthArray === 3){
                if(!checkNumber2){
                  getContentP.innerHTML += '<a href="tel:0906322153" class="Phone" style="color:white" target="_blank"></a>';
                  checkNumber2 = true;
                }
                if(getContentP.querySelector('.Phone')){
                  const getPhone = getContentP.querySelector('.Phone') as HTMLElement;
                  getPhone.innerHTML += contentArray[countLengthArray][countDetailContent] + '|';
                }
              } else {
                getContentP.innerHTML += contentArray[countLengthArray][countDetailContent] + '|';
              }
              timeout(getContentP)
            }
            countDetailContent++;
          }
        } else {
          countLengthArray++;
          countDetailContent = 0;
        }
      } else {
        countDetailContent = 0;
        countLengthArray = 0;
        clearInterval(getInterval);
      }
    }, 50);
    const timeout = (getContent: HTMLElement) => {
      const getTimeOut = setTimeout(() => {
        getContent.innerHTML = getContent.innerHTML.split('|').join('');
        clearTimeout(getTimeOut);
      }, 40);
    }
  }, [])


  return (
    <div className='About-me'>
      <div>
        <img src={MyImage} alt="" />
      </div>
      <div className='information' ref={getContentRef}>
        <p><span>Họ tên đầy đủ: </span>Nguyễn Hữu Cường</p>
        <p><span>Giới tính: </span>Nam</p>
        <p><span>Ngày tháng năm sinh: </span>22/03/1997</p>
        <p><span>Số điện thoại: </span>0906322153</p>
        <p><span>Email: </span> cuong979899@gmail.com</p>
        <p><span>Địa chỉ: </span>Gò Vấp, Thành phố Hồ Chí Minh</p>
      </div>
    </div>
  )
}

export default Aboutme
