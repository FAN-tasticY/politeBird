
const tokens = {
  doctor: {
    token: 'admin-token'
  },
  professor: {
    token: 'editor-token'
  },
  trainee:{
    token:'trainee-token'
  },
  patient:{
    token:'patient-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super doctor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an professor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  'trainee-token':{
    roles: ['editor'],
    introduction: 'I am an trainee',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  },
  'patient-token':{
    roles: ['editor'],
    introduction: 'I am an patient',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/vue-admin-template/user/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      // 为什么使用中括号，因为我们需要以变量的形式读取对象中的内容。
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }
      // 哪里在判断，应该是request里面写了拦截器。
      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/vue-admin-template/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },
  

  {
    url:'/getInfo',
    type:'get',
    response:() => {
      return {
        code:20000,
        data:[
          {
          phone:'185****6636'
          ,name:'刘豪'
          ,gender:'男'
          ,age:'52'
          ,room:'康复医学科'
          ,doctor:'许灵玲'
          ,time:'2023-04-20'
          ,zhouqi:'1'
          ,end:'2023-04-21'
          ,caozuo:'详情'
        },
        {
          phone:'150****4921'
          ,name:'张思'
          ,gender:'女'
          ,age:'32'
          ,room:'康复医学科'
          ,doctor:'许灵玲'
          ,time:'2023-05-03'
          ,zhouqi:'1'
          ,end:'2023-05-21'
          ,caozuo:'详情'
        }, {
          phone:'151****6225'
          ,name:'杨梅'
          ,gender:'女'
          ,age:'26'
          ,room:'康复医学科'
          ,doctor:'许灵玲'
          ,time:'2023-07-06'
          ,zhouqi:'1'
          ,end:'2023-07-11'
          ,caozuo:'详情'
        }
      ]
      }
    }
  }
]
