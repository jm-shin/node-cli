#!usr/bin/env node
const fs = require('fs');
const path = require('path');

const type = process.argv[2];
const name = process.argv[3];
const directory = process.argv[4] || '.';
const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Template</title>
    </head>
    <body>
    <h1>Hello</h1>
    <p>CLI</p>
    </body>
</html>
`;

const routerTemplate = `
const express = require('express');
const router = express.Router();

router.get = ('/', (req, res, next) => {
    try{
        res.send('OK');
    } catch (error) {
        console.error(error);
        next(error);
    }
});
`;

const exist = (dir) => { // 폴더 존재 확인 함수
    try{
     // fs.accessSync(dir, fs.)
    }catch{

    }
}