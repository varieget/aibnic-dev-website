import styles from './highlight-box.module.scss';

import React from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  desc?: React.ReactNode;
  children?: React.ReactNode;
}

function HighlightBox(props: Props) {
  return (
    <div className={cx('highlight_box')}>
      {props.children && <div className={cx('box_btn')}>{props.children}</div>}
      <h4 className={cx('box_title')}>{props.title}</h4>
      {props.desc && <div className={cx('box_main')}>{props.desc}</div>}
    </div>
  );
}

export default HighlightBox;
