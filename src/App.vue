<template>
  <div class="wrapper">
    <header class="top-header">
      <navbar></navbar>
    </header>
    <aside class="sidebar-wrapper" data-simplebar="true">
      <sidebar></sidebar>
    </aside>
    <main class="page-content">
      <main-panel></main-panel>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import MainPanel from "./components/MainPanel.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    MainPanel,
  },
  data() {
    return {}
  },
};
</script>