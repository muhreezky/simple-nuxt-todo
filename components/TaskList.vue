<template>
	<div>
		<div class="block columns">
			<b-field class="column" horizontal label="Filter">
				<b-select v-model="filter" expanded>
					<option v-for="(opt, i) in options" :key="i" :value="opt[0]">
						{{ opt[1] }}
					</option>
				</b-select>
			</b-field>
		</div>
		<div class="block container">
			<task-item v-for="(todo, i) in todos" :key="todo.text + i" :nomor="i" :task="todo" />
			{{ !todos.length ? "Tidak ada" : ""}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TaskList',
		data() {
			return {
				filter: 'all',
				options: [["all", "Semua"], ["selesai", "Selesai"], ["", "Belum selesai"]]
			}
		},
		computed: {
			todos() {
				if (this.filter === 'all'){
					return this.$store.state.todos;
				}
				const f = !!this.filter;
				return this.$store.state.todos.filter(t => t.selesai === f);
			}
		}
	}
</script>