import React, {Component} from 'react';
import CarouselBox from "../Component/CarouselBox";
import {Container} from "react-bootstrap";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from '../assets/6.jpg'
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
// import image9 from '../../../course-poject/src/assets/9.jpg';
// import image10 from '../../../course-poject/src/assets/10.jpg';
// import image11 from '../../../course-poject/src/assets/11.jpg';
// import image12 from '../../../course-poject/src/assets/12.jpg';
// import image13 from '../../../course-poject/src/assets/13.jpg';

class GalleryPicture extends Component {
  render() {
    return(
        <div>
          <Container className='content'>
            <div height={'350'} width={'300px'} className="card mb-3">
              <img
                  src={image1}
                  className="card-img-top"
                  alt="..."
                  weight={150}
                  height={550}
              />
              <div className="card-body">
                <h5 className="card-title">Пилип Коновал. </h5>
                <p className="card-text">Особливий Хрест Вікторії
                </p>
                <p>
                  Хрест Вікторії вручався виключно за надзвичайну хоробрість на полі битви у бою «перед лицем ворога»,
                  тому ним нагороджували не генералів і адміралів, а в основному рядових солдатів, унтерів і молодших офіцерів.
                  Після Другої світової війни відбулося лише 14 нагороджень Хрестом Вікторії: по чотири за війни в Кореї та у
                  В’єтнамі, по два за Фолкленди і Афганістан, по одному за Індонезію і Ірак.
                </p>
                <p>
                  Перші Хрести відливалися не із золота, а з бронзи російських гармат, захоплених англійцями в ході Кримської
                  війни (1853-1856). У ХХ ст. матеріалом для Хрестів Вікторії стали трофейні гармати, здобуті в Китаї під час
                  придушення Боксерського повстання 1899-1901 рр.</p>
                <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>
            <div className="card mb-3">
              <img
                  src={image2}
                  className="card-img-top"
                  alt="..."
                  weight={150}
                  height={550}
              />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Пилип Коновал зі своїм відділенням в окопах на території Франції під час Першої світової війни
                </p>
                <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>
            <div className="card mb-3">
              <img src={image3} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Пилип Коновал після церемонії присвоєння звання
                </p>
                <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>
            <div className="card mb-3">
              <img
                  src={image4}
                  className="card-img-top"
                  alt="..."
                  weight={150}
                  height={550}
              />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Пилип Коновал з офіцерами та сержантами свого батальйону, що були удостоєнні нагород за визначні досягнення на полі бою</p>
                <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>
            <div className="card mb-3">
              <img
                  src={image5}
                  className="card-img-top"
                  alt="..."
                  weight={150}
                  height={550}
              />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Пилип Коновал с залишками свого батальйону після виходу з оточення</p>
                <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>
            <div className="card mb-3">
              <img
                  src={image6}
                  className="card-img-top"
                  alt="..."
                  weight={150}
                  height={550}
              />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">
                  Пилип Коновал на зборах ветеранів, що були нагороджені хрестами Вікторії
                </p>
                <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>
            <div className="card mb-3">
              <img
                  src={image7}
                  className="card-img-top"
                  alt="..."
                  weight={150}
                  height={550}
              />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Пилип Коновал з своїм товаришем капралом Кені Маєром</p>
                <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>
            <div className="card mb-3">
              <img
                  src={image8}
                  className="card-img-top"
                  alt="..."
                  weight={150}
                  height={550}
              />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Дякую за перегляд галереї</p>
                <p className="card-text"><small className="text-muted"></small></p>
              </div>
            </div>
          </Container>
        </div>
    );
  }
}



export default GalleryPicture;
