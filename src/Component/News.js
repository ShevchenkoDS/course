import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import image from "../assets/a3a602261d8ebf44.jpg";
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
// import image8 from '../assets/8.jpg';
// import image9 from '../assets/9.jpg';
// import image10 from '../assets/10.jpg';
// import image11 from '../assets/11.jpg';
// import image12 from '../assets/12.jpg';
import image13 from '../assets/13.jpg';

class News extends Component {
  render() {
    return (
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
              <h5 className="card-title">Пилип Коновал. Українець, який отримав найвищу військову нагороду Британії – Хрест Вікторії</h5>
              <p className="card-text">Пилип Коновал (народився 15 вересня 1888 року в с. Кутківці Подільської губернії,
                помер 3 червня 1959 року в м. Халл, провінція Квебек, Канада) – єдиний в світі українець, нагороджений вищою
                військовою нагородою Великої Британії – Хрестом Вікторії. За всю історію з часу заснування ордену в 1856 році
                британські монархи нагородили ним лише 1 357 найвідважніших воїнів імперії, кожному з яких англійський король
                першим віддавав честь.
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
              <p className="card-text">Пилип Коновал був нагороджений за організацію прориву з оточення в серпні 1917 року
                біля французького міста Ланс цілого батальйону. Цей прорив українець зробив один, знищивши особисто щонайменше
                16 солдатів та офіцерів противника і 3 кулеметні обслуги.
              </p>
              <p>
                Кожен Хрест є іменним, на ньому викарбувано також дату здійсненого подвигу.
                Так ось, на ордені Пилипа Коновала значиться 24 серпня 1916 року. Саме в цей день наш земляк і заслужив найвищу
                нагороду Сполученого Королівства.
              </p>
              <p>
                Початок Першої світової виходець з Подільської губернії Пилип Коновал зустрів в канадській Оттаві.
                Він, на відміну від переважної більшості інших українців-емігрантів, був вихідцем з Російської імперії
                (союзника Великої Британії у війні), а тому не був інтернований і вступив в діючу армію добровольцем.
                Йому пощастило стати солдатом Його Величності в той час, як десятки тисяч галичан, буковинців і закарпатців,
                як підданих Габсбурзької монархії, канадський уряд розпорядився інтернувати в 24 спеціально побудовані концтабори.</p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
          </div>
          <div className="card mb-3">
            <img src={image3} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">Однак до Коновала претензій не виникло, і він благополучно став рядовим 77-го
                Оттавського піхотного батальйону. Службу в канадській армії український емігрант сприймав аж ніяк не як
                почесний обов’язок, і тим більше він навряд чи хотів чимось віддячити своїй новій батьківщині. Все пояснюється
                набагато простіше і банальніше: до моменту призову Пилип Коновал вже декілька місяців був без роботи,
                сяк-так перебиваючись випадковими заробітками. Військову ж службу уродженець українського Поділля знав і любив.
                Все ж таки за спиною у нього були п’ять років служби в російській імператорській армії, в якій Коновал відмінно себе проявив.
              </p>
              <p>
                Канадська армія, мабуть, виявилася не страшнішою за російську, і Коновал досить скоро заслужив в ній чин
                єфрейтора. У 77-му Оттавському батальйоні значився 31 українець, що досить немало. Командир підрозділу
                полковник Д. Р. Черч користувався повагою солдатів і зумів за десять навчальних місяців непогано підготувати
                їх до ведення військових дій.</p>
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
              <p className="card-text">19 червня 1916 року сформований підрозділ нарешті прибув до Англії, звідки мав
                бути відправлений прямо на фронт – до Франції. Перед виходом на передову, як це часто буває, в підрозділах
                стали проходити численні пертурбації, в результаті яких Пилип Коновал потрапив до 47-го батальйону з Британської
                Колумбії, який входив до складу 10-ї бригади недавно сформованої 4-ї Канадської дивізії.
              </p>
              <p>
                У серпні 1917 року дивізія прибула до Франції, а вже у вересні її солдати зайняли окопи безпосередньо на
                передовій. Напевно Пилип Коновал вже в ті дні зумів зарекомендувати себе з найкращого боку, оскільки був
                підвищений у званні з єфрейтора до капрала. Сталося це буквально за кілька днів до масштабного наступу військ
                Антанти, який увійшов в історію як битва при Вімі Рідж.
              </p>
              <p>
                4-а Канадська дивізія повинна була наступати на північній ділянці фронту, проте просування батальйону,
                в якому служив капрал Коновал, було зупинено щільним кулеметним вогнем німців, недалеко від французького
                містечка Ланс, де противник добре укріпився. Згодом (типова ситуація для окопного етапу Першої світової)
                вже самі канадці виявилися спочатку в вогняному мішку, а потім і в справжнісінькому оточенні. Експедиційному
                корпусу протистояли солдати цілих п’яти дивізій 6-ї армії німців, які обрушили на супротивника потужний
                артилерійський вогонь. Канадців бомбила авіація, труїли газами.</p>
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
              <p className="card-text">Виснажливі бої тривали десять днів – з 15 по 25 серпня. І, нарешті, усвідомивши
                всю безвихідь становища, капрал-українець несподівано для всіх і самого себе зробив відчайдушно сміливу
                спробу прориву. Він розповідав згодом канадським журналістам:
              </p>
              <p>
                «Я по горло був ситий стоянням у траншеях по пояс у воді, і одного разу сказав собі: до біса це все! І
                почав свою війну з німецькою армією. Мій капітан намагався мене застрелити, бо він вирішив, що я хочу
                дезертирувати…».
              </p>
              <p>
                The London Gazette так описала ті пам’ятні події:
              </p>
              <p>
                «Перед відділенням Коновала стояло важке завдання зачистки бліндажів і кулеметних гнізд. Під його вмілим
                командуванням відділення успішно придушило ворожий опір, завдавши ворогові значних втрат. В одному бліндажі
                він особисто заколов в рукопашному бою трьох ворогів і потім один атакував сім інших у воронці, убивши всіх сімох.
              </p>
              <p>
                Під час наступу кулемет на правому фланзі стримував просування, завдаючи відділенню значних втрат.
                Капрал Коновал кинувся вперед, увірвався в дот, знищив групу кулеметників і забрав кулемет з собою.
              </p>
              <p>
                Цей унтер-офіцер сам знищив щонайменше шістнадцять ворогів і відважно боровся протягом двох днів наступу
                аж до свого важкого поранення».
              </p>
              <p>
                Як бачимо, капрал Коновал дійсно в ці дні вів свою власну війну з німцями і навіть переміг у ній. Однак
                все ж уникнути поранення канадсько-українському герою не вдалося. За однією з версій, йому в голову
                влучила випадкова куля в той момент, коли він доповідав своєму командиру про успіх наступу. За іншою,
                він був просто сильно контужений і до того ж отруєний газами.</p>
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
              <p className="card-text">
                26 серпня пораненого Пилипа Коновала переправили до Англії, де йому зробив операцію відомий нейрохірург
                С. К. Уоллес. А 15 жовтня 1917 року король Великої Британії Георг V урочисто нагородив українця Хрестом Вікторії.
              </p>
              <p>
                «Ваш подвиг є одним з найсміливіших і найгероїчніших в нашій армії. На честь цього прийміть мою подяку!»,
                – сказав монарх своєму солдату.
              </p>
              <p>
                Після одужання в діючу армію Пилип Коновал вже не повернувся. Він продовжував служити, виконуючи різні
                обов’язки.
              </p>
              <p>
                Під час революції в Росії Пилип Коновал встиг навіть взяти участь у збройній інтервенції армії Великої
                Британії. У складі Канадського експедиційного корпусу він висадився недалеко від Архангельська. Українцю
                довелося проїхати залізницею через всю колишню Російську імперію і вже з Владивостока переправитися до
                Канади, яка стала для нього рідною. Там він після 3 років і 357 днів служби в армії нарешті демобілізувався.
              </p>
              <p>
                Звільнившись почесно з армії, П. Коновал зазнав певних труднощів, зокрема проблем із здоров’ям, які переважно були наслідком воєнних поранень. Але до 1928 року він почав налагоджувати своє життя: записався до Генерал-губернаторської гвардійської піхоти в Оттаві та одружився у 1934 році з удовою Жюлєт Ледюк-Оже. Завдяки старанням майора Мілтона Фавлера Ґреґґа, який теж здобув Хрест Вікторії і служив у Генерал-губернаторській гвардійській піхоті й приставом у Парламенті (1934-1944), П. Коновал одержав роботу молодшого доглядача в Палаті громад. Хоча ця робота була доволі скромною, але він був вдячний за неї в роки депресії. Згодом його призначили особливим сторожем Кімнати № 16, в якій прем’єр-міністр мав свій офіс. Інші могли б впасти духом через таку не надто престижну роботу, але сам П. Коновал мав оптимістичніше ставлення до життя.
              </p>
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
              <p className="card-text">У 1953 році 360-й відділ Королівського канадського легіону в м. Торонто
                голосуванням обрав П. Коновала своїм патроном.
              </p>
              <p>
                25 червня 1956 року Коновала та 300 інших солдатів з усього світу, які одержали Хрест Вікторії,
                запросили на чай, що його влаштував британський прем’єр-міністр сер Ентоні Іден у Вестмінстері.
                26 червня Пилип Коновал узяв участь у параді в Гайд-парку, який прийняла Її Величність королева Єлизавета
                і принц Філіп, після чого відбувся прийом. На фотографії того часу Коновал сидить посередині переднього ряду
                канадців, які одержали Хрест Вікторії.
              </p>
              <p>
                Пилип Коновал помер на 72-му році життя. Його Хрест Вікторії та інші медалі були довірені Богданові
                Панчукові, канадсько-українському ветеранові, який служив у канадських військово-повітряних силах під час
                війни і який став керівником товариства канадських українських ветеранів. Ці медалі згодом придбав Канадський
                військовий музей, де вони досі зберігаються. Коновала поховав його полк з усіма військовими почестями на цвинтарі
                Нотр-Дам в Оттаві. Його дружину, яка померла на 87-му році життя, поховано поруч нього 3 березня 1987 року.</p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
          </div>
          <div className="card mb-3">
            <img
                src={image13}
                className="card-img-top"
                alt="..."
                weight={150}
                height={550}
            />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">Героя Першої світової війни Пилипа Коновала в Канаді визнали національним героєм
                та покровителем елітного підрозділу війська – Легіону Онтаріо.

                Історики запевняють: якби вороги знали справжню історію українського народу, то не знайшлося б жодного
                божевільного, який би ризикнув воювати з Україною.</p>
              <p className="card-text"><small className="text-muted"></small></p>
            </div>
          </div>

        </Container>
      </div>
    );
  }
}

export default News;