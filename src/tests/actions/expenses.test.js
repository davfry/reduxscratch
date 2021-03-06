import {addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should set up edit expense action object', () => {
  const action = editExpense('123123', {note: 'Test value note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123123',
    updates: {
      note: 'Test value note'
    }
  });
});


test('Should set up add expense action object', () => {
  const expenseData = {
    description: 'rent',
    amount: 102333,
    createdAt: 1000,
    note: 'last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});
test('Should set up add expense action object with defaults', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
