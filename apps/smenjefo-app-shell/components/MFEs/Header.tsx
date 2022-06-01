import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';

import LocalizationContext from '../Localization/LocalizationContext';
import { selectProfile } from '../../selectors/profileSelectors';

import styles from './styles/Header.module.css';

// TODO: move to mfe later
const HeaderMFE = () => {
  const { t } = useContext(LocalizationContext);

  const profile = useSelector(selectProfile);

  if (profile.status === 'inFight') {
    return null;
  }

  return (
    <div className={styles['header']}>
      <div className={styles['header__item']}>
        <Link
          as='/profile'
          href='/profile'
          replace
        >
          <a className={styles['header__item-link']}>
            {t('header.HEADER_LINK_PROFILE')}
          </a>
        </Link>
      </div>

      <div className={styles['header__item']}>
        <Link
          as='/fight-registration'
          href='/fight-registration'
          replace
        >
          <a className={styles['header__item-link']}>
            {t('header.HEADER_LINK_FIGHT_APPLICATIONS')}
          </a>
        </Link>
      </div>

      <div className={`${styles['header__item']} ${styles['header__item_align_right']}`}>
        <span className={styles['header__item-profile']}>
          {profile.nickname}
        </span>
      </div>
    </div>
  );
};

export default HeaderMFE;