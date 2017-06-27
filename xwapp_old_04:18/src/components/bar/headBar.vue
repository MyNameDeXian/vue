<template>
	<div class="headbar p-f-t flex-row flex-sb-c">
		<!-- back btn -->
		<back-btn v-show=" !show "></back-btn>
		<!-- user btn -->
		<user-btn v-show=" show " @userClick="userClick"></user-btn>
		<!-- title -->
		<div class='headbarTitle flex-row-jcc'>{{ headbarTitle }}</div>
		<!-- delete & modify btn-->
		<div class="flex-1">
			<apply-btn v-show=" show && showApply "></apply-btn>
		</div>
	</div>
</template>

<script>
	import userBtn from './userBtn';
	import backBtn from './backBtn';
	import applyBtn from './applyBtn';
	export default {
		components : {
			userBtn,
			backBtn,
			applyBtn
		},
		computed: {
			headbarTitle(){
				return  this.$store.state.headbarTitle;
			},
			show(){
				console.log(this.$route)
				var routerName = { 
					'clientContainer': true, 
					'PApplication': true,
					'PTask': true
				}
				var name = this.$route.name;
				return routerName[ name ] || false;
			},
			showApply(){
				return this.$route.name !== 'PTask';
			}
		},
		methods: {
			userClick(){
				this.$emit('userClick');
			}
		}
	}
</script>
