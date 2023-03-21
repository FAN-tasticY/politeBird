import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop',
  loginIndex:'',
  traineeData : [
    {
      input1:'12:00'
      ,input2:'14:00'
      ,input3:'心肺复苏'
      ,input4:'2023年3月3日'
      ,input5:'10人'
      ,input6:'线下'
      ,input7:'许灵玲'
      ,input8:'2023年3月4日'
    },
    {
      input1:'12:00'
      ,input2:'14:00'
      ,input3:'心肺复苏'
      ,input4:'2023年3月3日'
      ,input5:'10人'
      ,input6:'线下'
      ,input7:'许灵玲'
      ,input8:'2023年3月4日'
    },
    {
      input1:'12:00'
      ,input2:'14:00'
      ,input3:'心肺复苏'
      ,input4:'2023年3月3日'
      ,input5:'10人'
      ,input6:'线下'
      ,input7:'许灵玲'
      ,input8:'2023年3月4日'
    },
    {
      input1:'12:00'
      ,input2:'14:00'
      ,input3:'心肺复苏'
      ,input4:'2023年3月3日'
      ,input5:'10人'
      ,input6:'线下'
      ,input7:'许灵玲'
      ,input8:'2023年3月4日'
    },
    {
      input1:'12:00'
      ,input2:'14:00'
      ,input3:'心肺复苏'
      ,input4:'2023年3月3日'
      ,input5:'10人'
      ,input6:'线下'
      ,input7:'许灵玲'
      ,input8:'2023年3月4日'
    }
  ],
  hasSuccessTaskData:[]
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  CHANGE_INDEX:(state,data) =>{
    state.loginIndex = data
  },
  TRAINEE_DATA(state,data){
    state.traineeData = data
  },
  COMMIT_DATA(state,data){
    state.hasSuccessTaskData = data
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('TOGGLE_DEVICE', device)
  },
  changeLoginIndex({commit},data){
    commit('CHANGE_INDEX',data)
    // 当data传递过来之后 将其储存在本地中
    localStorage.setItem('index_key',data)
    console.log(data);
  },
  showTraineePortData({commit},data){
    commit('TRAINEE_DATA',data)
  },
  hasSuccessTaskData({commit},data){
    commit('COMMIT_DATA',data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
