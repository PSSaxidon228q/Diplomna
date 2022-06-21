import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import FEN from '../ImagesTitle/FEN.png'
import Header from '../../Header/Header';
function ChapterFEN3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={FEN} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chapterfen2'} className='chapterclic'>Назад</Link>
      <Link to={'/title23'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title23'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterFEN3;