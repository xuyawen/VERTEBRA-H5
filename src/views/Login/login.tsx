
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import "./login.less";


export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    
    const goLogin = () => {
      router.push("/");
    };
    return () => (
      <div>
        
  <h1>登录页</h1>
  vuex:{ store.state.num }
  <div>
    <van-button type="primary" onClick={goLogin}>跳转到首页</van-button>
  </div>
      </div>
    )
  }
});