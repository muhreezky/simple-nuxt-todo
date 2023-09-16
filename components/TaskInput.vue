<template>
	<div class="block container">
		<form class="columns" @submit.prevent="addTodo">
			<div class="column">
				<b-field label="Task Anda" horizontal required>
					<input v-model="text" class="input" required placeholder="Tulis tugas anda di sini" />
				</b-field>
			</div>
			<div class="column">
				<button class="button is-info" style="width: 100% !important;" type="submit">
					Tambahkan
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'TaskInput',
		data() {
			return {
				text: ''
			}
		},
		computed: {
			todos() {
				return this.$store.state.todos;
			}
		},
		methods: {
			addTodo() {
				if (this.text) {
					this.$store.commit('add', this.text);
					this.text = '';
				}
			}
		},
	}
</script>