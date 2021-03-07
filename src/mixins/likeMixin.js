import { like } from '../api/article'
import { hasUser } from '@/utils/tools'
const likeOperate = {
  methods: {
    async handleLike(item) {
      const flag = hasUser()
      if (!flag) {
        this.$router.push('/signin')
        return
      }
      try {
        const { data } = await like(item._id)

        if (item.isLiked) {
          item.likeCount--
        } else {
          item.likeCount++
        }
        item.isLiked = !item.isLiked
      } catch (error) {}
    }
  }
}
export default likeOperate
