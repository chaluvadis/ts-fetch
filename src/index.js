"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = require("./service");
var service = new service_1.PostService();
service.getPosts().then(function (posts) {
    console.log(posts);
});
