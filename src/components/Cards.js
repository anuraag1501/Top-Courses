import React from 'react'
import { Card } from './Card';

export const Cards = ({ courses }) => {
  console.log("PRINTING",courses);
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        courses.map((course) => {
          return <Card key={course.id} course={course} />
        })
      }
    </div>
  )
}
