<template>
  <canvas id="upcoming-hours-chart"></canvas>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineController,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import upcomingHoursData from "../upcoming-hours";

export default defineComponent({
  data() {
    return {
      upcomingHoursData,
    };
  },
  mounted() {
    Chart.register(CategoryScale);
    Chart.register(LinearScale);
    Chart.register(LineController);
    Chart.register(PointElement);
    Chart.register(LineElement);
    Chart.register(Filler);

    const canvas = document.getElementById(
      "upcoming-hours-chart"
    ) as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    new Chart(ctx, upcomingHoursData);
  },
});
</script>

<style lang="scss" scoped>
#upcoming-hours-chart {
  max-height: 10em;
}
</style>
