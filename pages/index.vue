<template>
  <div class="space-y-8">
    <!-- Hero Section -->
    <UCard class="p-8">
      <div class="text-center">
        <UIcon
          name="i-lucide-shield-check"
          class="w-16 h-16 mx-auto mb-4 text-primary-500"
        />
        <h1 class="text-4xl font-bold mb-4">
          Welcome to {{ $config.public.appName }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
          A modern watchman application built with Nuxt 3 and UI Pro
        </p>
        <div class="flex justify-center gap-4">
          <UButton size="lg" icon="i-lucide-play"> Get Started </UButton>
          <UButton size="lg" variant="outline" icon="i-lucide-book-open">
            Documentation
          </UButton>
        </div>
      </div>
    </UCard>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <UCard v-for="feature in features" :key="feature.title" class="p-6">
        <div class="text-center">
          <UIcon
            :name="feature.icon"
            class="w-12 h-12 mx-auto mb-4 text-primary-500"
          />
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ feature.description }}
          </p>
        </div>
      </UCard>
    </div>

    <!-- Stats Section -->
    <UCard class="p-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-3xl font-bold text-primary-600 mb-2">
            {{ stat.value }}
          </div>
          <div class="text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const { $config } = useNuxtApp();

// SEO
useHead({
  title: `Home - ${$config.public.appName}`,
});

// Features data
const features = [
  {
    title: "Modern UI",
    description:
      "Built with Nuxt UI Pro components for a beautiful and consistent design",
    icon: "i-lucide-palette",
  },
  {
    title: "TypeScript",
    description: "Full TypeScript support for better development experience",
    icon: "i-lucide-code",
  },
  {
    title: "Responsive",
    description: "Fully responsive design that works on all devices",
    icon: "i-lucide-smartphone",
  },
];

// Stats data
const stats = [
  { label: "Active Users", value: "1,234" },
  { label: "Projects", value: "56" },
  { label: "Reports", value: "789" },
  { label: "Uptime", value: "99.9%" },
];
</script>
