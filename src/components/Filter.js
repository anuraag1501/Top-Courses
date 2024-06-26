import React from 'react'

const Filter = (props) => {
  const filterData = props.filterData;
  const filterCourses = props.filterCourses;
 
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
      {
        filterData.map((data) => (
        <button onClick={() => {filterCourses(data.Title)}} className={`
        text-lg px-2 py-1 rounded-md font-medium text-white
        bg-black hover:bg-opacity-50 border-2 
        
        transition-all duration-300
          `} key={data.id}> {data.Title} </button>
        ))
      }
    </div>
  )
}

export default Filter