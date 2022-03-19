<template>
  <div class="map-container">
    <div class="map"></div>
    <button class="button">
      <svg class="button-svg" viewBox="0 0 576 512">
        <path
          d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"
        ></path></svg
      ><span>View Weather Map</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/vars" as *;

.map-container {
  border-radius: 2em;
  cursor: pointer;
  height: 20em;
  margin: 0 auto;
  max-width: 80em;
  overflow: hidden;
  position: relative;

  &:hover .map,
  &:focus .map {
    transform: scale(1);
    filter: blur(8px);
  }
}

.map {
  background-color: $white;
  background-image: url("@/assets/map.jpg");
  background-position: center;
  background-size: cover;
  filter: blur(0.25em);
  height: 100%;
  transform: scale(1.2);
  transition: 0.3s filter, 0.3s transform;
  width: 100%;
}

.button {
  $font-size: 1.5rem;

  align-items: center;
  background-color: $white;
  border: 1px solid $blue;
  border-radius: 0.5em;
  color: $blue;
  cursor: pointer;
  display: flex;
  font: $font;
  font-size: $font-size;
  gap: 0.5rem;
  left: 50%;
  padding: 0.5em 1em;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    background-color: $blue;
    color: $white;

    & .button-svg {
      fill: $white;
    }
  }

  &:active {
    background-color: rgba($blue, 0.8);
  }

  &-svg {
    fill: $blue;
    height: $font-size;
  }
}
</style>
