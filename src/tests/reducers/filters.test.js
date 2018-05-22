import moment from 'moment';
import filterReducer from '../../reducers/filters';

test('should set up deafaul filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const action = {type: 'SORT_BY_DATE'};
  const state = filterReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
  const text = 'test filter text';
  const action = {type: 'SET_TEXT_FILTER', text: text}
  const state = filterReducer(undefined, action);
  expect(state.text).toBe(text);
});
test('should set startDate', () => {
  const startDate = moment().add(1, 'month').startOf('month');
  const action = {type: 'SET_START_DATE', startDate: startDate}
  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});
test('should set endDate', () => {
  const endDate = moment().add(2, 'month').startOf('month');
  const action = {type: 'SET_END_DATE', endDate: endDate}
  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
