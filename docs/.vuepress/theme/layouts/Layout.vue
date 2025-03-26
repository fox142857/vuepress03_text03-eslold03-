<script setup>
import { usePageData } from '@vuepress/client'
import { computed } from 'vue'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

const page = usePageData()
const frontmatter = computed(() => page.value.frontmatter)
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="global-footer">
        <p>MIT Licensed | Copyright © 2024-present Gardenia</p>
      </div>
    </template>
  </ParentLayout>
</template>

<style>
.global-footer {
  padding: 2rem;
  border-top: 1px solid var(--c-border);
  text-align: center;
  color: var(--c-text);
  background-color: var(--c-bg);
  margin-top: 2rem;
}
</style> 