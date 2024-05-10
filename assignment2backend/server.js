import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import dataRoutes from './routes/dataRoutes.js'
import cors from "cors"

//confg
dotenv.config();

//connect db
connectDB()

// rest object
const app = express();

//middelware
app.use(express.json())
app.use(cors())


// routes
app.use('/api/v1/data', dataRoutes)


// Count API calls endpoint
let addCount = 0;
let updateCount = 0;

app.get('/api/v1/data/count', (req, res) => {
  res.json({ add_count: addCount, update_count: updateCount });
});

// Middleware for incrementing counts on API calls
app.use('/api/v1/data/add', (req, res, next) => {
    addCount++;
    next();
  });
  
  app.use('/api/v1/data/update', (req, res, next) => {
    updateCount++;
    next();
  });

//rest api
app.get("/", (req, res) => {
    res.send({
        message: "hello everyone backend working fine"
    });
})

//Port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})