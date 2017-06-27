import * as types from './mutation-types';

export default{
	// 点击返回按钮动画
	[types.ANIMATE_BACK](state, animate){
		state.animate = animate;
	}
}