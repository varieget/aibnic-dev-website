import './styles.scss';
import AIB_LOGO from './assets/aib&wlzx.png';

import {
  HomeOutlined,
  InfoCircleOutlined,
  SafetyOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useMatch } from 'react-router-dom';

function Header() {
  const match = useMatch('/:id');

  return (
    <header className="head">
      <div className="head_box">
        <div className="logo">
          <img src={AIB_LOGO} />
        </div>
        <div className="head_full">
          <Menu
            selectedKeys={[match?.params.id || '0']}
            mode="horizontal"
            items={[
              {
                label: <Link to="/">首页</Link>,
                key: '0',
                icon: <HomeOutlined />,
              },
              {
                label: <Link to="/1-1">中心概况</Link>,
                key: '1',
                icon: <InfoCircleOutlined />,
                children: [
                  { label: <Link to="/1-1">中心简介</Link>, key: '1-1' },
                  { label: <Link to="/1-2">工作职责</Link>, key: '1-2' },
                  { label: <Link to="/1-3">中心负责人</Link>, key: '1-3' },
                  { label: <Link to="/1-4">联系我们</Link>, key: '1-4' },
                ],
              },
              {
                label: <Link to="/2">网络安全</Link>,
                key: '2',
                icon: <SafetyOutlined />,
                children: [
                  {
                    label: <Link to="/2-1">2022网络安全宣传周</Link>,
                    key: '2-1',
                  },
                  { label: <Link to="/2-2">病毒防护</Link>, key: '2-2' },
                  { label: <Link to="/2-3">日常安全知识</Link>, key: '2-3' },
                  { label: <Link to="/2-4">相关链接</Link>, key: '2-4' },
                  { label: <Link to="/2-5">安全公告</Link>, key: '2-5' },
                ],
              },
              {
                label: <Link to="/3">服务指南</Link>,
                key: '3',
                icon: <UserOutlined />,
                children: [
                  { label: <Link to="/3-1">自助开网</Link>, key: '3-1' },
                  { label: <Link to="/3-2">相关教程</Link>, key: '3-2' },
                ],
              },
              { label: <Link to="/4">相关规定</Link>, key: '4' },
              { label: <Link to="/5">党建工作</Link>, key: '5' },
              { label: <Link to="/6">信息公告</Link>, key: '6' },
            ]}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
