# test_web_711
最开始应该先建一个数据库 newText create database "newText";
使用之前先把自己的数据库信息换到config.js 里 之后运行create.js 会多创建两个列在终端里跑以下命令 
ALTER TABLE details DROP COLUMN "createdAt";
ALTER TABLE details DROP COLUMN "updatedAt";
然后运行por.js 获取数据
最后运行index.js 打开localhost:3000/getDetail 查看结果
主要目的是请大家看一下这样的模式和组织方式以及数据是不是合理（当然表里面的内容肯定是不够的） 
