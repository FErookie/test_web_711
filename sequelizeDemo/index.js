const Koa = require('koa');
const koaBody = require('koa-body');
const router = require('koa-router')();
const app = new Koa();
const co = require('co');
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

let Sequelize = require('sequelize');
const sequelize = new Sequelize('newText', 'postgres', 'gaoshuda', {
    dialect: 'postgres'
});

router.get('/getDetail', async (ctx, next) => {
    let db = require('./models/index');
    let news = db.models.details;
    await sequelize.query('select * from details').then(values => {
        console.log(values[0]);
        ctx.response.body  =  values[0];
    });
    await next;
});

router.get('/' , async (ctx , next) => {
   ctx.response.body = "<h1>hello world</h1>" ;
   await next;
});
app.use(router.routes());



app.listen(3000 , function () {
    console.log("this server is running 3000");
    // let data = getData();
   // console.log(data);
});