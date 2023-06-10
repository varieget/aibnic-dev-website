import React from 'react';

import { Button, Pagination } from 'antd';
import { List, Space } from 'antd';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';

import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { smoothScroll } from 'common/utils/dom-util';

import HighlightBox from 'common/components/HighlightBox';
import { SideMenu, MenuItem } from 'common/components/SideMenu';

function IndexList() {
  const data = [
    {
      href: '',
      title: '深入调研高新技术企业及高校，探讨数据赋能学校高质量发展',
      content:
        '为持续深化校企合作，产教融合，完善数字媒体技术专业群产教融合机制，校企共建高质量智慧课室、虚拟仿真实训中心和实训实践教学基地',
    },
    {
      href: '',
      title: '网络中心党支部开展学习二十大精神系列活动',
      content:
        '2022年，网络中心党支部将深入学习贯彻党的二十大精神作为支部工作的重中之重。根据粤农工商职院党〔2022〕38号《广东农工商职业技术学院深入学习宣传贯彻党的二十大精神工作方案》',
    },
    {
      href: '',
      title: '学校网络中心从实从细做好疫情防控工作',
      content:
        '近期，国内疫情呈多点散发趋势，为切实保障学校工作的正常进行，学校网络中心全体同志在疫情防控的紧要关头，想群众之所想，急群众之所急，办群众之所需，全力奋战在投疫一线',
    },
  ];

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div className="container_box">
      <div className="container_bd">
        <div id="main" className="split">
          <div className={classNames('main_hd', { 'com-section': true })}>
            <h2>党建工作</h2>
            <HighlightBox title={'作者 某某某'} desc={`发表于 1970-01-01`}>
              <Button type="primary">分享</Button>
            </HighlightBox>
          </div>
          <div className={classNames('main_bd', { 'com-section': true })}>
            <List
              itemLayout="vertical"
              size="large"
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText
                      icon={StarOutlined}
                      text="156"
                      key="list-vertical-star-o"
                    />,
                    <IconText
                      icon={LikeOutlined}
                      text="156"
                      key="list-vertical-like-o"
                    />,
                    <IconText
                      icon={MessageOutlined}
                      text="2"
                      key="list-vertical-message"
                    />,
                  ]}>
                  <List.Item.Meta
                    title={<Link to={item.href}>{item.title}</Link>}
                  />
                  {item.content}
                </List.Item>
              )}
            />
          </div>
          <div className={classNames('main_ft', { 'com-section': true })}>
            <Pagination defaultCurrent={6} total={500} />
          </div>
        </div>
        <div id="sidebar">
          <SideMenu>
            <MenuItem title={<p>推荐阅读</p>} scrollabled>
              {[...new Array(10)].map((item, i) => (
                <Link
                  to=""
                  className={classNames({ current: i === 1 })}
                  onClick={({ currentTarget }) =>
                    smoothScroll(
                      currentTarget.offsetParent!,
                      currentTarget.offsetTop
                    )
                  }
                  key={i}>
                  文章{i}
                </Link>
              ))}
            </MenuItem>
            <MenuItem title={<Link to="/">返回首页</Link>} />
          </SideMenu>
        </div>
      </div>
    </div>
  );
}

export default IndexList;
