import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const errorCount = 1377;

it(`<WelcomeScreen /> should render error count = 1337`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorCount = {errorCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
