import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from 'common/layout/app/App';

import Root from 'routes/Root';
import News from 'routes/Content/New';
import List from 'routes/Content/List';
import NoData from 'routes/Content/NoData';

function Router() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/1-1" element={<News />} />
          <Route path="/1-2" element={<News />} />
          <Route path="/1-3" element={<News />} />
          <Route path="/1-4" element={<News />} />
          <Route path="/5" element={<List />} />
          <Route path="*" element={<NoData />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Router;
