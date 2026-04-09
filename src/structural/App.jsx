import { useState } from 'react'
import { Route, Routes, HashRouter} from 'react-router';



import WhackAMole from '../pages/WhackAMole'
import Layout from './Layout';
import HomePage from '../pages/HomePage';

function App() {

  return <div>

    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="WhackAMole" element={<WhackAMole />}></Route>
        
        </Route>
      </Routes>
    </HashRouter>
  </div>

} export default App;


