import TestRenderer from 'react-test-renderer';
import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import App from './App';

jest.mock('highcharts');
jest.mock('highcharts-react-official');

describe('<App>', () => {
  it('should render component', () => {
    const app = TestRenderer.create(<App />);
    const formatter = app.getInstance().state.hcOptions.tooltip.formatter;
    const obj1 = {
      x: "Jan",
      y: 10,
      f: formatter
    };

    const obj2 = {
      x: "Jan",
      y: 60,
      f: formatter
    };

    expect(obj1.f()).toBe(" Data not available ");
    expect(obj2.f()).toBe("<b>Jan</b><br/> 60");

    // expect(app.toJSON()).toMatchSnapshot();
  });

});