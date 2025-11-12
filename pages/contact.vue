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
                        Don't be a creep.
                    </p>
                </div>
            </div>
        </section>
        
        <!-- Contact Form (Bootstrap + Netlify) -->
        <section class="container my-5">
            <div class="container">
                <h2 class="text-center mb-5">LET'S CONNECT</h2>
            </div>
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
                    <button type="submit" class="btn btn-light px-4">Send Message</button>
                </div>
            </form>
        </section>
    </div>
</template>


<style scoped>
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
</style>