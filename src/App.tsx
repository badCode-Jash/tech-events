import React from 'react';
import './styles/main.scss'
import Routing from './router';
import { Provider } from 'react-redux';
import useStartup from './hooks/useStartupHook';
import Modal from './components/ui/modal';

function App() {

  const [store] = useStartup();

  return (
    <Provider store={store}>
      <Routing />
      <Modal />
    </Provider>
  );
}

export default App;
