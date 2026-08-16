<!-- app/pages/index.vue -->
<template>
  <main class="home-page">
    <h1>I'm Alininin</h1>
    <div class="badge-wrap">
      <a href="https://github.com/Alininin/Alininin.github.io">
        <img src="https://img.shields.io/badge/Website-博客-8c36db" alt="Website" />
      </a>
      <img src="https://komarev.com/ghpvc/?username=Alininin&label=Views&color=orange&style=flat" alt="访问量统计" />
    </div>
    <div class="spacer"></div>
    <p>Welcome to my GitHub Profile.</p>
    <ul>
      <li>AI major｜Slowly exploring the world of programming</li>
      <li>Learning Python, C++ and everything related to computer science</li>
      <li>Prefer quiet thinking and steady progress</li>
      <li>Open for gentle communication</li>
    </ul>
    <h2>Tech Stack</h2>
    <p>Python · C/C++ · JavaScript<br />Django · Mini Program · MySQL · Linux</p>
    <h2>About me</h2>
    <ul>
      <li>Enjoy quiet time when coding</li>
      <li>Pursue clean code and orderly logic</li>
      <li>Keep learning, take my time</li>
    </ul>
  </main>
</template>

<style scoped>
.home-page {
  max-width: 720px;
  margin: 4rem auto;
  padding: 0 1.5rem;
  color: #222;
}
.badge-wrap {
  margin: 1rem 0;
}
.badge-wrap img {
  margin-right: 0.75rem;
  vertical-align: middle;
}
.spacer {
  margin: 1.25rem 0;
}
h1,
h2 {
  color: #8c36db;
}
ul {
  padding-left: 1.5rem;
  line-height: 1.75;
}
</style>