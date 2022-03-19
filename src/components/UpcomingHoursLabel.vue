<template>
  <div class="label">
    <span class="time">Now</span>
    <img
      alt="weather icon"
      class="img"
      src="https://openweathermap.org/img/wn/10d.png"
    />
    <span class="temp">56°</span>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/vars" as *;

.label {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}

.img {
  background-color: rgba($blue, 0.3);
  border-radius: 50%;
  width: 2.5em;
}
</style>
