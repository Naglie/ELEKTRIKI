import './App.css';
import Header from './components/Header';
import HeaderAdmin from './components/Header_Admin';
import Content from './components/Content';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   const path = window.location.pathname;
   let navbar = [];

   if (
      path === '/Login' ||
      path === '/applications' ||
      path === '/applications/:id'
   ) {
      navbar = <HeaderAdmin />;
   } else if (path === '/' || path === '') {
      navbar = <Header />;
   }

   console.log(navbar);
   console.log(path);

   return (
      <div className="App">
         {navbar}
         <Content />
         <Footer />
      </div>
   );
}

export default App;
