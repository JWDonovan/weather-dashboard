<template>
  <label class="temperature-toggle" for="temperature-toggle">
    <span>C°</span>
    <input type="checkbox" id="temperature-toggle" checked />
    <div class="toggle-button" type="button"></div>
    <span>F°</span>
  </label>
</template>

<style lang="scss" scoped>
@use "@/styles/vars" as *;

.temperature-toggle {
  align-items: center;
  color: $white;
  cursor: pointer;
  display: flex;
  gap: 0.5em;
}

#temperature-toggle {
  display: none;

  &:checked + .toggle-button:before {
    transform: translate(0.9em, -10%);
  }
}

.toggle-button {
  background-color: darken($white, 20%);
  border-radius: 1em;
  display: inline-block;
  height: 1em;
  width: 2em;

  &:before {
    $size: 1.25em;

    background-color: $white;
    border-radius: 50%;
    content: "";
    display: block;
    height: $size;
    transform: translatey(-10%);
    transition: 0.2s transform;
    width: $size;
  }
}
</style>
