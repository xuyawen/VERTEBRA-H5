import {Button} from 'vant'
const ant = {
  install(Vue: {
    component: (name: string, instance: any) => void;
  }) {
    Vue.component(Button.name, Button);
   
  }
};
export default ant;
