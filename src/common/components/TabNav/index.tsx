import styles from './tab-nav.module.scss';

import React from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  items: Array<{ label: string; isActive?: boolean } & NavLinkProps>;
}

function TabNav({ items }: Props) {
  return (
    <ul className={cx('tab_nav')}>
      {items.map(({ label, isActive: selected, ...props }, i) => (
        <li className={cx('tab_nav_link')} key={i}>
          <NavLink
            {...props}
            className={({ isActive }) =>
              cx('link_item', { selected: selected ?? isActive })
            }>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default TabNav;
