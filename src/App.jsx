import './App.css';
import Head_line from './component/headline.jsx';
import Paragraph from './component/paragraph.jsx';
import BeehiveEmbed from './component/button.jsx';
import MockUp from './assets/phone_mockup.svg';

function App() {

  return (
    <div className='outer_container'>
      <div className='inner_container'>
        <Head_line/>
        <Paragraph/>
        <BeehiveEmbed/>
      </div>
      <img src={MockUp} alt='My Mockup' className='mockup'></img>
    </div>

  )
};

export default App;
