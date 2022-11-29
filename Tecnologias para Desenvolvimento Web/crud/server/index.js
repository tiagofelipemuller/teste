const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.post("/api/insert", (req, res ) => {
    const cor = req.body.cor;
    const portas = req.body.portas;
    const potencia = req.body.potencia;
    const tipoTeto = req.body.tipoTeto;
    const tecidoBanco = req.body.tecidoBanco;

    const sqlInsert = "insert into caracteristicaVeiculo (cor, portas, potencia, tipoTeto, tecidoBanco) values (?,?,?,?,?)";
    db.query(sqlInsert, [cor, portas, potencia, tipoTeto, tecidoBanco], (err, result) => {
        alert(err.code);
        console.log(result);
    });
});

app.listen (3001, () =>{
    console.log("running on 3001");
});

