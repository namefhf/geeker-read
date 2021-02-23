<template>
  <div class="hotfield">
    <p>
      热门领域：
    </p>
    <a href='/search/strict/topics:"前端,JavaScript,CSS" type:"video"'>
      <img
        src="https://geeker-cdn.devhub.top/assets/favicon_frontend.png"
        width="22"
        alt="favico"
      />
      前端（框架、CSS、JavaScript）
    </a>
    <a href='/search/strict/topics:"JavaScript" type:"video"'>
      <img
        src="https://geeker-cdn.devhub.top/assets/favicon_javascript.png"
        width="22"
        alt="favico"
      />
      JavaScript（ES6+、Node.js、Deno、TypeScript）
    </a>
    <a href='/search/strict/topics:"Node.js" type:"video"'>
      <img
        src="https://geeker-cdn.devhub.top/assets/favicon_nodejs.png"
        width="22"
        alt="favico"
      />
      Node.js
    </a>
    <a href='/search/strict/topics:"Java" type:"video"'>
      <img
        src="https://geeker-cdn.devhub.top/assets/favicon_java.png"
        width="22"
        alt="favico"
      />
      Java
    </a>
    <a href='/search/strict/topics:"架构" type:"video"'>
      <img
        src="https://geeker-cdn.devhub.top/assets/favicon_architecture.png"
        width="22"
        alt="favico"
      />
      架构
    </a>
    <a href='/search/strict/topics:"数据库" type:"video"'>
      <img
        src="https://geeker-cdn.devhub.top/assets/favicon_database.png"
        width="22"
        alt="favico"
      />
      数据库（关系型、NoSQL）
    </a>
    <a href='/search/strict/topics:"Conf" type:"video"'>
      技术大会（Conf）
    </a>
    <a href='/search/strict/topics:"人工智能,机器学习" type:"video"'>
      <img
        src="https://geeker-cdn.devhub.top/assets/favicon_ai.png"
        width="22"
        alt="favico"
      />
      人工智能
    </a>
    <a href='/search/strict/topics:"容器,Kubernetes" type:"video"'>
      <img
        src="https://geeker-cdn.devhub.top/assets/favicon_docker.png"
        width="22"
        alt="favico"
      />
      容器技术（Docker、Kubernetes）
    </a>
    <a href='/search/strict/topics:"科普" type:"video"'>科普</a>
    <a href='/search/strict/topics:"云计算" type:"video"'>云计算</a>
    <a href='/search/strict/topics:"测试" type:"video"'>测试</a>
    <a href='/search/strict/topics:"安全" type:"video"'>
      <img
        src="https://geeker-cdn.devhub.top/assets/favicon_secure.png"
        width="22"
        alt="favico"
      />
      安全
    </a>
    <a href='/search/strict/topics:"移动开发" type:"video"'>
      移动开发（安卓、iOS、Flutter、Swift、Kotlin）
    </a>
  </div>
</template>

<script>
export default {
  name: 'HotField',
}
</script>

<style lang="scss" scoped>
.hotfield {
  padding: 28px 12px;
  background-color: #f4f5f7;
  p {
    color: #42526e;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }
  a {
    color: #42526e;
    margin: 0.5rem 0;
    display: inline-block;
    margin-right: 20px;
    &:hover {
      background-size: 100% 210%;
      text-decoration: none;
      background-image: linear-gradient(
        transparent 0%,
        transparent calc(50% - 9px),
        #ffc400 calc(50% - 9px),
        #ffc400 100%
      );
    }
    img {
      margin-right: 4px;
      vertical-align: bottom;
    }
  }
}
</style>
