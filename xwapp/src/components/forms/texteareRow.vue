<template>
	<form-model>
		<div :class="'texteareRow box flex-1 ' + bj">
			<p class="title border-b">
				<slot></slot> :
			</p>
			<textarea
				@focus = "focus"
				@blur = "blur"
				@input = "input"
				v-model = "value"
				rows = '5'
				:disabled = "disabled"
				:class="'texteareRow '+ active">
			</textarea>
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
				value: ''
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
				console.log(1234)
			},
			blur(){
				this.active = '';
			},
			input(event){
				this.$emit('value',this.value);
			}
		},
		props:["disabled"]
	}
</script>