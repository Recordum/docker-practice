import express from "express";
import { DogFuntion } from "./function.mjs";

const app = express();

app.get('/', async (req,res) => {
    const fun = new DogFuntion('함수바둑이')
    fun.bark();
    fun.age = 6;
    fun.bark();
    console.log(fun.__proto__);
    console.log(fun.age);
    res.send('HI there');
})

app.listen(3999);