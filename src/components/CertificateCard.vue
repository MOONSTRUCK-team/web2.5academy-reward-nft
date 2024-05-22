<template>
  <div
    class="wrapper"
    ref="target"
  >
    <div class="card"></div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useMouseInElement } from "@vueuse/core";

const target = ref(null);

const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);

const cardTransform = computed(() => {
  const MAX_ROTATE = 4;

  const rX = (MAX_ROTATE / 2 - (elementY.value / elementHeight.value) * MAX_ROTATE).toFixed(2);
  const rY = (MAX_ROTATE / 2 - (elementX.value / elementWidth.value) * MAX_ROTATE).toFixed(2);

  return `perspective(300px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
</script>

<style>
:root {
  --card-height: calc(0.687 * var(--card-width));
  --card-width: 30vw;
  --card-radius: 0.2in;
  --card-thickness: 0in;
}

.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  background-image: url("../assets/images/diploma.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid transparent;
  padding: 1rem;
  width: var(--card-width);
  height: var(--card-height);
  border-radius: var(--card-radius);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transform: v-bind(cardTransform);
}

@media only screen and (max-width: 980px) {
  :root {
    --card-width: 50vw;
  }
}
</style>
