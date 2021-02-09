<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form @submit.prevent="handleSubmit">
          <fieldset>
            <fieldset class="form-group">
                <input v-model="article.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
            </fieldset>
            <fieldset class="form-group">
                <input v-model="article.description" type="text" class="form-control" placeholder="What's this article about?">
            </fieldset>
            <fieldset class="form-group">
                <textarea v-model="article.body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input v-model="article.tagList" type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import { createArticles, updateArticles } from '@/api/article'
import { getArticle } from '@/api/article'


export default {
  name: "editor",
  middleware: 'auth',
  data() {
    return {
      article: {
        "title": "",
        "description": "",
        "body": "",
        "tagList": ''
      }
    }
  },
  async mounted() {
    if (this.$route.params && this.$route.params.slug) {
      const { data } = await getArticle(this.$route.params.slug)
      const { article } = data
      // const md = new MarkdownIt()
      // article.body = md.render(article.body)

      const {
        title,
        description,
        body,
        tagList
      } = article
      
      this.article = {
        title,
        description,
        body,
        tagList: '',
        prevTagList: tagList
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const { data } = await createArticles({
          article: {
            ...this.article,
            tagList: [this.article.tagList].concat(this.article.prevTagList || [])
          }
        })

        this.$router.push(`/article/${data.article.slug}`)

      } catch(err) {
        conosle.error(err)
      }
    }
  }
}
</script>

<style>

</style>