import Vue from 'vue';
import Router from 'vue-router';
import SettingsView from '../views/SettingsView';
import ReadView from '../views/ReadView';
import NewsView from '../views/NewsView';
import CustomTextView from '../views/CustomTextView';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/custom-text',
            name: 'custom-text',
            component: CustomTextView,
            redirect: '/custom-text/settings',
            meta: { title: 'Custom Text' },
            children: [
                {
                    path: 'settings',
                    name: 'settings',
                    component: SettingsView,
                    meta: { title: 'Settings' }
                },
                {
                    path: 'read',
                    name: 'read',
                    component: ReadView,
                    meta: { title: 'Read' }
                }
            ]
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
            meta: {title: 'News'}
        }
    ]
})
