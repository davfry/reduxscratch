import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set up default expenses state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'new text expense',
      note: 'new test expense',
      amount: 69,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[3]).toEqual({
    id: '4',
    description: 'new text expense',
    note: 'new test expense',
    amount: 69,
    createdAt: 0
  });
});

test('should edit an expense', () => {
  const amount = 69000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});
test('should not edit expense if expense not found', () => {
  const amount = 69000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
