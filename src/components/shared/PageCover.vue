<script setup lang="ts">
</script>
<template>
  <div class="card_page_cover">
    <div class=" flex items-center justify-between">
      <div class="card_page_cover_content">
        <h1 class="text-5xl text-light-100">
          Live
          <b class="text-secondary-300 fw-bold">
            Jobs
          </b>
        </h1>
        <h2 class="text-3xl text-light-100">
          Discover and Apply for
          <b class="text-secondary-300 fw-bold">
            Jobs
          </b>
        </h2>
      </div>
      <div class="card_page_cover_logo"></div>
    </div>
  </div>
</template>
<style scoped>
.card_page_cover {
  position: relative;
  background-color: #8c8c8c;
  background-image: linear-gradient(50deg, #3a434f, #5e6774, #404a58);
  background-size: content;
  background-position: right;
  background-repeat: no-repeat;
  height: 275px;
  display: flex;
}

.card_page_cover_logo {
  background-image: url("@assets/images/enata-light-sm.svg");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  height: 105%;
  width: 360px;
  padding: 1rem;
  opacity: 0.2;
  position: absolute;
  inset-inline-end: 0;
  top: 0;
}

.card_page_cover .card_page_cover_content {
  text-align: start;
  @apply enata-container;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>