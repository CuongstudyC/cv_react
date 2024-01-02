import { useEffect, useRef, useState } from 'react'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Img1_Project1 from '../../Images/Project1/img1.png';
import Img2_Project1 from '../../Images/Project1/img2.png';
import Img3_Project1 from '../../Images/Project1/img3.png';
import Img4_Project1 from '../../Images/Project1/img4.png';

import Img1_TezWich from '../../Images/Tezwich/img1.png';
import Img2_TezWich from '../../Images/Tezwich/img2.png';
import Img3_TezWich from '../../Images/Tezwich/img3.png';
import Img4_TezWich from '../../Images/Tezwich/img4.png';

import Img1_Project2 from '../../Images/Project2/img1.png';
import Img2_Project2 from '../../Images/Project2/img2.png';
import Img3_Project2 from '../../Images/Project2/img3.png';
import Img4_Project2 from '../../Images/Project2/img4.png';

type typeData = {
  id: number;
  name: string;
  nameImg: string[];
  language: string;
  link: string;
}

const Project = () => {

  const [dataProject, setDataProject] = useState<typeData[]>([]!);
  const [images, setImages] = useState<string[]>([]!);
  const modalRef = useRef<HTMLDivElement>(null!);

  const [selectImage, setSelectImage] = useState<number>(0);

  const displayImage = useRef<HTMLImageElement>(null!);

  const fullDisplayImage = useRef<HTMLImageElement>(null!);

  const displayBoxImage = useRef<HTMLDivElement>(null!);

  const DisplayNoneModalRef = useRef<HTMLDivElement>(null!);

  const [checkLengthData, setcheckLengthData] = useState<boolean>(false);

  const lasDivImg = useRef<HTMLDivElement>(null!);

  const [checkClick, setCheckClick] = useState<number>(0);

  const [numPage, setNumPage] = useState<number>(1);

  const [numArray, setNumArray] = useState<number[]>([]);

  const [totalLength, setTotalLength] = useState<number>(0);

  const HandleImg = (id: number) => {
    setImages(dataProject[id].nameImg);
    if (checkClick !== id) {
      setSelectImage(0);
    }
    modalRef.current.style.display = 'block';
    setCheckClick(id);
  }

  const closeModalImg = (name: string) => {
    if (name === 'modal') {
      modalRef.current.style.display = 'none';
    } else {
      displayBoxImage.current.style.display = 'none';
    }
  }
  const HandleClickIcon = (name: string | number) => {
    if (typeof (name) === 'string') {
      switch (name) {
        case 'left':
          if (selectImage === 0) {
            setSelectImage(images.length - 1);
          } else {
            setSelectImage((prevImages) => prevImages - 1);
          }
          break;
        case 'right':
          if (selectImage === images.length - 1) {
            setSelectImage(0);
          } else {
            setSelectImage((prevImages) => prevImages + 1);
          }
          break;
      }
    } else {
      setSelectImage(name);
    }

  }

  const handleSelectPage = (name: string | number) => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    if( typeof name === 'string'){
      switch (name) {
        case 'left':
  
          if (numPage === 1) {
            setNumPage(1);
          } else {
            setNumPage((prevNumPage) => prevNumPage - 1);
          }
          break;
        case 'right':
          if (numPage === totalLength) {
            setNumPage(totalLength);
          } else {
            setNumPage((preNumPage) => preNumPage + 1);
          }
          break;
      }
    } else {
      setNumPage(name);
    }

  }

  const functionDisplayFullImage = () => {
    fullDisplayImage.current.src = images[selectImage];
    displayBoxImage.current.style.display = 'block';
  }

  useEffect(() => {

    setDataProject([
      {
        id: 0,
        name: 'Web bán đá quý, kim cương, hột xoàn',
        nameImg: [Img1_Project1, Img2_Project1, Img3_Project1, Img4_Project1],
        language: 'HTML5, CSS, JS, BOOTSTRAP.', link: 'https://cuongproject1.000webhostapp.com/'
      },

      {
        id: 1,
        name: 'Bài dự thi tezwich với đề tài bán các loại cây',
        nameImg: [Img1_TezWich, Img2_TezWich, Img3_TezWich, Img4_TezWich],
        language: 'HTML5, CSS, JS, BOOTSTRAP, JSON.', link: 'https://cuongtezwich.000webhostapp.com/'
      },

      {
        id: 2,
        name: 'Web bán thức ăn (chủ yếu bên backend)',
        nameImg: [Img1_Project2, Img2_Project2, Img3_Project2, Img4_Project2],
        language: 'LARAVEL, PHP, MY SQL.', link: 'https://github.com/CuongstudyC/Project2'
      },
    ]);

    displayImage.current.src = images[selectImage];


    const num: number = Math.ceil(dataProject.length / 4);

    const getNumArray: number[] = [];
    for (let i = 0; i < num; i++) {
      getNumArray.push(i + 1);
    }

    let getCount: number = numPage;

    while (true) {
      if (getCount % 4 === 0) {
        break;
      }
      getCount++;
    }
    let newNumArray: number[] = [];

    newNumArray = getNumArray.filter(item => item >= (getCount - 3) && item <= getCount);

    setTotalLength(num);

    setNumArray(newNumArray);

    window.onclick = (event) => {
      const clickImageFirst = document.querySelectorAll('.my-project .display-project img');
      const display = displayImage.current;
      let check: boolean = false;
      if (clickImageFirst) {
        clickImageFirst.forEach(item => {
          if (item === event.target) {
            check = true;
          }
        })
      }
      if (!check && event.target !== display) {
        if (event.target === DisplayNoneModalRef.current) {
          modalRef.current.style.display = 'none';
        } else if (event.target === displayBoxImage.current) {
          displayBoxImage.current.style.display = 'none';
        }
      }
    }

    if (checkLengthData) {
      if (dataProject.length % 2 !== 0) {
        lasDivImg.current.style.justifySelf = 'center';
        lasDivImg.current.style.gridColumn = 'span 2';
      }
    }

    setcheckLengthData(true);

    return () => {
      window.onclick = null;
      setcheckLengthData(false);
    }

  }, [selectImage, images, dataProject.length, checkLengthData, numPage])
  return (
    <>
      <div className='my-modal' ref={modalRef}>
        <div className='border-modal' ref={DisplayNoneModalRef}>
          <div className='modal-content'>
            <span className='button-close' onClick={() => closeModalImg('modal')}>&times;</span>
            <div className='img-modal-content'>
              <div className='big-img'>
                <div className='left' onClick={() => HandleClickIcon('left')}>
                  <FontAwesomeIcon icon={faAngleLeft} className='icon-angle' ></FontAwesomeIcon>
                </div>
                <div>
                  <img src={images[0]} alt="" ref={displayImage} onClick={functionDisplayFullImage} />
                </div>
                <div className='right' onClick={() => HandleClickIcon('right')}>
                  <FontAwesomeIcon icon={faAngleRight} className='icon-angle' ></FontAwesomeIcon>
                </div>
              </div>
              <div className='img-grid'>
                {
                  images.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item} alt="" style={{ boxShadow: (selectImage === index) ? '0 4px 4px 0px black' : 'none' }} onClick={() => HandleClickIcon(index)} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-project'>
        <div className='display-project'>
          {
            dataProject.map((item, index) => {
              if (index >= 4 * (numPage - 1) && (index < 4 * numPage)) {
                return <div key={item.id} ref={lasDivImg}>
                  <p>{item.name}</p>
                  <img src={(images[0] === item.nameImg[0]) ? item.nameImg[selectImage] : item.nameImg[0]} alt="" onClick={() => HandleImg(index)} />
                  <p>{item.language}</p>
                  <a href={item.link} target='_blank' rel="noreferrer"> <p>Link trang web</p></a>
                </div>
              } else {
                return <div key={item.id} ref={lasDivImg} style={{display: 'none'}}></div>
              }
            })
          }
        </div>
        <div className='select-page'>
          <div onClick={() => handleSelectPage('left')}>
            <FontAwesomeIcon icon={faAngleLeft} className='page-left' ></FontAwesomeIcon>
          </div>
          {
            (numPage > 4) &&
            <>
              <div key={1} onClick={() => handleSelectPage(1) } 
               style={{color: (numPage === 1) ? '#ff5722': 'white', fontSize: (numPage ===1) ? '20px': '16px'}}>
                <p style={{ marginTop: '4px', display: 'inline-block' }} >1</p>
              </div>
              <div key={9999} className='cantTouch'>
                <p style={{ marginTop: '4px', display: 'inline-block' }} >...</p>
              </div>
            </>
          }

          {
            numArray.map(item => <div key={item} onClick={() => handleSelectPage(item)} 
            style={{color: (numPage === item) ? '#ff5722': 'white', fontSize: (numPage ===item) ? '20px': '16px'}}>
              <p style={{ marginTop: '4px', display: 'inline-block' }}>{item}</p>
            </div>)
          }

          {
            (totalLength > 4 && (numPage <= 4 || (numPage > 4 && numPage <= totalLength - 4))) &&
            <>
              <div key={9999} className='cantTouch'>
                <p style={{ marginTop: '4px', display: 'inline-block' }} >...</p>
              </div>

              <div key={totalLength} onClick={() => handleSelectPage(totalLength)} 
                style={{color: (numPage === totalLength) ? '#ff5722': 'white', fontSize: (numPage ===totalLength) ? '20px': '16px'}}>
                <p style={{ marginTop: '4px', display: 'inline-block' }}>{totalLength}</p>
              </div>
            </>
          }

          <div onClick={() => handleSelectPage('right')}>
            <FontAwesomeIcon icon={faAngleRight} className='page-right' ></FontAwesomeIcon>
          </div>
        </div>
      </div>

      <div className='displayFullImage' ref={displayBoxImage}>
        <span onClick={() => closeModalImg('displayFull')}>&times;</span>
        <img src={images[0]} alt="" ref={fullDisplayImage}/>
      </div>
    </>
  )
}

export default Project
