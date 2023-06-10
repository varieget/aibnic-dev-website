import './styles.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
  PushpinTwoTone,
  WarningTwoTone,
  MessageTwoTone,
  NotificationTwoTone,
} from '@ant-design/icons';

import { Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import IMG_NEW1 from './assets/1a8ff5190298dce31d220016823b6f2a.png';
import IMG_NEW2 from './assets/5afadbddb5f125275d8a1b3afcde8afe.jpg';
import IMG_NEW3 from './assets/7db680db8660937e1934c4dade278b28.jpg';
import IMG_NEW4 from './assets/29a298223eda3fb703debd374f909c48.jpg';
import IMG_NEW5 from './assets/065e2c913974b4f4e66f05448c73ff01.jpg';

function Root() {
  return (
    <>
      <Swiper
        className="swiper"
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}>
        <SwiperSlide>
          <img src={IMG_NEW1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG_NEW2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG_NEW3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG_NEW4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={IMG_NEW5} />
        </SwiperSlide>
      </Swiper>
      <div className="body">
        <dl className="notices_box">
          <dt>校园网服务</dt>
          <dd>
            <a href="http://xyw.gdaib.edu.cn/" target="_blank">
              开网教程
            </a>
          </dd>
          <dd>
            <a href="http://xyw.gdaib.edu.cn/" target="_blank">
              自助系统
            </a>
          </dd>
          <dd>
            <a href="http://xyw.gdaib.edu.cn/" target="_blank">
              自助报障
            </a>
          </dd>
        </dl>
        <div className="mp_kind_mod">
          <div className="mp_kind_mod_hd">
            <span className="icon_mp_kind">
              <PushpinTwoTone
                style={{ fontSize: '50px' }}
                twoToneColor="#00B4FF"
              />
              <h3>中心动态</h3>
            </span>
            <ul>
              <li>
                <Link to="">
                  主题教育进行时|网络中心党支部开展主题教育动员，有的放矢精准推进调查研究
                </Link>
              </li>
              <li>
                <Link to="">
                  深入调研高新技术企业及高校，探讨数据赋能学校高质量发展|网络中心、教务处、计算机学院联合团队赴高新技术企业和高校调研交流
                </Link>
              </li>
              <li>
                <Link to="">
                  我为群众办实事——网络中心党支部参加智慧校园建设专题易班下午茶活动
                </Link>
              </li>
              <li>
                <Link to="">
                  党委委员罗南林参加指导网络中心党支部组织生活会
                </Link>
              </li>
              <li>
                <Link to="">网络中心党支部开展学习二十大精神系列活动</Link>
              </li>
            </ul>
          </div>
          <div className="mp_kind_mod_bd">
            <div className="mp_kind_wrp">
              <div className="mp_kind_box">
                <dl className="mp_kind">
                  <dt className="name">
                    <span className="icon_mp_kind">
                      <WarningTwoTone
                        style={{ fontSize: '80px' }}
                        twoToneColor="#00B4FF"
                      />
                    </span>
                    相关规定
                  </dt>
                  <dd>暂无新增信息</dd>
                </dl>
                <div className="mp_option_box">
                  <Button type="primary">查看详情</Button>
                  <div className="mp_option_links">此栏目暂无任何新增信息</div>
                </div>
              </div>
            </div>
            <div className="mp_kind_wrp">
              <div className="mp_kind_box">
                <dl className="mp_kind">
                  <dt className="name">
                    <span className="icon_mp_kind">
                      <MessageTwoTone
                        style={{ fontSize: '80px' }}
                        twoToneColor="#00B4FF"
                      />
                    </span>
                    党建工作
                  </dt>
                  <dd>
                    主题教育进行时|网络中心党支部开展主题教育动员，有的放矢精准推进调查研究
                  </dd>
                </dl>
                <div className="mp_option_box">
                  <Button type="primary">查看详情</Button>
                  <div className="mp_option_links">
                    <a href="" target="_blank">
                      主题教育进行时
                    </a>
                    <span> | </span>
                    <a href="" target="_blank">
                      我为群众办实事
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mp_kind_wrp">
              <div className="mp_kind_box">
                <dl className="mp_kind">
                  <dt className="name">
                    <span className="icon_mp_kind">
                      <NotificationTwoTone
                        style={{ fontSize: '80px' }}
                        twoToneColor="#00B4FF"
                      />
                    </span>
                    信息公告
                  </dt>
                  <dd>关于宿舍区校园网络光纤入户改造的通知</dd>
                </dl>
                <div className="mp_option_box">
                  <Button type="primary">查看详情</Button>
                  <div className="mp_option_links">
                    <a href="" target="_blank">
                      宿舍区校园网络
                    </a>
                    <span> | </span>
                    <a href="" target="_blank">
                      新版虚拟校园卡
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Root;
