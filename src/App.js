import React from 'react';
import Layout from './hoc/Layout/Layout';
import Main from './pages/Main/Main';

const App = (props) => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default App;
