<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">
          <div class="logo-badge">logo</div>
        </NuxtLink>
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container my-5" v-if="project">
      <h1>{{ project.title }}</h1>
      <img :src="project.image" :alt="project.title" class="img-fluid my-4">
      <ContentRenderer :value="project" />
      <NuxtLink to="/" class="btn btn-primary mt-4">Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const { data: project } = await useAsyncData('project', () => {
  return queryContent('projects', route.params.slug).findOne()
})
</script>

<style scoped>
.logo-badge {
  background-color: #ff9999;
  color: #fff;
  padding: 8px 16px;
  border-radius: 50%;
  font-weight: bold;
}
</style>