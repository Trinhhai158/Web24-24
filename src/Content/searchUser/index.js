import { useState, useEffect } from 'react';
import { useDebounce } from '~/Hook';
import classNames from 'classnames/bind';
import styles from './searchUser.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchUser() {
  const [searchInput, setSearchInput] = useState('');
  const [check, setCheck] = useState(false);
  const [result, setResult] = useState([]);
  const handleClickSearch = () => {};

  const debounce = useDebounce(searchInput, 700);
  useEffect(() => {
    if (debounce.trim().length > 0) {
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${debounce}&type=less`)
        .then((res) => res.json())
        .then((res) => {
          setResult(res.data);
        });
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [debounce]);

  return (
    <div className={cx('container_search')}>
      <div className={cx('flex_search')}>
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          type="text"
          placeholder="tìm kiếm người dùng..."
          className={cx('input_text-search')}
        />
        {searchInput && <FontAwesomeIcon icon={faSpinner} className={cx('icon_spiner')}></FontAwesomeIcon>}

        <FontAwesomeIcon
          icon={faSearch}
          className={cx('icon_search', {
            'icon_search-black': check,
          })}
          onClick={handleClickSearch}
        ></FontAwesomeIcon>
      </div>

      {/* content search */}
      {debounce.trim().length > 0 && (
        <div className={cx('content_search')}>
          <ul className={cx('list_content')}>
            {result.map((user) => (
              <li key={user.id} className={cx('list_item')}>
                <a href="#">
                  <span className={cx('user')}>
                    <img className={cx('img')} src={user.avatar} />
                    <h4 className={cx('name')}>{user.full_name}</h4>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchUser;
