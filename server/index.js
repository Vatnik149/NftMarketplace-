const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user-routes');
require('dotenv').config();


const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));


app.use('/api', userRouter);


app.listen(PORT, () => console.log(`listening on port ${PORT}`));