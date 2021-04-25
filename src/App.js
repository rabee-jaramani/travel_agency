import Form from './Form/Form.js';
import './Form_v1/Form_v1_style.css'
import './Form_v1_1/Form_v1_1_style.css'
import './main_style.css'
import './Form_v1_8/form_v1_8_style.css'
import './Form_v1_4/form_v1_4_style.css'
import meta_img from './images/meta_image.png'
function App() {
  return (
    <div className="App">
      <Form/>
      <img className='meta-img hide' src={meta_img} alt='meta_image'></img>
    </div>
  );
}

export default App;
