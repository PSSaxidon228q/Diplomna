import React from "react";
import './MainLeft.css'
import Manga from '../Images/Manga.png'
import Manhwa from '../Images/Manhwa.png'
import Manhua from '../Images/Manhua.png'
const MainLeft = () => {
  return (
    <div className="newmanga">
        <div className="newmanga_conteiner">
            <h1 className="C1">Як правильно читати мангу</h1>
            <div className="mangainfo">
            <img  className="faqimg" src={Manga} alt="" />
                <div className="faqinfo">
                    <h2> Манґа</h2>
                    <p className="faqText">Манґа — комікси, що створені в Японії, або японською мовою. Манґа в тій формі, в якій вона існує сьогодні, почала розвиватися після Другої світової війни, хоча традиція видання ілюстрованих романів має глибоке коріння в ранньому японському мистецтві.</p >
                    <p className="faqText">Читається Манґа зазвичай справа наліво, причиною чому є японська писемність Хіраґана (японська фонетична абетка), в якій стовпці ієрогліфів пишуться саме так.</p >
                </div>
            </div>
        </div>
        <div className="faqcon">
            <h1 className="C1">Як правильно читати манхву</h1>
            <div className="mangainfo">
            <img  className="faqimg" src={Manhwa} alt="" />
                <div className="faqinfo">
                    <h2> Манхва</h2>
                    <p className="faqText">Манхва —  корейські комікси. Термін означає і анімаційні мультфільми, карикатуру, а за межами Кореї зазвичай вживається для позначення виключно корейських коміксів.</p >
                    <p className="faqText">Манхва читається в тому ж напрямку, що і книги українською мовою — горизонтально зліва направо, тому що текст на Хангиль (корейська фонематична абетка) зазвичай так і пишеться, хоча іноді він може бути записаний так само як японський і китайський — вертикально справа наліво. Обидва варіанти читаються зверху вниз.</p >
                </div>
            </div>
        </div>
        <div className="faqcon">
            <h1 className="C1">Як правильно читати маньхуа </h1>
            <div className="mangainfo">
            <img  className="faqimg" src={Manhua} alt="" />
                <div className="faqinfo">
                    <h2> Маньхуа </h2>
                    <p className="faqText">Маньхуа або ма́ньхва — китайські комікси. Під цим поняттям об'єднують всі комікси, випущені в Китаї, а також переклади японської манги на китайську мову. Незважаючи на значне зростання виробництва маньхуа в материковому Китаї, більшість коміксів і раніше випускаються на Тайвані і в Гонконзі.</p >
                    <p className="faqText">Маньхуа читається в тому ж напрямку, що і книги українською мовою — горизонтально зліва направо, тому що текст на Чжуїнь (китайська  фонематична абетка) зазвичай так і пишеться, хоча іноді він може бути записаний так само як японський і корейський — вертикально справа наліво. Обидва варіанти читаються зверху вниз.</p >
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainLeft;