import React from "react";
import '../Title.css'
import '../TitleLeft.css'
import SP from '../ImagesTitle/SP.png'
import { Link } from "react-router-dom";

function TitleLeftSP() {
    return(
        <div className="left">
            <div className="leftConteiner">
                <div className="img">
                    <img className="imgTitle" src={SP} alt=""/>
                    <div className="read">
                        <Link to={'/chaptersp1'} className="readClic">Читати</Link>
                        <div className="tip">
                            <div className="tipItem">
                                <h3>Тип</h3>
                                <p>Маньхуа</p>
                            </div>
                            <div className="tipItem">
                                <h3>Рік видання</h3>
                                <p>2019</p>
                            </div>
                            <div className="tipItem">
                                <h3>Автор</h3>
                                <p>Xiong Jie</p>
                            </div>
                            <div className="tipItem">
                                <h3>Художник</h3>
                                <p>Rosa</p>
                            </div>
                            <div className="tipItem">
                                <h3>Видавництво</h3>
                                <p>AC.QQ</p>
                            </div>
                            <div className="tipItem">
                                <h3>Віковий рейтинг</h3>
                                <p>Немає</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TitleLeftSP