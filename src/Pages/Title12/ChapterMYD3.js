import React from 'react'
import { Link } from 'react-router-dom';
import '../Chapter.css'
import MYD from '../ImagesTitle/MYD.png'
import Header from '../../Header/Header';
function ChapterMYD3() {
  return (
    <div className='chapter'>
      <Header/>

    <div className='chapterimgcon'>
        <img className="chapterimg" src={MYD} alt=""/>
    </div>

      <div className='chaptercon'>
      <Link to={'/chaptermyd2'} className='chapterclic'>Назад</Link>
      <Link to={'/title12'} className='chapterclic'>Назад до тайтлу</Link>
      <Link to={'/title12'} className='chapterclic'>Далі</Link>
    </div>
    </div>
    
  )
}

export default ChapterMYD3;