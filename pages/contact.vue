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
                            <a class="nav-link" href="about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact">Contact</a>
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
                        Don't be a creep.
                    </p>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="projects-section py-5">
            <div class="container">
                <h2 class="text-center mb-5">LET'S CONNECT</h2>

                <div class="">
                </div>
            </div>
        </section>

        <!-- Contact Form (Bootstrap + Netlify) -->
        <section class="container my-5">
            <form name="contact" method="POST" data-netlify="true" class="needs-validation" novalidate>
                <!-- Netlify hidden input -->
                <input type="hidden" name="form-name" value="contact">

                <div class="mb-3">
                    <label for="name" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Your name" required>
                    <div class="invalid-feedback">Please enter your name.</div>
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="your@email.com"
                        required>
                    <div class="invalid-feedback">Please enter a valid email address.</div>
                </div>

                <div class="mb-3">
                    <label for="subject" class="form-label">Subject</label>
                    <input type="text" class="form-control" id="subject" name="subject" placeholder="Subject" required>
                    <div class="invalid-feedback">Please enter a subject.</div>
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" name="message" rows="5" placeholder="Your message..."
                        required></textarea>
                    <div class="invalid-feedback">Please enter your message.</div>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary px-4">Send Message</button>
                </div>
            </form>
        </section>
    </div>
</template>

<!-- Optional: Bootstrap client-side validation -->
<script>
  (() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()
</script>


<style scoped>
.navbar-brand img {
    width: 50px;
    height: 50px;
    border-radius: 20%;
    font-weight: bold;
}

.hero-section {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        url('/images/webpage/contactbanner.png');
    background-size: cover;
    background-position: center;
    min-height: 500px;
    display: flex;
    align-items: center;
    color: white;
}

.hero-overlay {
    width: 100%;
    padding: 80px 0;
}

.hero-text {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
}

.navbar-nav {
    gap: 50px;
}

.nav-link {
    font-size: 1.1rem;
    font-weight: 500;
}
</style>