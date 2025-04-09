import express, { Request, Response } from "express";
import bodyParser from 'body-parser';

const app = express();
// Primer middleware para usar el body
app.use(bodyParser.json())

// va despues del signo de interrogación ?name=Yusef 
const solquery = (req: Request, res: Response) => {
    const name = req.query.name;
    res.json({"ms":`Hola ${name}`})
}

// sin el tipo : any 
// con el tipo
const suma = (req: Request, res: Response) => {
    const num: any = req.query.num;
    const num2: string = req.query.num2 as string; 
    res.json({"ms":`Hola ${parseInt(num) + Number(num2)}`})
}



// va depues de la ruta asi :id
const solparam = (req: Request, res: Response) => {
    const { id } = req.params
    console.log(id);
    res.json({"ms":"Hola mundo"})
}
// --->
const solbody = (req: Request, res: Response) => {
    res.json({"ms":"Hola mundo"})
}
// npm run dev
app.get("/user", solquery);
app.get("/user/:id", solparam);
app.get("/suma", suma)
app.post("/user", solbody);

const PORT = 3000
app.listen(PORT, () => {
    // abre el localhost:3000
    console.log(`El server corre bien http://localhost:${PORT}`,);
});
