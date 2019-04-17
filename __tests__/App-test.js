/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fetchReducer, initialState} from "../src/Service/fetchApi/fetchReducer";
import * as receiveRepos from "../src/Service/fetchApi/fetchAction";

it('renders correctly', () => {
  renderer.create(<App />);
});
expect(fetchReducer(initialState, receiveRepos.getSuccess(date))).toEqual({
  todoData: [],
  doneItem: [],
  failedData: [],
  loading: false,
  error: null,
});
expect(fetchReducer(initialState,receiveRepos.getSuccess(data))).toMatchSnapshot();
