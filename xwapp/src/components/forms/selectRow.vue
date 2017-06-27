<template>
	<form-model>
		<div :class="bj + ' selectRow box flex-1 flex-row-aic'">
			<p class="title">
				<slot></slot> :
			</p>
			<select
			v-model = "value"
			:disabled = "disabled"
			:class="'flex-1 '+ active">
				<option v-for="item in data">{{ item }}</option>
			</select>
		</div>
	</form-model>
</template>

<script>
	import formModel from './formModel';
	export default {
		components:{
			formModel,
		},
		data(){
			return {
				active: '',
				value: '',
			}
		},
		computed:{
			bj(){
				return this.disabled ? 'bj' : '';
			}
		},
		methods:{
			
		},
		props:{
			"disabled" : String,
			"data" : Object,
		}
	}
</script>