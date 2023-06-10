import { Empty } from 'antd';

import classNames from 'classnames';

function NoData() {
  return (
    <div className="container_box">
      <div className="container_bd">
        <div id="main">
          <div className={classNames('main_bd', { 'com-section': true })}>
            <Empty description="仅提供首页、内容页（中心概况）、内容索引页（党建工作）样式参考。" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoData;
