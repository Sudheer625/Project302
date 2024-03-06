// script.js
$(document).ready(() => {
  // Load expenses
  $.get('/expenses', (expenses) => {
    expenses.forEach((expense) => {
      $('#expenseList').append(`<li>${expense.description}: $${expense.amount}</li>`);
    });
  });

  // Submit expense form
  $('#expenseForm').submit((e) => {
    e.preventDefault();
    const description = $('#expenseDescription').val();
    const amount = $('#expenseAmount').val();
    $.post('/expenses', { description, amount }, (data) => {
      $('#expenseList').append(`<li>${data.description}: $${data.amount}</li>`);
      $('#expenseDescription').val('');
      $('#expenseAmount').val('');
    });
  });
});
app.use(express.static('public'));