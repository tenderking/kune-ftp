<template>
  <main>
    <slot></slot>
  </main>
</template>

<script setup lang="ts"></script>
<style scoped>
main {
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
