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
                    <p class="hero-text">
                        Currently a third year college student. I don't like programming that much. I think freshmen year ruined it for me. But you'll see me making either the most stupid and trash system for fun or a system that makes a difference in the community. I just like bringing ideas into reality.
                    </p>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="projects-section py-5">
            <div class="container">
                <h2 class="text-center mb-5">ABOUT ME</h2>

                <div class="">
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Fetch projects via API endpoint instead
const { data: projects, error } = await useFetch('/api/projects')
</script>