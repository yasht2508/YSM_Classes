import React from 'react'
import './Courses.css'
import '../App.css'
import { Link } from 'react-router-dom';
export default function Courses({image,courseName,aboutCourse}) {

  return (
    <div className='courseCard'>
      
      <img src={image} alt="..." style={{width:'100%', height:'200px'}} />
    
      <h3 className='cardItem'>{courseName}</h3>
      <div className='cardItem'>
        <p>{aboutCourse}</p>
      </div>
      <Link to="/course"><button className="btn cardItem" >Check Now</button></Link>
    </div>
  )
}
