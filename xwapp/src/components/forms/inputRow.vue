<template>
	<form-model>
		<div :class="bj + ' inputRow box flex-1 flex-row-aic'">
			<p class="title">
				<slot></slot> :
			</p>
			<input
				@focus = "focus"
				@blur = "blur"
				@input = "input"
				v-model = "value"
				:disabled = "disabled"
				:class="'flex-1 '+ active"></input>
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
			focus(){
				this.active = 'active';
			},
			blur(){
				this.active = '';
			},
			input(event){
				this.$emit('inputVal','',this.value);
			}
		},
		props:["disabled"]
	}
</script>