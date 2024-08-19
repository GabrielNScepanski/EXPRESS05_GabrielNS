const express=require('express');
const mysql =require('mysql2');

const mysql = require('./mysql_config') 

const app = express();
app.listem(3000, ()=>{
    console.log("Servidor em execução");
})

const conections =mysql.createConection(mysql_config)

app.get('/', (req,res)=>{
    let result ={
        status: 'SUCESSO',
        message: null,
        datata: null
    }
})
    conection.query("SELECT * FROM  tasks",(err,result)=>{
        if(err){
            result.status="Erro"   
            result.message= "Erro na otenção das tarefas"
            result.data=[]
            //res.send(result)
            res.json(status)
        } else{
            result.status="sucesso"   
            result.message= "Tarefas obtidas com sucesso"
            result.data=results
            //res.send(result)
            res.json(status)
        }
    })