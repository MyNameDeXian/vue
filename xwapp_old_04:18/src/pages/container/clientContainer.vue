<template>
	<div class="p-f w-100">
		<!-- 滚动按钮 -->
		<scroll-btn
			@scrollBtnClick = 'scrollBtnFn'
			:leftImg_h = 'leftImg_h'
			:leftImg_n = 'leftImg_n'
			:rightImg_h = 'rightImg_h'
			:rightImg_n = 'rightImg_n'
			leftText = '个人客户'
			rightText = '经营企业'
		>
			<p-client></p-client>
			<c-client></c-client>
		</scroll-btn>
	</div>
</template>

<script>
	import scrollBtn from '../../components/btn/scrollBtn';
	import CClient from '../client/CClient';
	import PClient from '../client/PClient';

	export default {
		components : {
			scrollBtn,
			CClient,
			PClient,
		},
		data(){
			return {
				leftImg_h: require('../../img/client/icon_customer_personal_h.png'),
				leftImg_n: require('../../img/client/icon_customer_personal_n.png'),
				rightImg_h: require('../../img/client/icon_customer_company_h.png'),
				rightImg_n: require('../../img/client/icon_customer_company_n.png'),
			}
		},
		methods: {
			scrollBtnFn(btn){
				if(btn == 'left'){
					// click left btn will you to do
				}else if(btn == 'right'){
					// click right btn will you to do
				}
			}
		}
	}
</script>



