<template>
  <main class="main">
    <SidePanel />
    <MainPanel />
  </main>
</template>

<script lang="ts">
import SidePanel from "@/components/SidePanel.vue";
import MainPanel from "@/components/MainPanel.vue";

export default {
  name: "app",
  components: {
    SidePanel,
    MainPanel,
  },
};
</script>

<style lang="scss" scoped>
@use "@/styles/vars" as *;

.main {
  background-color: $blue;
  display: flex;
  min-height: 100vh;
}
</style>
