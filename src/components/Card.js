import React, { useState } from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";


export const Card = ({course}) => {
  const [liked, setLike] = useState(false);

  function clickHandler(){
    setLike(!liked);
  }
  
  return (
    <div className='w-[300px] bg-black bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative '>
        <img className='w-[300px] h-[200px]' scr={course.image.url} alt={course.image.alt}/>
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
          <button onClick={clickHandler}> 
            {liked ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>}
          </button>
        </div>
      </div>
      
      

      <div>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{course.description}</p>
      </div>
    </div>
  )
}
