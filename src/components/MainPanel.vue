<template>
  <section class="main-panel">
    <UpcomingHours />
    <OpenMap />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UpcomingHours from "./UpcomingHours.vue";
import OpenMap from "./OpenMap.vue";

export default defineComponent({
  components: {
    UpcomingHours,
    OpenMap,
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/vars" as *;

.main-panel {
  background-color: $blue-light;
  border-radius: $border-radius 0 0 $border-radius;
  flex-grow: 1;
}
</style>
