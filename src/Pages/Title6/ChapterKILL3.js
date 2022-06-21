import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import KILL from '../ImagesTitle/KILL.png'
import Header from '../../Header/Header';
function ChapterKILL3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={KILL} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterkill2'} className='chapterclic'>Назад</Link>
      <Link to={'/title6'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title6'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterKILL3;