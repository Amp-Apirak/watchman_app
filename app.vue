<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup>
// Global meta tags
useHead({
  title: 'New Watchman',
  meta: [
    { name: 'description', content: 'A modern watchman application built with Nuxt 3 and UI Pro' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})

// Global SEO
useSeoMeta({
  title: 'New Watchman',
  ogTitle: 'New Watchman',
  description: 'A modern watchman application built with Nuxt 3 and UI Pro',
  ogDescription: 'A modern watchman application built with Nuxt 3 and UI Pro',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image'
})
</script>