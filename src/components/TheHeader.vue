<template>
  <div class="header">
    <img
      src="../assets/images/Moonstruck_beli.png"
      alt="moonstruck-logo"
    />
    <p v-if="account">
      Connected: <span>{{ account }}</span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["account"]);
</script>

<style scoped>
.header {
  width: 100%;
  height: 64px;
  background-color: transparent;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
}
img {
  width: 240px;
}
p {
  color: black;
}
</style>
