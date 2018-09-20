import _isEmpty from 'lodash/isEmpty';

export const state = {
    currentUser: {}
};

export const mutations = {
    SET_CURRENT_USER(state, user) {
        state.currentUser = user;
        return user;
    }
};

export const getters = {
    isLoggedIn: state => !_isEmpty(state.currentUser),
    currentUser: state => state.currentUser,
    userToken: state => state.currentUser.token
};

export const actions = {
    init({ state }) {},

    logIn({ commit }, data) {
        commit('SET_CURRENT_USER', data);
    },

    refresh({ commit }, user) {
        return commit('SET_CURRENT_USER', user);
    },

    logOut({ commit }) {
        return commit('SET_CURRENT_USER', {});
    }
};
