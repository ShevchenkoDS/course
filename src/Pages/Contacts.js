import React, {Component} from 'react';
import image1 from "../assets/1.jpg";

class Contacts extends Component {
  render() {
    return (
      <div style={{textAlign: "center", paddingTop: "40px"}}>
        <iframe width={'800px'} height={'500px'}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164156.3403664081!2d-71.48177614409167!3d46.85628295625436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2z0JrQstC10LHQtdC6LCDQmtCw0L3QsNC00LA!5e1!3m2!1sru!2sua!4v1637770615891!5m2!1sru!2sua"
            //width="800" height="600" style="border:0;"
            allowFullScreen="" loading="lazy"></iframe>
        <div>
          <p>
            Список джерел:
          </p>
          <p>
            Сайт Migration - http://en.migraciya.com.ua/news/the-integrated-world/en-philip-konoval---holder-of-the-highest-military-order-uk/
          </p>
          <p>
            Сайт The Canadian Encyclopedia - https://www.thecanadianencyclopedia.ca/en/article/filip-konowal
          </p>
          <p>
            Сайт Infoukes - http://www.infoukes.com/history/konowal/
          </p>
          <p>
            Сайт The Globe and Male - https://www.theglobeandmail.com/news/national/hill-70s-hero-parliament-hills-janitor-filip-konowals-journey-from-heroism-to-hardtimes/article34577719/
          </p>
          <p>
            Сайт Library and Archives Canada - https://www.bac-lac.gc.ca/eng/discover/military-heritage/first-world-war/100-stories/Pages/konowal.aspx
          </p>
          <p>
            Сайт THE VICTORIA CROSS - http://www.victoriacross.org.uk/bbkonowa.htm
          </p>
          <p>
            Сайт States ASS - https://nevadawolfpack.com/news/2008/9/3/Soccer_to_Play_at_USF_Friday_Host_Portland_State_Sunday.aspx
          </p>
        </div>
      </div>

    );
  }
}
export default Contacts;
