import './styles.scss';

import { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';

function GoTop() {
  const [showGoTopTips, setShowGoTopTips] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    function getScrollTop() {
      let scrollPos: number;
      if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
        return scrollPos;
      } else if (document.compatMode && document.compatMode !== 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
        return scrollPos;
      } else if (document.body) {
        scrollPos = document.body.scrollTop;
        return scrollPos;
      }

      return 0;
    }

    if (getScrollTop() > 300) {
      if (!showGoTopTips) {
        setShowGoTopTips(true);
      }
    } else {
      if (showGoTopTips) {
        setShowGoTopTips(false);
      }
    }
  }, [showGoTopTips]);

  const handleGoTopClick = () => {
    try {
      window.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    } catch (e) {
      window.scrollTo(0, 0);
    }

    setShowGoTopTips(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={classNames('pagetop', {
        'com-hide': !showGoTopTips,
      })}
      onClick={handleGoTopClick}
    />
  );
}

export default GoTop;
