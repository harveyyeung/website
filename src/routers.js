'use strict'

export default function(router){
    router.map({
    	'/':{
    		name:'index',
    		component:function(resolve){
    			 require(['./views/index.vue'],resolve)
    		}
    	},
    	 '/home':{               //首页
            name:'home',
            component: function(resolve){
                require(['./views/home.vue'],resolve);
            }
        },
        '/about':{               //关于
            name:'about',
            component: function(resolve){
                require(['./views/about.vue'],resolve);
            }
        }
    })

}