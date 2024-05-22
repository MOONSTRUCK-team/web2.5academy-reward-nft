<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: black;
  color: white;
  padding: 16px 32px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  margin-top: 24px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  display: none;
}
</style>
