import avatar from 'assets/images/avatar.jpg';
import classes from 'classnames';
import { ChangeEvent, useEffect, useState } from 'react';
import s from './footer.module.css'; // Путь к вашему файлу стилей
import { FaBars, FaCanadianMapleLeaf, FaMountain, FaQuestion, FaRegSnowflake } from 'react-icons/fa';
// import { DropdownItem } from 'shared/components/DropdownItem';
import { RiAccountCircleLine, RiAccountCircleFill } from 'react-icons/ri';
import { IoHome, IoMoonOutline, IoMoonSharp } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';
import { ROUTES } from 'router/routes';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { GrGallery } from 'react-icons/gr';
import { MdForest } from 'react-icons/md';
import { TbBuildingPavilion, TbRouteSquare } from 'react-icons/tb';

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handler = () => {
      setIsOpen(false);
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const menuItem: any[] = [
    {
      path: ROUTES.ROOT,
      name: 'Главная',
      icon: <IoHome />,
    },
    {
      path: ROUTES.NATURE,
      name: 'Природа',
      icon: <TbBuildingPavilion />,
    },
    {
      path: ROUTES.CLIMATE,
      name: 'Климат',
      icon: <FaRegSnowflake />,
    },
    {
      path: ROUTES.SEASONS,
      name: 'Сезоны',
      icon: <FaCanadianMapleLeaf />,
    },
    {
      path: ROUTES.ROUTES,
      name: 'Маршруты',
      icon: <TbRouteSquare />,
    },
    {
      path: ROUTES.MAP,
      name: 'Карта',
      icon: <TbRouteSquare />,
    },
    {
      path: ROUTES.SIGHTS,
      name: 'Места',
      icon: <TbBuildingPavilion />,
    },
    {
      path: ROUTES.GALLERY,
      name: 'Галерея',
      icon: <GrGallery />,
    },
    {
      path: ROUTES.FAQ,
      name: 'Вопросы',
      icon: <FaQuestion />,
    },
    {
      path: ROUTES.DONATE,
      name: 'Поддержать',
      icon: <BiSolidDonateHeart />,
    },
    {
      path: ROUTES.FRESH,
      name: 'Свежее',
      icon: <MdForest />,
    },
    {
      path: `${ROUTES.ARTICLE}/:id`,
      name: 'Статьи',
      icon: <FaMountain />,
    },
    {
      path: ROUTES.AUTH,
      name: 'Аутентификация',
      icon: <FaMountain />,
    },
    {
      path: ROUTES.TIMER,
      name: 'Таймер',
      icon: <FaMountain />,
    },
    {
      path: ROUTES.RESIZE,
      name: 'Изменение размера',
      icon: <FaMountain />,
    },
    {
      path: ROUTES.CREATE_ARTICLE,
      name: 'Создать статью',
      icon: <FaMountain />,
    },
    {
      path: ROUTES.MEMO_EXAMPLE,
      name: 'Пример мемо',
      icon: <FaMountain />,
    },
    {
      path: ROUTES.KEY_PROP,
      name: 'Кей проп',
      icon: <FaMountain />,
    },
    {
      path: ROUTES.REF_EXAMPLE,
      name: 'Пример Реф',
      icon: <FaMountain />,
    },
  ];

  return (
    <div className={s.footer}>
      <div className={s.footer_top}>
        <div className={s.footer_container}>
          <h1>Остались вопросы?</h1>
        </div>
      </div>
      <div className={s.footer_bottom}>
        <div className={s.footer_container}>
          <div className={s.footer_top_row}>
          {menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className={s.footer_top_link}>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

//       <div className={s.footer_bottom}>
//         <div className={s.footer_container}>
//           <div className={s.leftSection}>
//             <Link to={ROUTES.ROOT} className={s.logo}>
//               Baikal Travel
//             </Link>
//           </div>

//           <div className={s.rightSection}>
//             <ul className={s.header_nav_list}>
//               <Link to={ROUTES.MAP} className={s.header_nav_item}>
//                 Карта
//               </Link>
//               <Link to={ROUTES.SIGHTS} className={s.header_nav_item}>
//                 Места
//               </Link>
//               <Link to={ROUTES.GALLERY} className={s.header_nav_item}>
//                 Галерея
//               </Link>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

//   return (
//     // <!-- footer -->
//     // <footer class="page-footer">
//     //   <div class="page-footer__top">
//     //     <div class="container">
//     //       <div class="page-footer__row">

//     //         <!-- footer top -->
//     //         <div class="page-footer__contact">
//     //           <div class="page-footer__contact-column">
//     //             <ul class="page-footer__contact-column-title">
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">О студии</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Направления</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Преподаватели</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Расписание</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Контакты</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Личный кабинет</a></li>
//     //             </ul>
//     //           </div>
//     //           <div class="page-footer__contact-column">
//     //             <ul class="page-footer__contact-column-title">
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Подарочные сертификаты</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Пробное занятие</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Стоимость занятий</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Группы и расписание</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Индивидуальные занятия</a></li>
//     //             </ul>
//     //           </div>
//     //           <div class="page-footer__contact-column">
//     //             <ul class="page-footer__contact-column-title">
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Аренда</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Оферта</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Политика конфиденциальности</a></li>
//     //               <li class="page-footer__contact-column-title-item"><a href="#!">Заказать звонок</a></li>
//     //             </ul>
//     //           </div>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   <!-- footer-bottom -->
//     //   <div class="page-footer__bottom">
//     //     <div class="container">
//     //       <div class="page-footer__bottom-row">
//     //         <div class="page-footer__bottom-contact-column">
//     //           <a href="index.html"><img src="images/logo-footer.svg" alt="logo"></a>
//     //           <div class="page-footer__bottom-contact-column-title">
//     //             <p>
//     //               СТУДИЯ ДЖАЗОВОГО ТАНЦА
//     //             </p>
//     //             <p>
//     //               <a href="#!">© Dance Space 1999-2023 гг.</a>
//     //             </p>
//     //           </div>
//     //         </div>

//     //         <!-- contacts -->
//     //         <address class="page-footer__bottom-contact">
//     //           <div class="page-footer__bottom-contact-column-phone">
//     //             <p>
//     //               <a href="tel:+78009999999">8 800 999 99 99</a><br>
//     //               <p>Нижний Новгород, ул. Ульянова д. 1</p>
//     //             </p>
//     //           </div>
//     //         </address>

//     //         <!-- social -->
//     //         <div class="page-footer__social">
//     //           <a href="mailto:DanceSpace@gmail.com">DanceSpace@gmail.com</a>
//     //           <ul class="social-list">
//     //             <li class="social-list__item"><a href="#!">
//     //               <img src="images/insragram.svg" alt="instagram">
//     //             </a></li>
//     //             <li class="social-list__item"><a href="#!">
//     //               <img src="images/vkontakte.svg" alt="vkontakte">
//     //             </a></li>
//     //             <li class="social-list__item"><a href="#!">
//     //               <img src="images/youtube.svg" alt="youtube">
//     //             </a></li>
//     //           </ul>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </footer>

//     <footer className={s.footer}>
//       <div className={s.footer_top}>
//         <div className={s.footer_container}>
//           <h1 className={s.footer_top_text}>Остались вопросы?</h1>
//           <p className={s.footer_top_description}>Мы поможем вам найти на них ответы</p>
//         </div>
//       </div>
