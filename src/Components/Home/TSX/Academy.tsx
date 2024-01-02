import React, { useEffect, useState } from 'react'
import MyData from '../../FileJson/dataAcademy.json'
type getData = {
  id: number;
  subject: string;
  start: number;
  end: number;
  university: string;
  content: string;
  learned?: string[];
}


const Academy = () => {

  const [data, setData] = useState<getData[]>([]!);

  useEffect(() => {
    setData(MyData.data);

  }, [data])


  return (
    <div className='my-academy'>
      <div className='grid-content-academy'>
       
       {
        data.map(item => (
          <div className='grid-academy' key={item.id}>

          <div key={item.id} className='item1-academy'>
            <p>
              {item.subject}
            </p>
            <p><span className='my-date'>{item.start} - {item.end}</span></p>
          </div>

          <div className='item2-academy'>
            <p className='university'>{item.university}</p>
            <p><span>{item.content} 
            {item.learned && 
            item.learned.map((learn,index) => <span key={index}>
            <span className='learnSubject'>{learn}</span>
            <span>{ (item.learned !== void 0) && index < item.learned?.length -1 && ' , '}</span></span>)}
            </span></p>
          </div>
          </div>
        ))
       }
      
      </div>
    </div>
  )
}

export default Academy
