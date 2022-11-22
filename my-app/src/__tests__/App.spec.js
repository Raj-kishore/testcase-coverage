import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom";




it("check Test functions are triggered", () => {
  const {  getByText } = render(<App />)
  fireEvent.click(getByText(/Test1/));
  fireEvent.click(getByText(/Test2/));
  expect(getByText('Go ahead')).toBeTruthy();
  for(var i=0; i < 2; i++){
    fireEvent.click(getByText(/Test1/));
    fireEvent.click(getByText(/Test2/));
  }
  expect(getByText('Stop it...')).toBeTruthy();
});


test('Snapshot testing', () => {
  const tree = renderer
    .create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot(); 
});

