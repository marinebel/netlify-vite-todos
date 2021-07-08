import { buildTodo } from '../support/generate'
describe('test my todolist', () => {
	it('test create todos', () => {
		const todo = buildTodo();
		console.log(todo.title())
		cy.visit('/');
		cy.findByTestId('input_todo').type(todo.title());
		cy.findByTestId('select_tag').select(String(todo.tagId))
		cy.findByTestId('add_todo_btn').click()
		cy.wait(200);
		cy.get('li').then(($) => {
			const initialCount = $.length+1;
			cy.findByTestId('input_todo').type(todo.title());
			cy.findByTestId('select_tag').select(String(todo.tagId))
			cy.findByTestId('add_todo_btn').click()
			cy.wait(200);
			cy.get('li').its('length').should('eq',initialCount)
		})
	})
	it('test delete todos', () => {
		cy.visit('/');
		cy.get('li').then(($) => {
			const initialCount = $.length-1;
			cy.get('li').eq(0).find('button').click()
			cy.wait(200)
			cy.get('li').its('length').should('eq',initialCount)
		})
	})
})