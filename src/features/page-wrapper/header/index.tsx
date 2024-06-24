import avatar from 'assets/images/avatar.jpg';
import styles from './header.module.css';
import { useState } from 'react';

export const Header = () => {
  const [iaOpen, setOpen] = useState();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftSection}>
      <button className={styles.burgerButton}>{/* Иконка бургер-меню */}☰</button>
        <div className={styles.logo}>БАЙКАЛ</div>
      </div>
      <div className={styles.centerSection}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <button className={styles.newPostButton}>Найти</button>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.iconNotification}>🔔</div>
        <ul className={styles.rightSectionList}>
          <li className={styles.rightSectionListItem}>КАРТА</li>
          <li className={styles.rightSectionListItem}>МЕСТА</li>
          <li className={styles.rightSectionListItem}>ГАЛЕРЕЯ</li>
          {/* <li className={styles.rightSectionListItem}>ВОПРОСЫ</li> */}
        </ul>
        {/* <div className={styles.iconMessage}>📧</div> */}
        {/* <div className={styles.iconNotification}>🔔</div> */}
        <div className={styles.avatar}>User Avatar</div>
        {/* <button className={styles.headerMenuButton}>Выйти</button> */}
      </div>
      
    </header>

    //     <header className={styles.headerContainer}>
    //   <div className={styles.leftSection}>

    //     <div className={styles.logo}>LOGOIPSUM</div>
    //   </div>
    //   <div className={styles.centerSection}>
    //     <input type="text" placeholder="Search" className={styles.searchInput} />

    //   </div>
    //   <div className={styles.rightSection}>
    //     <ul>
    //       <li>
    //         locations
    //       </li>
    //       <li>
    //         climate
    //       </li>
    //       <li>
    //         nature
    //       </li>
    //     </ul>

    //   </div>
    // </header>

    // <header className={styles.headerContainer}>
    //   <div className={styles.leftSection}>
    //     <button className={styles.burgerButton}>{/* Иконка бургер-меню */}☰</button>
    //     <div className={styles.logo}>Your Logo</div>
    //   </div>
    //   <div className={styles.centerSection}>
    //     <input type="text" placeholder="Search" className={styles.searchInput} />
    //     <button className={styles.newPostButton}>Новый пост</button>
    //   </div>
    //   <div className={styles.rightSection}>
    //     <div className={styles.iconMessage}>📧</div>
    //     <div className={styles.iconNotification}>🔔</div>
    //     {/* <div className={styles.avatar}>User Avatar</div> */}

    //     <img className={styles.avatar} src={avatar} alt="avatar" />

    //     <button className={styles.newPostButton}>Выйти</button>
    //   </div>
    // </header>
  );
};
