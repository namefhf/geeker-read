<template>
  <footer class="footer-index">
    <p>
      © 2020 极客阅读(
      <a
        href="https://www.yuque.com/docs/share/e46891ae-5f9a-442a-9d03-a943a4882b86?#"
        class="link-hover title-primary"
      >
        v1.9.6
      </a>
      )
    </p>
    <div>
      <span>
        <a
          href="http://apk.upyun.devhub.top/geeker-read-1.0.9.apk"
          class="link-hover title-primary"
        >
          手机App
        </a>
      </span>
      &nbsp;&nbsp;•&nbsp;&nbsp;
      <span>
        <a
          href="https://www.yuque.com/books/share/8cc684ae-4d87-483b-82e5-5128e32d4cef?#"
          class="link-hover title-primary"
        >
          周刊
        </a>
      </span>
      &nbsp;&nbsp;•&nbsp;&nbsp;
      <span>
        <a href="" class="link-hover title-primary">公众号</a>
      </span>
      &nbsp;&nbsp;•&nbsp;&nbsp;
      <span>
        <a
          href="https://www.yuque.com/docs/share/bbbc3bc2-351f-4ba0-a7af-f87441e10cd1?#"
          class="link-hover title-primary"
        >
          意见反馈
        </a>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterIndex',
}
</script>

<style lang="scss" scoped>
footer {
  background-color: rgb(255, 255, 255);
  border-top: 1px solid rgb(223, 225, 229);
  margin-top: 20px;
  padding: 24px 0;
  text-align: center;
  p {
    margin-bottom: 8px;
  }
  div,
  p {
    font-size: 0.875rem;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue,
      PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.43;
  }
}
</style>
