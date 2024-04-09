import React from 'react'
import { Card } from './Card';

export const Cards = ({courses}) => {
  function getCourses(){
    let allCourses = [];
    Object.values(courses).forEach((data) => {
      Object.values(data).forEach((category) => {
        category.forEach((course) =>{
          allCourses.push(course);
        });
      });
    });

    return allCourses;
  }
  
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course)=>{
          return <Card key={course.id} course={course} />
        })
      }
    </div>
  )
}
