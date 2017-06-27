import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

// 登录用户的信息
const user = {
	id: '00480',//sessionStorage.user,
	name: '夏阳'
}
// headbarTitleitle
const title = user.id != '00480' ? '我的客户' : '我的申请';

const state = {
  headbarTitle: title,
  user: user,
};

export default new Vuex.Store({
	state,
	mutations,
	actions
})
