import './index.css';
import NavbarWithCTAButton from './components/Nav';
import DefaultCarousel from './components/HeaderCarousel';
import CardWithDecorativeImage from './components/Card';
function App() {
  return (
    <div className="App">
      <NavbarWithCTAButton/>
      <div className='flex gap-4 border border-gray-950 w-1/2 h-96 p-2.5'>
        <DefaultCarousel />
        <img src='https://www.credencerewards.com/static/assets/imgs/banners/right-side-banner.jpg' alt='Reward'/>
      </div>
      <CardWithDecorativeImage/>
    </div>
  );
}

export default App;
