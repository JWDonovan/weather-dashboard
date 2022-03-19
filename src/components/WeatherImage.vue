<template>
  <img
    class="weather-icon"
    alt="current weather icon"
    :src="'https://openweathermap.org/img/wn/' + iconId + '@4x.png'"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeatherIcon",
  props: ["iconId"],
});
</script>

<style lang="scss" scoped>
.weather-icon {
  display: block;
  margin: 2em auto;
  max-width: 100%;
  width: 100vw;
}
</style>
