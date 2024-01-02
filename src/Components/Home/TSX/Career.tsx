import React, { useEffect, useState } from 'react'
import myData from '../../FileJson/dataCarrier.json'
type getData = {
  id: number;
  position: string;
  start: number;
  monthStart?: number;
  monthEnd?: number;
  end?: number | string;
  company: string;
  content: string[];

}

const Career = () => {
  const [data, setData] = useState<getData[]>([]);

  useEffect(() => {
    setData(myData.data);
  }, [data])


  return (
    <div className='my-academy' id='carrier'>
      <div className='grid-content-academy'>

        {
          data.map(item => (
            <div className='grid-academy' key={item.id}>

              <div key={item.id} className='item1-academy'>
                <p>
                  {item.position}
                </p>
                <p>
                  {!item.monthStart && !item.monthEnd ?
                   <span className='my-date'>{item.start} - {item.end}</span> :
                   <>
                   <span className='my-date mobile-date'>{item.monthStart && `${item.monthStart} / `}  {item.start}</span><span className='distance-date mobile-date'> - </span>
                   <span className='my-date change-date mobile-date'>{item.monthEnd && `${item.monthEnd} / `} {item.end}</span>
                   </>
                  }
                 
                  </p>
              </div>

              <div className='item2-academy'>
                <p className='university'>{item.company}</p>   
                    <ul key={1}>
                      {
                        item.content.map((item,index) => <li key={index} style={{paddingTop: '5%'}}>{item}</li>)
                      }
                    </ul>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Career
