timport * as types from './mutation-types';

export default {
	saveHeadbarTitle({ commit }, title){
		commit( types.SAVE_HEADBAR_TITLE, title)
	},
}