import './styles.scss';

import GoTop from './GoTop';

function Footer() {
  return (
    <footer className="foot">
      <ul className="links">
        <li className="links_item">
          <span>广东农工商职业技术学院</span>
        </li>
        <li className="links_item">
          <span>备案号：粤ICP备19057560号</span>
        </li>
      </ul>
      <GoTop />
    </footer>
  );
}

export default Footer;
