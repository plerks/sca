<template>
  <v-container fluid>
    <v-card class="mx-auto">
      <v-card-text>
        <v-textarea
          filled
          counter
          clearable
          :label="label"
          v-model="codeSnippet"
          spellcheck="false"
          rows="20"
        ></v-textarea>
        <div class="row-item-center">
          <v-btn color="blue" @click="showResult" plain>Submit </v-btn>
          <v-btn color="blue" @click="update" plain>Submit </v-btn>
        </div>
        <transition
            name="fade-in"
            @enter="enter"
            @leave="leave"
        >
          <div v-if="hasResult">
            <div>Word of the Day</div>
            <p class="text-h4 text--primary">be•nev•o•lent</p>
            <p>adjective</p>
            <div class="text--primary">
              well meaning and kindly.<br />
              "a benevolent smile"
            </div>
            <v-card-actions>
              <v-btn text color="deep-purple accent-4"> Learn More </v-btn>
            </v-card-actions>
          </div>
        </transition>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'
import { provide } from 'vue';
export default {
  data() {
    return {
      codeSnippet: "",
      hasResult: false,
      tags: "default tag",
      hello: 'hello'
    };
  },
  computed: {
    label: function () {
      return this.codeSnippet == "" ? "Please input your code snippet" : "";
    },
  },
  methods: {
    showResult: function () {
      this.hasResult = !this.hasResult;
    },
    enter(el) {
      let expandedHeight = window.getComputedStyle(el).height
      el.style.height = '0px'
      el.offsetHeight // 触发浏览器回流
      el.style.height = expandedHeight // 要展开不能设置height为auto，不会出动画，所以要先获得固定值的高度
    },
    leave (el) {
      el.offsetHeight // 触发浏览器回流
      el.style.height = '0px'
    },
    update () {
      console.log(this.hello);
    }
  },
  // 用这个变量定义查询
  apollo: {
      // 查询接口,表示要retrieve tags
      ping() {
        return {
          // 定义查询结构
          query: gql`query PingMessage($message: String!) {
            ping(message: $message)
          }`,
          // 定义查询参数
          variables: {
            message: 'Meow',
          },
        }
      }
  },
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
