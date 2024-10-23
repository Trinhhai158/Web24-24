import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faBuildingColumns,
  faCircleInfo,
  faAddressCard,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx('HeaderFlex')}>
      <ul className={cx('ListHeader')}>
        <li>
          <a href="#" className={cx('link__item-center')}>
            <FontAwesomeIcon icon={faHouse} className={cx('fontIcon')} />
            <span className={cx('margin__name-icon', 'text__name-icon')}>Home</span>
          </a>
        </li>
        <li>
          <a href="#" className={cx('link__item-center')}>
            <FontAwesomeIcon icon={faBuildingColumns} className={cx('fontIcon')} />
            <span className={cx('margin__name-icon', 'text__name-icon')}>BANKKING</span>
          </a>
        </li>
        <li>
          <a href="#" className={cx('link__item-center')}>
            <FontAwesomeIcon icon={faAddressCard} className={cx('fontIcon')} />
            <span className={cx('margin__name-icon', 'text__name-icon')}>Contact</span>
          </a>
        </li>
        <li>
          <a href="#" className={cx('link__item-center')}>
            <FontAwesomeIcon icon={faCircleInfo} className={cx('fontIcon')} />
            <span className={cx('margin__name-icon', 'text__name-icon')}>Help</span>
          </a>
        </li>
        <li>
          <a href="#" className={cx('link__item-center')}>
            <FontAwesomeIcon icon={faRightToBracket} className={cx('fontIcon')} />
            <span className={cx('margin__name-icon', 'text__name-icon')}>Login</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
