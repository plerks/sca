<template>
  <v-container fluid>
    <v-card class="mx-auto">
      <v-card-text>
        <v-textarea
          filled
          counter
          clearable
          :label="label"
          v-model="snippet"
          spellcheck="false"
          rows="30"
        ></v-textarea>
        <div class="row-item-center">
          <v-btn color="blue" @click="update" plain>Submit </v-btn>
        </div>
        <transition name="fade-in" @enter="enter" @leave="leave">
          <div>
            <div v-for="(value, key, i) in result" :key="i">
              <v-alert color="info" :title="key" variant="contained-text">
                <div>
                  {{ value }}
                </div>
              </v-alert>
            </div>
          </div>
        </transition>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
import jsonPath from "jsonpath";

const QUERY_SNIPPET = gql`
  query ($snippet: String!) {
    querySnippet(snippet: $snippet)
  }
`;
export default {
  data() {
    return {
      snippet: "",
      result: [],
    };
  },
  computed: {
    label: function () {
      return this.snippet == "" ? "Please input your code snippet" : "";
    },
    hasResult: function () {
      return this.snippet == "";
    },
  },
  methods: {
    enter(el) {
      let expandedHeight = window.getComputedStyle(el).height;
      el.style.height = "0px";
      el.offsetHeight; // 触发浏览器回流
      el.style.height = expandedHeight; // 要展开不能设置height为auto，不会出动画，所以要先获得固定值的高度
    },
    leave(el) {
      el.offsetHeight; // 触发浏览器回流
      el.style.height = "0px";
    },
    update() {
      let res = this.$apollo
        .query({
          query: QUERY_SNIPPET,
          variables: { snippet: this.snippet },
        })
        .then(({ data }) => {
          //console.log("result: "+JSON.stringify(this.result))
          this.result = jsonPath.query(
            JSON.parse(data.querySnippet),
            "$.*"
          )[0][0];
          //console.log(this.result)
        });
    },
  },
  // 用这个变量定义查询
  // apollo() {
  //   return {
  //     // 查询接口
  //     querySnippet() {
  //       return {
  //         // 定义查询结构
  //         query: gql`query querySnippet($snippet: String!) {
  //           querySnippet(snippet: $snippet)
  //         }`,
  //         // 定义查询参数
  //         variables() {
  //           return {
  //             snippet: this.snippet
  //           }
  //         },
  //         skip() {
  //           // snippet为""不触发查询,避免一开始就查询
  //           return this.snippet == ""
  //         }
  //       }
  //     }
  //   }

  // },
};
</script>

<style scoped>
.row-item-center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.fade-in-enter-active {
  transition: all 1s ease;
}
.fade-in-enter-from {
  opacity: 0;
}
.fade-in-enter-to {
  opacity: 1;
}
.fade-in-leave-active {
  transition: all 1s ease;
}
.fade-in-leave-from {
  opacity: 1;
}
.fade-in-leave-to {
  opacity: 0;
}
</style>
