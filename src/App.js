import QrCode from './components/QrCode';
import { Routes, Route } from 'react-router-dom';
import NotFound from './layouts/NotFound';
import Layout from './layouts/Layout';
import LayoutNewbies from './layouts/LayoutNewbies';
import IndexNewbies from './components/IndexNewbies';
import Home from './components/Home';

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="newbies" element={<LayoutNewbies />}>
            <Route index element={<IndexNewbies />} />
            <Route path="qr-code">
              <Route index element={<QrCode />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
