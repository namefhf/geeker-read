import { like } from '../api/article'
const likeOperate = {
  methods: {
    async handleLike(item) {
      try {
        const { data } = await like(item._id)

        if (item.isLiked) {
          item.likeCount--
        } else {
          item.likeCount++
        }
        item.isLiked = !item.isLiked
      } catch (error) {}
    },
  },
}
export default likeOperate
