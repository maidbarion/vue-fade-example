<template>
  <div class="banner">
    <transition name="fade" mode="out-in">
      <div :key="currentIndex" class="banner-slide">
        <img :src="slides[currentIndex]" alt="Banner Image" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
      ],
      currentIndex: 0,
      autoAdvanceInterval: 3000,
    };
  },
  watch: {
    currentIndex(newIndex) {
      this.autoAdvance(newIndex);
    },
  },
  created() {
    this.autoAdvance(this.currentIndex);
  },
  methods: {
    autoAdvance(currentIndex) {
      setTimeout(() => {
        this.currentIndex = (currentIndex + 1) % this.slides.length;
      }, this.autoAdvanceInterval);
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.banner-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>