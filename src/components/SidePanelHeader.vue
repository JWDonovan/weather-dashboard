<template>
  <div class="side-panel-header">
    <NewLocationButton />
    <TemperatureToggle />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewLocationButton from "./NewLocationButton.vue";
import TemperatureToggle from "./TemperatureToggle.vue";

export default defineComponent({
  components: {
    NewLocationButton,
    TemperatureToggle,
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/vars" as *;

.side-panel-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
