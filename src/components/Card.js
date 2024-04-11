import React, { useState } from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";


export const Card = ({course}) => {
  const [liked, setLike] = useState(false);

  function clickHandler(){
    setLike(!liked);
  }
  
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative '>
        <img className='w-full min-h-[168px] object-cover' src={course.image.url} alt={course.image.alt}/>
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 -bottom-3 shadow-xl grid place-items-center'>
          <button onClick={clickHandler}> 
            {liked ? <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/>}
          </button>
        </div>
      </div>
      
      

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='text-white text-base mt-2'>{course.description}</p>
      </div>
    </div>
  )
}
