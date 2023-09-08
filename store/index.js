export const state = () => ({
	todos: []
});

export const mutations = {
	add(state, text) {
		state.todos.push({ text, selesai: false });
	},
	remove(state, { todo }) {
		state.todos.splice(state.todos.indexOf(todo), 1);
	},
	toggle(state, { todo }) {
		todo.done = !todo.done;
	}
}