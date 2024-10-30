import styles from './Content.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState, useRef, useEffect } from 'react';

import SearchUser from './searchUser';
const cx = classNames.bind(styles);

function Content() {
  const [text, setText] = useState('');
  const [checkTrue, setChecktrue] = useState(false);
  const [textDoremont, setTextDoremont] = useState(() => {
    const storedText = JSON.parse(localStorage.getItem('key'));
    return storedText ? storedText : '';
  });

  const refInput = useRef();

  useEffect(() => {
    if (text.trim().length > 0) {
      setChecktrue(true);
    } else {
      setChecktrue(false);
    }
  }, [text]);

  return (
    <div className={cx('content')}>
      <div className={cx('background__content-left')}>
        <input
          ref={refInput}
          className={cx('input_text')}
          type="text"
          placeholder="Nhập văn bản cho doraemon..."
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <button
          onClick={() => {
            if (text.trim().length > 0) {
              setText('');
              setTextDoremont(text);
              localStorage.setItem('key', JSON.stringify(text));
              refInput.current.focus();
            } else {
              alert('Vui lòng nhập văn bản cho doraemon!');
              refInput.current.focus();
            }
          }}
        >
          Upload
        </button>

        {/* tìm kiếm người dùng */}
        <SearchUser />
      </div>

      {/* right */}

      <div className={cx('background__content-right')}>
        <Tippy
          title="Doraemon"
          placement="bottom-end" // vị trí hiện
          interactive // cho phép select vào phần tử
          // visible // điều kiện để hiển thị
          visible={textDoremont.length > 0}
          offset={[230, -90]}
          render={(attrs) => (
            <>
              {textDoremont && (
                <>
                  <div tabIndex={-1} {...attrs} className={cx('tippy-box')}>
                    <p>{textDoremont}</p>
                  </div>

                  <button
                    onClick={() => {
                      localStorage.removeItem('key');
                      setTextDoremont('');
                      alert('bạn có chắc chắn muốn xoá!');
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </>
          )}
        >
          <div className={cx('doraemon')}>
            <div className={cx('head')}>
              <div className={cx('eyes')}>
                <div
                  className={cx('eye', 'left', {
                    blink: checkTrue,
                  })}
                ></div>
                <div
                  className={cx('eye', 'right', {
                    blink: checkTrue,
                  })}
                ></div>
              </div>
              <div
                className={cx('mouth', {
                  mouthAnimation: checkTrue,
                })}
              ></div>
              <div
                className={cx('nose', {
                  blink: checkTrue,
                })}
              ></div>
            </div>
          </div>
        </Tippy>
      </div>
    </div>
  );
}

export default Content;
