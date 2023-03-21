const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  // loginIndex:state => state.app.loginIndex
  loginIndex:state => state.app.loginIndex,
  // 默认return
  traineeData:state => state.app.traineeData,
  hasSuccessTaskData:state => state.app.hasSuccessTaskData
}
export default getters
