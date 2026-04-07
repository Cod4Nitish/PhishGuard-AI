import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LiveGuard from './pages/LiveGuard';
import History from './pages/History';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="monitoring" element={<LiveGuard />} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
