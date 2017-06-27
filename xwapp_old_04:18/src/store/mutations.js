import  * as types from './mutation-types';

export default {
	// 保存headbarTitle
	[types.SAVE_HEADBAR_TITLE](state, title ){
		state.headbarTitle = title;
	},
}

