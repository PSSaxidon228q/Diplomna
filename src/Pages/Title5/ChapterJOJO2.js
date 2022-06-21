import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import JOJO from '../ImagesTitle/JOJO.png'
import Header from '../../Header/Header';
function ChapterJOJO2() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={JOJO} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterjojo1'} className='chapterclic'>Назад</Link>
      <Link to={'/title5'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/chapterjojo3'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterJOJO2;