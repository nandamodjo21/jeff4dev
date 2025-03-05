<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed } from "vue";

const scrollPosition = ref(0);
const isVisible = ref(false);

// Mengembalikan nilai scroll dalam persen (computed agar reactive)
const scrollPercent = computed(() => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentValue = Math.min((scrollPosition.value / maxScroll) * 100, 100);
  return `${scrollPercentValue}%`;
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  isVisible.value = scrollPosition.value > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div>
    <!-- Tombol Back to Top -->
    <div
        v-if="isVisible"
        class="fixed bottom-4 z-20 right-4 bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-xl cursor-pointer transition-opacity duration-300 hover:bg-primary"
        @click="scrollToTop"
    >
      ↑
    </div>

    <!-- Progress Bar Scroll -->
    <div
        class="fixed top-0 left-0 h-1 bg-primary transition-all duration-300 z-30"
        :style="{ width: scrollPercent }"
    ></div>
  </div>
</template>
