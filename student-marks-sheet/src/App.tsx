import React from 'react';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import { Link } from 'react-router-dom'
import View from './View'
import ViewItem from './ViewItem';
import Form from './Form'


function App() {
  return (
    <>
    <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<View />} />
          <Route path="/View" element={<View />} />
          <Route path="/View/:id" element={<ViewItem />} />
          <Route path="/create" element={<Form />} />
          <Route path="/update/:id" element={<Form />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
