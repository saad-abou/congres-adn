import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './components/index';
import indexvod from './components/indexvod';
import oct15 from './components/landing/15oct';
import oct16 from './components/landing/16oct';
//import ExampleComponent from './components/ExampleComponent';
Vue.use(VueRouter);

export default new VueRouter({
        mode:'history',
        routes:[
            {
                path:'/',
                redirect: '/landingpage/15oct'
            },
            {
                path:'/landingpage',
                component:index,
                children: [
                    {
                      path: '15oct',
                      component: oct15
                    },
                    {
                      path: '16oct',
                      component: oct16
                    },
                    {
                        path: '/',
                        redirect: '15oct'
                    },
                  ]
            },
            {
                path:'/vod',
                component:indexvod,
            },
            {   path: '*',
                redirect: '/landingpage/09juin'
            }
            
        ]
});
