import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// MongoDB connect
mongoose.connect(process.env.MONGO_URI, {
    dbName: "bill_spillter"
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Sample route
app.get('/', (req, res) => res.send("Smart Grocery Splitter API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
