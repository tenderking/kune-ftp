<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import { useMediaQuery } from "@vueuse/core";

import IconHamburger from './IconHamburger.vue';
import IconClose from './IconClose.vue';


const isHidden = ref(true)
const isMobile = useMediaQuery("(max-width: 550px)")

function closeModal() { isHidden.value = true }
function openModal() { isHidden.value = false }

</script>

<template>
  <header>
    <NuxtLink class="logo" to="/">
      <span> Kune </span>
    </NuxtLink>
    <nav>
      <!-- Left-aligned links -->
      <ul class="nav-small-screen" ref="target" :class="isHidden ? 'hidden' : 'show'" v-on-click-outside="closeModal">
        <li>
          <NuxtLink to="/services">Browse Services </NuxtLink>
        </li>

        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact us</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/signin">Sign in</NuxtLink>
        </li>
      </ul>
      <i class="i-blue" v-if="isMobile">
        <IconHamburger class="i-green" v-if="isHidden" @click="openModal" />
        <IconClose v-else @click="closeModal" />
      </i>
      <!-- <fa class="bars-menu" v-else icon="times" /> -->
    </nav>
  </header>
  <!-- Drop-down menu -->
  <!-- <transition name="fade">
		<div class="menu-container">
			<div class="bar">
				<router-link to="/sign-in">Sign in</router-link>
			</div>
			<div class="bar">
				<router-link to="/services">Browse Services </router-link>
			</div>
			<div class="bar">
				<router-link to="/about">About</router-link>
			</div>
			<div class="bar">
				<router-link to="#">Contact us</router-link>
			</div>
		</div>
	</transition> -->
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  height: max-content;
  position: relative;
}

i {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.hidden {
  display: none;
}

.show {
  display: flex;
}

ul {
  position: absolute;
  right: 1em;
  left: 1em;
  top: 100%;

  margin-inline: 1em;
  background-color: var(--color-background-mute);

  display: none;
  margin-inline: auto;
}

button {
  border: none;
  background-color: inherit;
  color: var(--color);
}

.show {
  display: flex;
  padding: 2em;
  border-radius: 1em;
  flex-direction: column;
}

nav ul {
  gap: 1rem;
}

@media (min-width: 550px) {
  ul {
    position: static;
    display: flex;
    background-color: var(--background);
  }

  button {
    display: none;
  }

  .hidden {
    display: flex;
  }
}
</style>
