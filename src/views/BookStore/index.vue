<template>
  <div class="bookstore-index">
    <el-row :gutter="20">
      <el-col :sm="16">
        <book-list :list="list" />
      </el-col>
      <el-col :sm="8" class="hidden-xs-only">
        <official-list />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getBooks } from '../../api/article'
import OfficialList from '../../components/official-list'
import BookList from './components/BookList'

export default {
  name: 'BookStore',
  components: {
    OfficialList,
    BookList,
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const {
        data: { data },
      } = await getBooks()
      //   console.log(data)
      this.list = data
    },
  },
}
</script>

<style lang="scss" scoped></style>
