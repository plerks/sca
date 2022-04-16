开发环境下，npm install之后使用npm run dev运行。
运行后端容器，需要：

* docker-compose -f docker-compose.yaml up
* 在db容器中建立一个名为osca的数据库
* docker-compose restart backend重启backend容器(因为docker-compose没有时序控制，backend会退出，需要重启)
