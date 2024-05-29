import React from 'react'
import '../Component/Courses'
import '../Component/Courses.css'
import { data } from '../Helper.js'
import Courses from '../Component/Courses'
import '../Responsive.css'

export default function CoursePage() {

  return (
    <div className="cont">
      <div className='containerStyle'>
        {data.map((value, key) => {
          return (<Courses key={key} image={value.image} courseName={value.courseName} aboutCourse={value.aboutCourse} />);
        })}
      </div>
    </div>
  )

}
