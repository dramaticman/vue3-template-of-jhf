import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver'
import AutoImport from 'unplugin-auto-import/vite'
import px2rem from 'postcss-pxtorem'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      resolvers: [VantResolver()]
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],
      imports: ['vue', 'vue-router'],
      dirs:[
        'src/resources/hooks'
      ]
      // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
      // dts: 'src/auto-import.d.ts'
    })
  ],
  css:{
    postcss:{
      plugins: [
        px2rem({
          rootValue({ file }) {	// 此处的返回值应当为屏幕宽度的十分之一，75为一般设计稿的十分之一，37.5是vant的设计稿宽度所以需要特殊处理
              return file.indexOf('vant') !== -1 ? 37.5 : 75;
          },
          unitPrecision: 5, //保留rem小数点多少位
          propList: ['*','!border'] }),	// 需要转换的属性列表，*是通配符
      ],
    }
  },
  server:{
    host: '0.0.0.0',
  }
})
