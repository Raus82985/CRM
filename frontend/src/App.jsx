import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
     <GoogleOAuthProvider clientId="836689388628-rm16j2qvntscd3shthdv67k05hvn9tkg.apps.googleusercontent.com">
      <div className="flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
     </GoogleOAuthProvider>
  );
};

export default App;
