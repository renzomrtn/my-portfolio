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
      
      <img :src="project.image" :alt="project.title" class="img-fluid my-4 rounded">
      
      <!-- Project Meta Info -->
      <div class="row mb-4">
        <div class="col-md-4" v-if="project.client">
          <strong>Client:</strong> {{ project.client }}
        </div>
        <div class="col-md-4" v-if="project.team">
          <strong>Team:</strong> {{ project.team }}
        </div>
        <div class="col-md-4" v-if="project.date">
          <strong>Date:</strong> {{ new Date(project.date).toLocaleDateString() }}
        </div>
        <div class="col-md-4" v-if="project.link">
          <strong>Link:</strong> 
          <a :href="project.link" target="_blank" rel="noopener">
            {{ project.link }}
          </a>
        </div>
      </div>

      <!-- Technologies -->
      <div class="mb-4" v-if="project.technologies && project.technologies.length">
        <strong>Technologies:</strong>
        <div class="mt-2">
          <span 
            v-for="tech in project.technologies" 
            :key="tech" 
            class="badge bg-primary me-2"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Description -->
      <div class="project-content">
        <ContentRenderer :value="project" />
      </div>
      
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

.project-content {
  line-height: 1.8;
  font-size: 1.1rem;
}
</style>