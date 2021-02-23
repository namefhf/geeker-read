<template>
  <div class="book-list">
    <template v-if="list.length">
      <book-item v-for="(item, index) in list" :key="index" :item="item" />
    </template>
    <template v-else>
      <skeleton-item v-for="(item, index) in 5" :key="index" />
    </template>
  </div>
</template>

<script>
import BookItem from './BookItem'
import SkeletonItem from './SkeletonItem'
export default {
  name: 'BookList',
  components: {
    BookItem,
    SkeletonItem,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.book-list {
  border: 1px solid rgb(223, 225, 230);
  border-radius: 8px;
  overflow: hidden;
}
</style>
