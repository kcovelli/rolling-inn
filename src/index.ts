import express from 'express';
import {json} from 'body-parser';
import {dbRouter} from "./routes/db";

const app = express()
app.use(json());
app.use(dbRouter)

app.listen(8080, () => {
    console.log('server listening on port 8080');
})
