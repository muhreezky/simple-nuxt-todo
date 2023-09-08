<template>
	<div class="is-flex is-justify-content-space-between is-align-items-center p-2">
		<b-field>
			<b-checkbox v-model="selesai" @input="toggle">
				{{ task.text }}
			</b-checkbox>
		</b-field>
		<div>
			<b-button type="is-danger" icon-left="delete" @click="deleteTask()">
				Hapus
			</b-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TaskItem',
		props: {
			task: {
				type: Object,
				required: true
			},
			nomor: Number(0)
		},
		data() {
			return {
				selesai: this.task.selesai
			}
		},
		methods: {
			deleteTask() {
				this.$store.commit('remove', this.task);
			},
			toggle() {
				this.$store.commit('toggle', this.task)
			}
		}
	}
</script>