<script setup>
import { usePageFrontmatter } from '@vuepress/client'

const frontmatter = usePageFrontmatter()
</script>

<template>
  <main class="home">
    <header class="hero">
      <img v-if="frontmatter.heroImage" :src="frontmatter.heroImage" :alt="frontmatter.heroAlt" class="hero-image">
      <h1 v-if="frontmatter.heroText" id="main-title">{{ frontmatter.heroText }}</h1>
      <p v-if="frontmatter.tagline" class="description">{{ frontmatter.tagline }}</p>
      <p v-if="frontmatter.actions" class="actions">
        <a v-for="action in frontmatter.actions" :key="action.text" :href="action.link" class="action-button" :class="[action.type]">
          {{ action.text }}
        </a>
      </p>
    </header>

    <div v-if="frontmatter.features" class="features">
      <div v-for="feature in frontmatter.features" :key="feature.title" class="feature">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>

    <div class="theme-default-content custom">
      <Content />
    </div>

    <div v-if="frontmatter.footer" class="footer">
      {{ frontmatter.footer }}
    </div>
  </main>
</template>

<style scoped>
.home {
  padding: var(--navbar-height) 2rem 0;
  max-width: var(--homepage-width);
  margin: 0px auto;
  display: block;
}

.hero {
  text-align: center;
}

.hero-image {
  max-width: 100%;
  max-height: 280px;
  display: block;
  margin: 3rem auto 1.5rem;
}

#main-title {
  font-size: 3rem;
}

.description {
  max-width: 35rem;
  font-size: 1.6rem;
  line-height: 1.3;
  color: var(--c-text-lightest);
  margin: 1.8rem auto;
}

.action-button {
  display: inline-block;
  font-size: 1.2rem;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  text-decoration: none;
  margin: 0.5rem;
}

.action-button.primary {
  color: var(--c-bg);
  background-color: var(--c-brand);
}

.action-button.primary:hover {
  background-color: var(--c-brand-light);
}

.action-button.secondary {
  color: var(--c-brand);
  background-color: var(--c-bg);
  border-color: var(--c-brand);
}

.action-button.secondary:hover {
  color: var(--c-brand-light);
  border-color: var(--c-brand-light);
}

.features {
  border-top: 1px solid var(--c-border);
  padding: 1.2rem 0;
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
  justify-content: space-between;
}

.feature {
  flex-grow: 1;
  flex-basis: 30%;
  max-width: 30%;
  text-align: center;
  padding: 1rem;
}

.feature h2 {
  font-size: 1.4rem;
  font-weight: 500;
  border-bottom: none;
  padding-bottom: 0;
  color: var(--c-text-light);
}

.feature p {
  color: var(--c-text-lighter);
}

.footer {
  padding: 2.5rem;
  border-top: 1px solid var(--c-border);
  text-align: center;
  color: var(--c-text-lighter);
}

@media (max-width: 719px) {
  .features {
    flex-direction: column;
  }

  .feature {
    max-width: 100%;
    padding: 0 2.5rem;
  }
}

@media (max-width: 419px) {
  .hero-image {
    max-height: 210px;
    margin: 2rem auto 1.2rem;
  }

  #main-title {
    font-size: 2rem;
  }

  .description {
    font-size: 1.2rem;
  }

  .action-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }

  .feature h2 {
    font-size: 1.25rem;
  }
}
</style>