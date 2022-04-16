import CodeSnippetScan from "./components/CodeSnippetScan.vue";
import RepoScan from "./components/RepoScan.vue";
import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: '/',
        components: {
            MainPanel: CodeSnippetScan
        }
    },
    {
        path: '/reposcan',
        components: {
            MainPanel: RepoScan
        }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
export default router