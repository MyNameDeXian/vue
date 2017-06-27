<template>
	<model auto="auto" position="fixed">
		<headbar slot="header">
			<back-btn slot="leftBtn"></back-btn>
			新增经营企业
		</headbar>
		<div class="apply-box">
			<apply-title>
				<img src="../../img/client/img_increase_basic-information.png" alt="">
				经营企业基本信息
			</apply-title>
			<input-row ref='names'>姓名</input-row>	
			<input-row :disabled="true" >性别</input-row>	
			<select-row :data="data" ref="select">选择</select-row>
			<texteare-row  @value="clickBtn">多行</texteare-row>
		</div>
		<div class="apply-box last-box">
			<info-title>
				<img src="../../img/client/img_basic-information.png" alt="">
				个人基本信息
			</info-title>
			<info-list>
				姓名
				<p slot='info'>{{'书记'}}</p>
			</info-list>
			<info-list>
				性别
				<p slot='info'>{{data[0]}}</p>
			</info-list>
			<info-list>
				年龄
				<p slot='info'>{{'18'}}</p>
			</info-list>
		</div>
		<div slot="footer">
			<submit-btn @touchstartFn="clickBtn">提交</submit-btn>
		</div>
		<div slot="footer">
			<a @click.once="clickBtn"></a>
		</div>
	</model>
</template>

<script>
	import model from '../model';
	import headbar from '@/components/bar/head/headbar';
	import backBtn from '@/components/bar/head/backBtn';
	import inputRow from '@/components/forms/inputRow';
	import applyTitle from '@/components/title/applyTitle';
	import texteareRow from '@/components/forms/texteareRow';
	import selectRow from '@/components/forms/selectRow';
	import infoTitle from '@/components/title/infoTitle';
	import infoList from '@/components/lists/infoList';
	import submitBtn from '@/components/btn/submitBtn';

	export default {
		components:{
			model,
			inputRow,
			headbar,
			backBtn,
			applyTitle,
			texteareRow,
			selectRow,
			infoTitle,
			infoList,
			submitBtn,
		},
		data(){
			return{
				bodyData:{},
			}
		},
		computed:{
			data(){
				var obj = {}
				for(var i=0;i<10;i++){
					obj[i] = '精神科电话'
				}
				return obj;
			}
		},
		methods:{
			clickBtn(){
				console.log(this.$refs.names.value);
				console.log(this.$refs.select.value);
				alert("123");
			}
		}
	}
</script>

<style>
	.apply-box{
		background: #fff;
		margin-bottom: .16rem;
	}
	.last-box{
		margin-bottom: 0px;
	}
</style>