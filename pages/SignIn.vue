<template>
  <FormLayout>
    <div class="sign-in-container">
      <form action="">
        <div class="input-container">
          <label>Email:</label>
          <input type="email" name="email" id="sign-in-email" placeholder="type your email" />
        </div>
        <div class="input-container">
          <label>Password:</label>
          <input type="password" name="password" id="sign-in-password" placeholder="password" />
        </div>
        <button type="submit">SignIn</button>
      </form>
    </div>
  </FormLayout>
</template>
<script setup lang="ts">

</script>
<style>
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.input-container {
  display: flex;
  flex-direction: column;
}

button {
  padding: 1em 1em;
  border-radius: 0.5em;
  background-color: var(--color-background-mute);
  text-transform: uppercase;
}

input {
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background-color: var(--color-background-mute);
  text-transform: uppercase;
}
</style>
