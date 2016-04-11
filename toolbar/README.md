##sass 
解压压缩文件     
`找到目录G:\Koala\rubygems\gems\sass-3.4.9\lib\sass`    
修改engine.rb文件在require下面，module Sass上面添加一句话：     
`Encoding.default_external = Encoding.find('utf-8')`   
就可以支持中文了
##RequireJS
1. 有效的防止命名冲突
2. 声明不同js文件之间的依赖
3. 可以让我们的代码以模块化的方式组织
4. requirejs.config
5. requirejs
6. define     
###data-main为入口js文件
##实现方式
1. 使用背景图片的方式
2. 使用图标字体的方式
3. 利用before和after伪类的方式
