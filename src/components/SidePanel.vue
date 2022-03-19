<template>
  <section class="side-panel">
    <SidePanelHeader />
    <SidePanelDayInfo />
    <SidePanelTemp />
    <WeatherImage iconId="10d" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidePanelHeader from "./SidePanelHeader.vue";
import SidePanelDayInfo from "./SidePanelDayInfo.vue";
import SidePanelTemp from "./SidePanelTemp.vue";
import WeatherImage from "./WeatherImage.vue";

export default defineComponent({
  components: {
    SidePanelHeader,
    SidePanelDayInfo,
    SidePanelTemp,
    WeatherImage,
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/vars" as *;

.side-panel {
  background-color: transparent;
  box-sizing: border-box;
  flex: none;
  padding: 4em;
  user-select: none;
  width: 30em;
}
</style>
