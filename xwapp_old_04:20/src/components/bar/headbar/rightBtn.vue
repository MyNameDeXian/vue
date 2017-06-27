<template>
	<!-- right -->
	<div class="flex-1 flex-row-end">
		<!-- apply-btn -->
		<img 
			@click = "showApply"
			class = "applyBtn" 
			v-show = " !show "
			src="../../../img/tab/icon_customer_add.png" alt="">
		<!-- modify-btn -->
		<img 
			@click = "modifyClick"
			class="modifyBtn" 
			v-show = " show "
			src="../../../img/tab/icon_modify-the.png" alt="">
		<!-- delete-btn -->
		<img 
			@click = "delClick"
			class="deleteBtn" 
			v-show = " show "
			src="../../../img/tab/icon_delete.png" alt="">
		<apply-alert></apply-alert>
	</div>
</template>

<script>
	import applyAlert from '../../alert/applyAlert';
	export default {
		components: { applyAlert },
		computed: {
			show(){
				// return true
			},
		},
		methods: {
			showApply(){
				
			},
			modifyClick(){

			},
			delClick(){

			},
		}
	}
</script>


