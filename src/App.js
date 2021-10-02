
import { Provider } from 'react-redux';
import './App.css';
import store from './bll/redux';
import Content from './components/Content';
  
function App() {


  return (
    <div >
     <Provider store={store}>
        <Content/>
     </Provider>
    </div>
  );
}

export default App;
