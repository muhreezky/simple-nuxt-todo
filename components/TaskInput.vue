<template>
	<div class="block container">
		<div class="columns">
			<div class="column">
				<b-field label="Task Anda" horizontal required>
					<input v-model="text" class="input" required placeholder="Tulis tugas anda di sini" @keyup.enter="addTodo" />
				</b-field>
			</div>
			<div class="column">
				<b-button expanded icon-left="plus" type="is-info" @click="addTodo">
					Tambahkan
				</b-button>
			</div>
		</div>
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