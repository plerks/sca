<template>
  <div class="wrapper">
    <header class="top-header">
      <navbar></navbar>
    </header>
    <aside class="sidebar-wrapper" data-simplebar="true">
      <sidebar></sidebar>
    </aside>
    <main class="page-content">
      <router-view name="MainPanel"></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import CodeSnippetScan from "./components/CodeSnippetScan.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    CodeSnippetScan,
  },
  data() {
    return {}
  },
};
</script>