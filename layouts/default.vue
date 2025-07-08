<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <UHeader>
      <template #logo>
        <UIcon name="i-lucide-shield-check" class="w-8 h-8" />
        <span class="ml-2 text-xl font-bold">{{ $config.public.appName }}</span>
      </template>

      <template #right>
        <UColorModeButton />
      </template>
    </UHeader>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>

    <!-- Footer -->
    <UFooter>
      <template #left>
        <p class="text-sm text-gray-500">
          © 2025 {{ $config.public.appName }}. All rights reserved.
        </p>
      </template>
    </UFooter>
  </div>
</template>

<script setup>
const { $config } = useNuxtApp();
</script>
