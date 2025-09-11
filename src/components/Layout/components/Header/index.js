import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* LOGO HEADER============================= */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok logo" />
        </div>
        {/* SEARCH HEADER============================= */}
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck="false" />
          <button className={cx('clear')}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </button>
          {/* <FontAwesomeIcon className={cx('loading')} icon="fa-solid fa-spinner" /> */}
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
        {/* ACTIONS HEADER============================= */}
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
}

export default Header;
