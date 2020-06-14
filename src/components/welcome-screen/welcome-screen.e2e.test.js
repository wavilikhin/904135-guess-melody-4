import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should welcome button be pressed`, ()=> {
  const onWelcomeBtnClick = jest.fn();

  const welcomeScreen = shallow(
      <WelcomeScreen
        errorCount={3}
        onWelcomeButtonClick={onWelcomeBtnClick}
      />
  );

  const welcomeButton = welcomeScreen.find(`button.welcome__button`);

  welcomeButton.simulate(`click`);

  expect(onWelcomeBtnClick).toHaveBeenCalledTimes(1);
});
