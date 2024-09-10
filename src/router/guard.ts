import router from "./index";
import NProgress from "../utils/progress";

/**前置守卫 */
router.beforeEach((to, from) => {
  NProgress.start();
  return true
});
/**后置守卫 */
router.afterEach((to, from) => {
  NProgress.done();
  // console.log({ to, from });
});
