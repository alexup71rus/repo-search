import { Navigate, Route, Routes } from 'react-router-dom';
import './styles/App.css';

import Layout from './layouts/LayoutMain';
import Homepage from './pages/Homepage';

export default function App() {
    return (
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Homepage/>}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    );
};
