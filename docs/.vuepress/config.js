import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

import navbar from "./navbar";

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'Gardenia',

    description: 'The application documentation website of gardenia.',

    head: [
        // 站点图标
        ["link", { rel: "icon", href: "/ico/logo.svg" }],

        // SEO
        [
            "meta",
            {
                name: "keywords",
                content:
                "程序员, Java, 大学生"
            },
        ],

        // 百度统计
        [
            "script",
            {},
            `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
          `,
        ],
    ],
    
    plugins: [
        // https://github.com/tolking/vuepress-plugin-img-lazy
        ["img-lazy"],

        // https://github.com/znicholasbrown/vuepress-plugin-code-copy
        [
            "vuepress-plugin-code-copy",
            {
                successText: "代码已复制",
            },
        ],
    ],
    
    bundler: viteBundler(),

    theme: defaultTheme({
        logo: '/ico/logo.svg',
        
        navbar,
    }),
})