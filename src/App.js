import React from 'react';
import Header from './components/Header';
import Content from './components/Content';


function App({ store}) {
  return (
    <>

    <section className='container'>
      <Header />
      <Content store={store} />

    </section>

  </>
  );
}

export default App;
