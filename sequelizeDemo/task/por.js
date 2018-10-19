let superagent = require('superagent');
const fs = require('fs');
const cheerio = require('cheerio');
let Sequelize = require('sequelize');
let now = Date.now();

const sequelize = new Sequelize('newText', 'postgres', 'gaoshuda', {
    dialect: 'postgres'
});
let details = sequelize.define('details', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            notEmpty: true
        }
    },
    imgurl: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isUrl: true
        }
    }
}, {
    timestamps: false
});
let getPage = function (url) {
    superagent
        .get(url)
        .end(function (err , res) {
            //console.log(res.text);
            getDiv(res.text);
        })
};

let getDiv = function (page) {
    let data = [];
    let $ = cheerio.load(page);
    let needFindDiv = $('div#mainContentsBox');
    needFindDiv.find('div.newProductsBox').each((index, element) => {
        getDetails(element);
    })
};

let getDetails = function(div){
    let value = {};

    value.name = (div.children[1].children[0].data);
    value.Imagesrc = ('http://www.7-11bj.com.cn/' + div.children[3].children[1].attribs.href);
    value.describe = (div.children[3].children[3].children[0].data);
    (async () => {
        var details1 = await details.create({
            title : value.name,
            imgurl : value.Imagesrc
        });
        console.log('created: ' + JSON.stringify(details1));
    })();
};


let __main = function () {
    getPage('http://www.7-11bj.com.cn/?new_products.html');
};

__main();