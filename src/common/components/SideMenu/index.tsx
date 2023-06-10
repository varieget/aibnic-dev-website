import styles from './side-menu.module.scss';

import React from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideMenu({ children }: JSX.IntrinsicElements['div']) {
  return (
    <div className="com-section" id={cx('sidemenu')}>
      {children}
    </div>
  );
}

function MenuItem(props: {
  title?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  scrollabled?: boolean;
  onScrollableEnd?(event: React.UIEvent<HTMLUListElement>): void;
}) {
  const handleScroll = (event: React.UIEvent<HTMLUListElement>): void => {
    const { clientHeight, scrollTop, scrollHeight } = event.currentTarget;

    if (
      props.onScrollableEnd &&
      clientHeight + Math.ceil(scrollTop) >= scrollHeight
    ) {
      props.onScrollableEnd(event);
    }
  };

  return (
    <div className={cx('menu-item')}>
      {props.title && <div className={cx('menu-name')}>{props.title}</div>}
      {props.children && (
        <ul
          className={cx('submenu', { scrollabled: props.scrollabled })}
          onScroll={props.scrollabled ? handleScroll : undefined}>
          {React.Children.map(props.children, (child) => (
            <li className={cx('submenu-item', child.props.className)}>
              {React.createElement(child.type, {
                ...child.props,
                ...{
                  className: cx('item-link', child.props.className),
                },
              })}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

MenuItem.defaultProps = {
  scrollabled: false,
};

export { SideMenu, MenuItem };
