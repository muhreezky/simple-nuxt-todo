export const state = () => ({
	todos: [],
});

export const mutations = {
	add(state, text) {
		const id = state.todos.length;
		state.todos.push({ text, selesai: false, id });
	},
	remove(state, todo) {
		state.todos.splice(state.todos.indexOf(todo), 1);
	},
	toggle(state, todo) {
		todo.selesai = !todo.selesai;
	}
}