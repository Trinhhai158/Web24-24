import styles from './Content.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx('content')}>
      <div className={cx('background__content-left')}>left content</div>
      <div className={cx('background__content-right')}>
        <div className={cx('doraemon')}>
          <div className={cx('head')}>
            <div className={cx('eyes')}>
              <div className={cx('eye', 'left')}></div>
              <div className={cx('eye', 'right')}></div>
            </div>
            <div className={cx('mouth')}></div>
            <div className={cx('nose')}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
