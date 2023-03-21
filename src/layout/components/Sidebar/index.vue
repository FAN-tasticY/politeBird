<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        <!-- <sidebar-item     key="/nihao/hello" item="nihao" base-path="/nihao"  /> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  data(){
    return {
      state:''
    }
  },
  mounted(){
    this.state = JSON.parse(localStorage.getItem('index_key'))
  },
  computed: {
    ...mapGetters([
      'sidebar',
    ]),

    routes() {
      console.log('我是routes',this.$router.options.routes);
      // 我去，这难道是新大陆吗？？？ 使用slice进行切片  // 这里可以传递数据吧，然后我们多建立几个sidebar，然后我们就是根据数据再决定展示哪个！！！

      if(this.state === 1){
        return this.$router.options.routes.slice(0,9)
      }else if(this.state === 2){
        return this.$router.options.routes.slice(5,7)
      }else if(this.state === 3){
        let newArr = this.$router.options.routes.filter((item)=>{
          if(item.name === 'VipManager' || item.name === 'recoverManager'){
            return true
          }
        })

        let oringinArr = this.$router.options.routes.slice(10,11)[0]
        newArr.push(oringinArr)
        console.log(newArr);
        return newArr

      }else if(this.state === 4){
        return this.$router.options.routes.slice(11,12)
      }
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
