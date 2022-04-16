import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
loadFonts()

import { ApolloClient, InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://localhost:3000/graphql',
})
import { createApolloProvider } from '@vue/apollo-option'
import router from './router.js'

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})
const app = createApp(App)
app.use(vuetify)
app.use(apolloProvider)
app.use(router)
app.mount('#app')
