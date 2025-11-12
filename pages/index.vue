<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="/images/webpage/logo.png" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="about">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay">
        <div class="container text-center">
          <h1 class="hero-title">Renzomrtn</h1>
          <p class="hero-text">
            Design  •  Web Development  •  App Development  •  Cybersecurity  •  Photography  •  Networking
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects-section">
      <div class="project-container">
        <h2 class="text-center mb-5">PROJECTS</h2>
        <div class="row g-4" v-if="projects && projects.length">
          <div v-for="project in projects" :key="project._id" class="col-md-3 col-lg-6">
            <NuxtLink :to="project._path" class="project-card">
              <img :src="project.image" :alt="project.title" class="img-fluid">

              <!-- Overlay -->
              <div class="overlay d-flex justify-content-center align-items-center">
                <h3 class="overlay-title">{{ project.title }}</h3>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="text-center" v-else>
          <p>Loading projects...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// This should work in both dev and production
const { data: projects } = await useAsyncData('projects', () => 
  queryContent('projects')
    .sort({ date: -1 })
    .find()
)
/*
console.log('Projects:', projects.value)
// Check what _path looks like
if (projects.value) {
  console.log('First project path:', projects.value[0]?._path)
}*/
</script>

<style scoped>
.projects-section {
  background: url('/images/webpage/hs.jpg') no-repeat center center;
}

.project-container {
  max-width: 1300px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
  /* -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); */
  padding: 2rem;
}

.projects-section h2 {
    font-weight: bold;
    letter-spacing: 2px;
}

.project-card {
  display: block;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease;
  text-decoration: none;
  position: relative;
}

.project-card:hover {
  transform: translateY(-10px);
}

/* Image */
.project-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.3s ease;
}

/* Overlay setup */
.project-card .overlay {
  position: absolute;
  inset: 0; /* top:0; right:0; bottom:0; left:0 */
  background-color: rgba(255, 255, 255, 0.85);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 8px;
}

/* Text on overlay */
.project-card .overlay-title {
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease 0.1s;
}

/* Hover reveal */
.project-card:hover .overlay {
  opacity: 1;
}

.project-card:hover .overlay-title {
  opacity: 1;
}

</style>
<style>
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 0;
    /* No gaps */
    width: 99vw;
    /* Full width of viewport */
    margin-left: 50%;
    transform: translateX(-50%);
    /* Cancels parent container centering */
}

.project-grid img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    /* Remove image whitespace */
}
</style>