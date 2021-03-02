
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { article } from "@/api/index";
import "./home.less";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const goLogin = () => {
      router.push("/login");
    };
    const add = () => {
      store.commit("addNum");
      state.num = store.state.num;
      state.num > 20 ? (state.color = "pink") : (state.color = "#ccc");
    };
    article().then((res: any) => {
      console.log(res);
    });
    const state = reactive({
      name: "霍庆祝",
      num: 10,
      color: "#ccc",
    });
    return () => (
      <div>
        <h1 class="text">我是首页</h1>
          vuex:{ store.state.num}
        <button onClick={add}>++</button>
          { state.name}
          { state.num}
        <div class="login">
          <van-button type="primary" onClick={goLogin}>跳转登录页</van-button>
        </div>
      </div>
    )
  }
});
