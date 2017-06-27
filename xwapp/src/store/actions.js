import * as types from './mutation-types';

export default{
	// 点击返回按钮动画
	backAnimate({commit}, animate){
		commit(types.ANIMATE_BACK, animate);
	}
}