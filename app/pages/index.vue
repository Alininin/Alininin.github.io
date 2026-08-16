<!-- app/pages/index.vue -->
<template>
  <main class="home-page">
    <h1>I'm Alininin</h1>
    <div class="badge-wrap">
      <a href="https://github.com/Alininin">
        <img src="https://img.shields.io/badge/GitHub-Profile-24292f?logo=github" alt="GitHub Profile" />
      </a>
      <a href="https://github.com/Alininin/Alininin.github.io">
        <!-- `%E5%8D%9A%E5%AE%A2` 为 博客 转义 -->
        <img src="https://img.shields.io/badge/%E5%8D%9A%E5%AE%A2-sourcecode-8c36db" alt="Website" />
      </a>
      <a href="https://alininin.github.io/docs/">
        <img src="https://img.shields.io/badge/Docs‑Blog-Document-3498db" alt="Docs Blog" />
      </a>
      <img src="https://komarev.com/ghpvc/?username=Alininin&label=Views&color=orange&style=flat" alt="访问量统计" />
    </div>
    <div class="spacer"></div>
    <p>Welcome to my homepage <a href="https://alininin.github.io/">https://alininin.github.io/</a></p>
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