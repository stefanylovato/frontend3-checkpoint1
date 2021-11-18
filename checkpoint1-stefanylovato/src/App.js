import Header from './components/Header';
import Banner from './components/Banner';
import Projects from './components/Projects';
import './App.scss';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
      <Banner />
      <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
