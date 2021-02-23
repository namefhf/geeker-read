<template>
  <div class="series-index">
    <el-row :gutter="20">
      <el-col :sm="16">
        <series-item />
      </el-col>
      <el-col :sm="8" class="hidden-xs-only">
        <official-list />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OfficialList from '../../components/official-list'
import SeriesItem from './components/SeriesItem.vue'

export default {
  name: 'SeriesIndex',
  components: {
    OfficialList,
    SeriesItem,
  },
}
</script>

<style lang="scss" scoped></style>
