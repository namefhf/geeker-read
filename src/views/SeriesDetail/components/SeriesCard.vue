<template>
  <div class="series-card">
    <div
      class="img"
      :style="
        `background-image: url('https://geeker-cdn.devhub.top/cover/${cardInfo.cover_full}'); `
      "
    ></div>
    <div class="content">
      <h1
        style="color: rgb(23, 43, 77); padding: 0px 1.5rem 1rem; font-weight: bold;"
      >
        {{ cardInfo.name }}
      </h1>
      <p
        style="color: rgb(66, 82, 110); padding: 0px 1.5rem; line-height: 1.5rem;"
      >
        {{ cardInfo.summary }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SeriesCard',
  props: {
    cardInfo: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.series-card {
  border-radius: 20px;
  background-color: rgb(244, 245, 247);
  overflow: hidden;
  border-width: 2px 8px 8px 2px;
  border-style: solid;
  border-color: rgb(223, 225, 229);
  margin-bottom: 24px;
  .img {
    background-color: rgb(51, 51, 51);
    background-size: cover;
    background-position: center center;
    height: 250px;
    @media (max-width: 599.95px) {
      height: 180px !important;
    }
  }
  .content {
    padding: 16px 0;
    h1 {
      color: rgb(23, 43, 77);
      padding: 0px 1.5rem 1rem;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1.3;
    }
    p {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.43;
      color: rgb(66, 82, 110);
      padding: 0px 1.5rem;
    }
  }
}
</style>
