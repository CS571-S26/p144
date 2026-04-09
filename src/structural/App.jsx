import { useState } from 'react'
import { Route, Routes, HashRouter} from 'react-router';



import WhackAMole from '../pages/WhackAMole'
import Layout from './Layout';
import HomePage from '../pages/HomePage';
import Memorization from '../pages/Memorization';
import PageNotFound from '../pages/PageNotFound';
import HighScores from '../pages/HighScores';

function App() {

  return <div>

    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage />} />
          <Route path="WhackAMole" element={<WhackAMole />}></Route>
          <Route path="Memorization" element={<Memorization />}></Route>
          <Route path="HighScores" element={<HighScores />}></Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  </div>

} export default App;


