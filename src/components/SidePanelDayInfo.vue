<template>
  <div class="side-panel-day-info">
    <div class="location">
      <svg class="location-svg" viewBox="0 0 384 512">
        <path
          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
        />
      </svg>
      <span class="location-label">New York, USA</span>
    </div>
    <div class="sunrise-sunset">
      <svg class="sunrise-sunset-svg" viewBox="0 0 576 512">
        <path
          d="M95.8 448h38.5l-44-66 86-17.2c6.3-1.3 11.3-6.2 12.6-12.6l17.2-86 73 48.7c5.4 3.6 12.4 3.6 17.8 0l73-48.7 17.2 86c1.2 6.3 6.2 11.3 12.6 12.6l86 17.2-44 66h38.5l45.5-68.1c3-4.4 3.5-10.1 1.5-15s-6.4-8.5-11.7-9.6l-99-19.8-19.8-99c-1-5.2-4.6-9.6-9.6-11.7-5-2.1-10.6-1.5-15 1.5l-84 56-84-56c-4.4-2.9-10.1-3.5-15-1.5s-8.5 6.4-9.6 11.7l-19.8 99-99 19.8c-5.2 1-9.6 4.6-11.7 9.6s-1.5 10.6 1.5 15L95.8 448zm101.9-330.3c3.1 3.1 8.2 3.1 11.3 0l63-63V216c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V54.6l63 63c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3L299.3 4.7C296.2 1.6 292.1 0 288 0s-8.2 1.6-11.3 4.7L186.3 95c-3.1 3.1-3.1 8.2 0 11.3l11.4 11.4zM568 480H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM287.8 352c-56.3 0-102.5 41.9-110.4 96h32c7.4-36.5 39.7-64 78.4-64s70.9 27.5 78.4 64h32c-7.8-54.1-54.1-96-110.4-96z"
        />
      </svg>
      <span>07:19</span>
    </div>
    <div class="date">
      <span class="day">Today</span>
      <span class="date-string">28 Sept</span>
    </div>
    <div class="sunrise-sunset">
      <svg class="sunrise-sunset-svg" viewBox="0 0 576 512">
        <path
          d="M276.7 219.3c3.1 3.1 7.2 4.7 11.3 4.7s8.2-1.6 11.3-4.7l90.3-90.3c3.1-3.1 3.1-8.2 0-11.3l-11.3-11.3c-3.1-3.1-8.2-3.1-11.3 0l-63 63V8c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v161.4l-63-63c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l90.3 90.3zM95.8 448h38.5l-44-66 86-17.2c6.3-1.3 11.3-6.2 12.6-12.6l17.2-86 73 48.7c5.4 3.6 12.4 3.6 17.8 0l73-48.7 17.2 86c1.2 6.3 6.2 11.3 12.6 12.6l86 17.2-44 66h38.5l45.5-68.1c3-4.4 3.5-10.1 1.5-15s-6.4-8.5-11.7-9.6l-99-19.8-19.8-99c-1-5.2-4.6-9.6-9.6-11.7-5-2.1-10.6-1.5-15 1.5l-84 56-84-56c-4.4-2.9-10.1-3.5-15-1.5s-8.5 6.4-9.6 11.7l-19.8 99-99 19.8c-5.2 1-9.6 4.6-11.7 9.6s-1.5 10.6 1.5 15L95.8 448zm192-96c-56.3 0-102.5 41.9-110.4 96h32c7.4-36.5 39.7-64 78.4-64s70.9 27.5 78.4 64h32c-7.8-54.1-54.1-96-110.4-96zM568 480H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h560c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z"
        />
      </svg>
      <span>19:32</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/vars" as *;

.side-panel-day-info {
  align-items: center;
  color: $white;
  padding: 2em 0;
  display: grid;
  grid-template-columns: auto 4em;
  grid-template-rows: 1fr 1fr;
}

.location {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  padding: 0.5em 1em;

  &-svg {
    fill: $white;
    width: 1em;
  }

  &-label {
    font-size: 1.25em;
  }
}

.sunrise-sunset {
  align-items: center;
  display: flex;
  gap: 0.25em;
  justify-content: flex-end;

  &-svg {
    fill: $white;
    width: 1.25em;
  }
}

.date {
  display: flex;
  gap: 0.25em;
  padding: 0.5em 1em;
}
</style>
