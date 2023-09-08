<template>
	<div class="container">
		<div class="columns">
			{{ text }}
			<div class="column">
				<b-field label="Task Anda" horizontal required>
					<b-input v-model="text" placeholder="Tulis tugas anda di sini" @keyup.enter="addTodo" />
				</b-field>
			</div>
			<div class="column">
				<b-button expanded icon-left="plus" type="is-primary" @click="addTodo">
					Tambahkan
				</b-button>
			</div>
		</div>
		{{ todos }}
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
				this.$store.commit('add', this.text);
				this.text = '';
			}
		},
	}
</script>