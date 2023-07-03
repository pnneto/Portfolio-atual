import { Layout } from './components/Layout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Index from 'pags/Index';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1700 });
  }, []);

  return (
    
    <BrowserRouter>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Footer />
        </Layout>
    </BrowserRouter>
    
  );
}

export default App;




