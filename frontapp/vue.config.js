const express = require('express')
const app = express()
const drawingList = require("./src/data/articleList.json")
module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     */
    // 项目部署的基础路径
    // 我们默认假设你的应用将会部署在域名的根部,
    // 例如 https://www.my-app.com/
    // 如果你的应用部署在一个子路径下，那么你需要在这里
    // 指定子路径。比如将你的应用部署在
    // https://www.foobar.com/my-app/
    // 那么将这个值改为 '/my-app/'
    // publicPath: "gldapp",
    publicPath: "/",
    // 构建好的文件输出到哪里
    outputDir: "/dist",
    assetsDir: "./",//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    // indexPath: "",//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径.
    filenameHashing: true,//默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
    lintOnSave: true, // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    runtimeCompiler: false,//是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
    transpileDependencies: [
        /* string or regex */
    ],
    productionSourceMap: false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    // 调整内部的webpack配置. // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => { },
    configureWebpack: {
        resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                }
            ]
        }
    },
    // CSS 相关选项
    css: {
        // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
        // 也可以是传递给 extract-text-webpack-plugin 的选项对象
        extract: true,
        sourceMap: false, //是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
        modules: false//默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    },
    // use thread-loader for babel & TS in production build // enabled by default if the machine has more than 1 cores
    parallel: require("os").cpus().length > 1,
    // PWA 插件相关配置 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    pwa: {},
    // configure webpack-dev-server behavior
    //本地运行需要放开代理（打包到服务器时需要注释掉，服务器部署使用nginx代理）
    devServer: {
        before(app) {
            app.get('/api/drawingList', (req, res) => {
                res.json({
                    success: 200, // 这里是你的json内容
                    data: drawingList
                })
            })
        },
        proxy: {
            '/localhost': {
                target: 'http://localhost:3333',
                changeOrigin: true,
                pathRewrite: { "^/localhost": "" }
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }

};