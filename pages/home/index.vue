<template>
  <div>
    <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <nuxt-link class="nav-link"
                exact
                :class="{
                  active: tab === 'your_feed'
                }"
                :to="{
                  name: 'home',
                  query: {
                    tab: 'your_feed'
                  }
                }"
              >Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link"
                exact
                :class="{
                  active: tab === 'global_feed'
                }"
                :to="{
                  name: 'home'
                }"
              >Global Feed</nuxt-link>
            </li>
            <li v-if="tag" class="nav-item">
              <nuxt-link class="nav-link"
                exact
                :class="{
                  active: tab === 'tag'
                }"
                :to="{
                  name: 'home',
                  query: {
                    tag,
                    tab: 'tag'
                  }
                }"
              ># {{tag}}</nuxt-link>
            </li>
          </ul>
        </div>

        <div v-for="item in articles" :key="item.slug" class="article-preview">
          <div class="article-meta">
            <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: item.author.username
                }
              }"><img :src="item.author.image" /></nuxt-link>
            <div class="info">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: item.author.username
                }
              }" class="author">{{item.author.username}}</nuxt-link>
              <span class="date">{{ item.createdAt | date('MMM DD, YYYY') }}</span>
            </div>
            <button
              @click="onFavorite(item)"
              class="btn btn-outline-primary btn-sm pull-xs-right"
              :class="{
                active: item.favorited
              }"
              :disabled="item.favoriteDisabled"
            >
              <i class="ion-heart"></i> {{item.favoritesCount}}
            </button>
          </div>
          <nuxt-link :to="{
            name: 'article',
            params: {
              slug: item.slug
            }
          }" class="preview-link">
            <h1>{{item.title}}</h1>
            <p>{{item.description}}</p>
            <span>Read more...</span>
          </nuxt-link>
        </div>

        <!-- 分页列表 -->
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                :class="{
                  active: item === page
                }"
                v-for="item in totalCount"
                :key="item"
              >
                <nuxt-link
                  class="page-link"
                  :to="{
                    name: 'home',
                    query: {
                      page: item,
                      tag: $route.query.tag,
                      tab: tab
                    }
                  }"
                >{{ item }}</nuxt-link>
              </li>
            </ul>
          </nav>
          <!-- /分页列表 -->
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link v-for="item in tags" :key="item" :to="{
              name: 'home',
              query: {
                tab: 'tag',
                tag: item
              }
            }" class="tag-pill tag-default">{{item}}</nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
  </div>
</template>

<script>
import { getArticles, getFeedArticles,addFavorite,
  deleteFavorite } from '@/api/article'
import { getTags } from '@/api/tag'

export default {
  name: 'home',
  // 在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用
  // 返回的数据融合组件 data 方法返回的数据一并返回给当前组件
  async asyncData({ query }) {
    const tab = query.tab || 'global_feed';
    const tag = query.tag
    const page = Number.parseInt(query.page|| 1)
    const limit = 5

    const request = tab === 'global_feed' ? getArticles : getFeedArticles;
    const [{ data = {} }, tagRes] = await Promise.all([
      request({
        limit,
        offset: (page - 1) * limit,
        tag
      }).then(res => res).catch(err => {
        console.error(err)
        process.client && alert('请登录');
        return Promise.resolve({})
      }),
      getTags()
    ])

    const { tags } = tagRes.data
    const {articles = [], articlesCount = 0} = data
    articles.forEach(article => article.favoriteDisabled = false)

    return {
      tab,
      limit,
      page,
      tag,
      tags,
      articles,
      articlesCount
    }
  },
  watchQuery: ['page', 'tab', 'tag'],
  computed: {
    totalCount() {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  methods: {
    async onFavorite(article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style>

</style>