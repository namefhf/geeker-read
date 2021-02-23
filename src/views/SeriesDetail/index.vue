<template>
  <div class="series-detail">
    <el-row :gutter="20">
      <el-col :sm="16">
        <series-card :cardInfo="cardInfo" />
        <video-list :list="list" />
      </el-col>
      <el-col :sm="8" class="hidden-xs-only">
        <official-list />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getSeries } from '../../api/article'
import OfficialList from '../../components/official-list'
import SeriesCard from './components/SeriesCard.vue'
import VideoList from './components/VideoList.vue'

export default {
  name: 'SeriesDetail',
  components: {
    OfficialList,
    SeriesCard,
    VideoList,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      list: [],
      cardInfo: {},
    }
  },
  watch: {
    $route(newValue, oldValue) {
      // console.log('route changed')
      this.getData()
    },
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const {
        data: {
          data: { articles: artileLists },
          data,
        },
      } = await getSeries(this.id)
      const { articles, ...obj } = data
      //   console.log(obj)
      this.cardInfo = obj
      // console.log(artileLists)
      this.list = artileLists
    },
  },
}
</script>

<style lang="scss" scoped></style>
