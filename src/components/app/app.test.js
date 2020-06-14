import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const errorCount = Number(1488);
it(`<App /> should render <WelcomeScreen /> with error count = 1488`, () => {
  const tree = renderer
    .create(<App
      errorCount = {errorCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
