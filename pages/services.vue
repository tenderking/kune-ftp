<template>
  <MainLayout>
    <header class="container">
      <h2>services</h2>
      <div>
        <!-- <select id="services-category-btn" v-model="uniqueCategories.category" name="Category">
					<option value="" v-on:click="userFilterKey = 'all'">Category</option>
					<option v-for="choice in uniqueCategories" :key="choice.id" @click="onCategoryClick" :value="choice.category">
						{{ choice.category }}
					</option>
				</select> -->
      </div>

      <div id="sort-services">
        <h4 id="sort-services-heading">sort</h4>
        <!-- <h5 id="sort-services-type" @click="sortClick">Ascending</h5> -->
      </div>
    </header>

    <main class="container">
      <template v-if="services">
        <ServicesGrid />
      </template>
      <h2 v-else>No services</h2>

      <!-- <pre>
      {{servicesList}}</pre> -->
    </main>
  </MainLayout>
</template>
<script lang="ts" setup>

const { data: services } = await useFetch('/api/services')

if (services) {
  console.log(services.value)
} else {
  console.log('services data is null')
}
</script>


<style>
header.container {
  border-bottom: 2px solid var(--color-border);
}

.container {
  padding: 1em;
}

@media (min-width: 550px) {}
</style>

