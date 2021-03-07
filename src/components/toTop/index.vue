<template>
  <div class="toTop" @click="handleClick" v-show="flag">
    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ToTop',
  data() {
    return {
      flag: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.debounce(this.handleScroll, 300))
  },
  methods: {
    handleClick() {
      // document.body.scrollIntoView({ behavior: 'smooth' })
      document.querySelector('header').scrollIntoView({ behavior: 'smooth' })
    },
    handleScroll() {
      let scroll_top = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop
      } else if (document.body) {
        scroll_top = document.body.scrollTop
      }
      // console.log(scroll_top)
      if (scroll_top > 3000) {
        this.flag = true
      } else {
        this.flag = false
      }
    },
    debounce(fn, delay) {
      let timer = null
      return function() {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function() {
          fn.apply(context, args)
        }, delay)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.toTop {
  position: fixed;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgb(122, 134, 154);
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  // animation: toTopBtn 0.8s ease;
  svg {
    fill: white;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
  }
}
// @keyframes toTopBtn {
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// }
</style>
