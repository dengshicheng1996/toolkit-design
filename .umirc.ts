import { defineConfig } from 'dumi';

const componentMenus = [
  {
    title: '导航',
    children: [
      'Badge',
      'GuideModal',
      'HorizontalScrollbar',
      'NoticeBar',
      'TabBar',
      'Tabs',
      'Tag',
      'Tips',
    ],
  },
  {
    title: '数据展示',
    children: [
      'Avatar',
      'Collapse',
  //     'Container',
      'Coupon',
      // 'Footer',
      // 'Icon',
      'List',
      'SearchBar',
      'Steps',
      'Swiper',
    ],
  },
  {
    title: '数据录入',
    children: [
      'Button',
      'Checkbox',
      'Form',
      'InputItem',
      'NumericInput',
      'Picker',
      'Radio',
      'Selector',
      'Stepper',
      'Switch',
      'Terms',
    ],
  },
  {
    title: '反馈',
    children: [
      'ActionSheet',
  //     'ErrorBlock',
      'ErrorPage',
      'Loading',
      'Modal',
      'Popover',
      'PullToRefresh',
      'Result',
      'SwipeAction',
      'Toast',
    ],
  },
  {
    title: '其他',
    children: [
      'CountDown', 
      'LocaleProvider', 
      'Tracker'
    ],
  },
]

function getComponentMenus(locale) {
  return componentMenus.map(item => ({
    title: item['title'],
    children: item.children,
  }))
}

export default defineConfig({
  title: 'tencent-design',
  favicon: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  exportStatic: {},
  base: '/toolkit-design',
  publicPath: '/toolkit-design/',
  hash: true,
  menus: {
    '/components': getComponentMenus('en-US'),
  },  
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '组件',
      path:  '/components'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/dengshicheng1996/toolkit-design.git',
    },
  ],
  theme: {
    '@hd': '0.02rem',
  },
  targets: {
    ios: 8,
  },
  styles: [
    `.__dumi-default-mobile-demo-layout {
      min-height: 100vh;
      background: #f5f5f5;
      padding: 0 !important;
      overflow: hidden;
      font-size: 0.26rem;
    }
    .__dumi-default-device-status {
      border-bottom: 1px solid #e3e3e3;
    }
    .__dumi-default-mobile-previewer {
      font-size: initial;
    }
    `,
  ],
  // 用于替换 __VERSION__ pkg.version
  // extraBabelPlugins: ['version'],
});
