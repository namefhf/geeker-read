<template>
  <div class="skeleton-item">
    <div class="pic"></div>
    <div class="info">
      <h2></h2>
      <div class="content"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkeletonItem',
}
</script>

<style lang="scss" scoped>
.skeleton-item {
  padding: 16px;
  display: flex;
  border-bottom: 1px solid #dfe1e6;
  .pic {
    flex-basis: 25%;
    height: 160px;
    background-color: rgba(0, 0, 0, 0.11);
    animation: skeleton 0.8s linear alternate infinite;
    @media screen and(max-width:960px) {
      display: none;
    }
  }
  .info {
    flex: 1;
    padding: 0 10px;
    h2 {
      background-color: rgba(0, 0, 0, 0.11);
      width: 80%;
      height: 20px;
      animation: skeleton 0.8s linear alternate infinite;
    }
    .content {
      background-color: rgba(0, 0, 0, 0.11);
      width: 90%;
      height: 100px;
      margin: 10px 0;
      animation: skeleton 0.8s linear alternate infinite;
    }
    .bottom {
      background-color: rgba(0, 0, 0, 0.11);
      width: 50%;
      height: 20px;
      margin: 10px 0;
      animation: skeleton 0.8s linear alternate infinite;
    }
  }
}
</style>
