import { createI18n } from "vue-i18n";
import en from "./en/index";
import zhCN from "./zh-CN/index";
import zhTW from "./zh-TW/index";
import type { App } from "vue";

const messages = { en, zhCN, zhTW };

const localeData = {
  globalInjection: true,
  legacy: false,
  locale: "zhCN",
  fallbackLocale: "zhCN", // 回滚语言
  messages,
};

const i18n = createI18n(localeData);
export default i18n;
