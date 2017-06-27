<template>
	<model auto="auto" position="fixed">
		<headbar slot="header">
			<back-btn slot="leftBtn"></back-btn>
			新增个人客户
		</headbar>
		<div class="apply-box">
			<apply-title>
				<img src="../../img/client/img_increase_basic-information.png" alt="">
				个人基本信息
			</apply-title>
			<input-row @inputVal="function(val){bodyData.val=val}" ref='names'>姓名</input-row>	
			<input-row :disabled="true" >性别</input-row>	
			<select-row :data="data">选择</select-row>
			<texteare-row ref='name' @value="clickBtn">多行</texteare-row>
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
			<submit-btn @clickBtn="clickBtn">提交</submit-btn>
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
	import {httpRequest} from '@/assets/common.js'; 

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
				key: ''
			}
		},
		computed:{
			data(){
				var obj = {}
				for(var i=0;i<10;i++){
					obj[i] = '女神电话'
				}
				return obj;
			}
		},
		methods:{
			clickBtn(){
				var obj={
					userid: '010603',
	                entry_pwd: '888888',
	                pwd_type: '1',
	                finger_comp: '1'
				}
				httpRequest(obj,'', 'XWA000007',function(data){
					console.log(data)
				},function(err){
					console.log(err)
				})
			},
			inputVal(key, val){
				console.log(arguments);
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