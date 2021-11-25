import React, {Component} from 'react';
import {Carousel, CarouselItem} from "react-bootstrap";
// import image1 from '../src/assets/1.jpg';
// import image2 from '../src/assets/2.jpg';
// import image3 from '../src/assets/3.jpg';
// import image4 from '../src/assets/4.jpg';
// import image5 from '../src/assets/5.jpg';
import image6 from '../assets/6.jpg';
// import image7 from '../src/assets/7.jpg';
import image8 from '../assets/8.jpg';
// import image9 from '../src/assets/9.jpg';
import image10 from '../assets/10.jpg';
import image11 from '../assets/11.jpg';
// import image12 from '../src/assets/12.jpg';
// import image13 from '../src/assets/13.jpg';
import image14 from '../assets/111.jpg';
class CarouselBox extends Component {
  render() {
    return (
      <Carousel >
        <Carousel.Item>
          <img
              className='d-block w-100'
              src={image14}
              weight={50}
              height={600}

          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
              // width='100%'
              className='d-block w-100'
              src={image8}
              weight={150}
              height={550}
          />
          <Carousel.Caption>
            <h3>Пили́п (Филип) Конова́л</h3>
            <p>Пили́п (Филип) Конова́л (15 вересня, 1888, Кутківці, Подільська губернія, нині:
              Чемеровецький район Хмельницької області — †3 червня, 1959, Галл, Квебек) — українсько-канадський військовик,
              єдиний українець-кавалер Хреста Вікторії, найвищої та найпочеснішої нагороди за мужність перед лицем ворога,
              якою можуть бути нагороджені солдати з країн, підлеглих Британській короні.
              </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
              className='d-block w-100'
              src={image6}
              weight={150}
              height={550}
          />
          <Carousel.Caption>
            <h3> Королівські вшанування Героїзм Коновала</h3>
            <p>На заході свого життєвого шляху в 1956 році Пилип вчергове зрозумів, що його військові подвиги не були даремними.
              Саме цього року, з нагоди 100-річчя заснування Хреста Вікторії — найславетнішого ордену
              Британської імперії — відбувалося вшанування всіх нагороджених.
              </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
              className='d-block w-100'
              src={image11}
              weight={150}
              height={550}
          />
          <Carousel.Caption>
            <h3>Героїзм Коновала</h3>
            <p>Коновалу було 28 років, коли в ранзі капрала він отримав призначення в спеціально сформований в
              Британській Колумбії для участі в бойових діях Першої Світової війни 47-й Батальйон Канадських Експедиційних Сил.
              За виявлений героїзм під час Битви за висоту 70 в Ленсі (Франція) в період від 22-го Серпня до 24 серпня 1917,
              Пилип Коновал отримав Хрест Вікторії
              </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
              className='d-block w-100'
              src={image10}
              weight={150}
              height={550}
          />
          <Carousel.Caption>
            <h3>Лікування і нагородження</h3>
            <p>Після попереднього очищення очей та контузії Коновал був евакуйований до Англії 26 серпня.
              Він був доправлений до лікарні Бофорт (Beaufort Hospital), що в Бристолі, а згодом до медичного центру Бовуд
              (Beauwood Medical Facility) поблизу Лондона. В цьому медичному центрі йому виліковували рану на голові,
              й головним лікарем котрий «поставив його на ноги» був доктор Воллес (Dr. CK Wallace) — провідний нейрохірург,
              він же й визначав, наскільки значна то була травма для організму Коновала. Коли він потрохи оправився від ран,
              тоді й був представлений до нагороди «Хрест Вікторії» Victoria Cross, яку вручав сам король Георг V 15 жовтня 1917
              року. Пришпиливши Пилипу нагороду на лацкан, він сказав: "«Your exploit is one of the most daring and heroic in
              the history of my army. For this, accept my thanks.» (Ваш подвиг є одним з найсміливіших та героїчних в історії
              моєї армії. За це прийміть мою подяку.)</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
//6 8 10 11 14
export default CarouselBox;
