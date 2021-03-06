import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    // 	path: '/',
    // 	name: 'Hello',
    // 	components: {
    // 		default: HelloWorld,
    // 		left: Hi1,
    // 		right: Hi2
    // 	}
    // }
    {
    	path: '/',
    	name: 'Hello',
    	component: HelloWorld
    },{
    	path: '/params/:newsId(\\d+)/:newsTitle',
    	name: "params",
    	component: Params
    },{
    	path: '/Hi',
    	name: 'Hi',
    	components:{
    		default: Hi,
    		left: Hi1,
    		right: Hi2
    	}
    },{
    	path: '/goHome',
    	redirect: '/'
    },{
    	path: '/go2/:newId(\\d+)/:newsTitle',
    	component: Params
    }
  ]
})
