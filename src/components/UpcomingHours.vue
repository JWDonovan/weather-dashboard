<template>
  <section class="upcoming-hours">
    <div class="upcoming-hours-header">
      <span class="upcoming-hours-label">Upcoming Hours</span>
      <div class="upcoming-hours-controls">
        <button class="rain-precipitation-button">
          <span>Rain precipitation</span>
          <svg class="rain-precipitation-button-svg" viewBox="0 0 448 512">
            <path
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            />
          </svg>
        </button>
        <button class="next-days-button">
          <span>Next days</span>
          <svg class="next-days-button-svg" viewBox="0 0 320 512">
            <path
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="extra-labels">
      <UpcomingHoursLabel v-for="label in labels" :key="label" />
    </div>
    <UpcomingHoursChart />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UpcomingHoursLabel from "./UpcomingHoursLabel.vue";
import UpcomingHoursChart from "./UpcomingHoursChart.vue";

export default defineComponent({
  data() {
    return {
      labels: [0, 1, 2, 3, 4, 5, 6, 7],
    };
  },
  components: {
    UpcomingHoursLabel,
    UpcomingHoursChart,
  },
});
</script>

<style lang="scss" scoped>
@use "@/styles/vars" as *;

.upcoming-hours {
  background-color: $white;
  border-radius: 2em;
  box-sizing: border-box;
  margin: 4em auto;
  max-width: 80em;
  padding: 4em;
}

.upcoming-hours-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
}

.upcoming-hours-label {
  font-size: 1.25rem;
}

.upcoming-hours-controls {
  display: flex;
  gap: 1em;
}

.next-days-button {
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: 0.25em;
  cursor: pointer;
  display: flex;
  font: $font;
  gap: 0.5em;

  &-svg {
    height: 1em;
    transform: translatey(0.18em);
  }
}

.rain-precipitation-button {
  $color: rgba($black, 0.5);

  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: 0.25em;
  color: $color;
  cursor: pointer;
  display: flex;
  font: $font;
  gap: 0.5em;

  &-svg {
    fill: $color;
    height: 1em;
    transform: translatey(0.18em);
  }
}

.extra-labels {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;

  & .label:not(:first-child) {
    transform: translate(2px);
  }
}
</style>
