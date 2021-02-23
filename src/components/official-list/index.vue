<template>
  <div class="official-list" v-if="timelineList.length">
    <div class="head">
      <p>官方微博</p>
      <button class="btn-root">
        <a href="https://www.weibo.com/u/7447468124" target="_blank">
          访问微博
        </a>
      </button>
    </div>
    <div class="content">
      <template v-for="(item, index) in timelineList">
        <offcial-list-item :item="item" :key="index" />
      </template>
    </div>
  </div>
</template>

<script>
import { getTimeline } from '../../api/tweet'
import OffcialListItem from './official-list-item'
export default {
  name: 'OfficialList',
  components: {
    OffcialListItem,
  },
  data() {
    return {
      timelineList: [],
    }
  },
  created() {
    this.getDate()
  },
  methods: {
    async getDate() {
      const {
        data: { data },
      } = await getTimeline({ id: 7447468124, limit: 8 })
      // console.log(data)
      this.timelineList = data
    },
  },
}
</script>

<style lang="scss" scoped>
.official-list {
  box-shadow: 0px 0px 0px 1px #344563;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
}
.head {
  padding: 8px 16px;
  display: flex;
  background-color: #344563;
  justify-content: space-between;
  align-items: center;
  p {
    color: rgb(255, 255, 255);
    font-weight: bold;
  }
  button {
    min-width: 64px;
    padding: 4px 10px;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    cursor: pointer;
    background-color: rgb(9, 30, 66);

    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    a {
      color: rgb(255, 255, 255);
    }
  }
}
// .content {
// }
</style>
