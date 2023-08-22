
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import Router from "./routes/route.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const allowedOrigins = ['http://localhost:8080', 'http://localhost:8081'];

// Assuming your './config/database.js' exports the 'connection' object
import connection from './config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const corsOptions = {
    origin: allowedOrigins
  };
const port = +process.env.PORT || 5002


app.use(express.json());
app.use(cors(corsOptions));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Router);
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'html','index.html'));
});

app.get('/', (req, res)=> {
    res.json({
      status: res.statusCode,
        msg: "You're home"
    })
    res.sendFile()
});



app.post('/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
  }); 
  app.post('/addProduct', (req, res) => {
    const { productName, productSize, productDescription, productPrice } = req.body;
    const sql = 'INSERT INTO products (name, size, description, price) VALUES (?, ?, ?, ?)';
    const values = [productName, productSize, productDescription, productPrice];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error adding product:', err);
        res.status(500).json({ error: 'An error occurred while adding the product' });
      } else {
        res.json({ message: 'Product added successfully', productId: result.insertId });
      }
    });
  });

  app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
  
    const sql = 'DELETE FROM products WHERE id = ?';
  
    connection.query(sql, [productId], (error, result) => {
      if (error) {
        console.error('Error deleting product:', error);
        res.status(500).send('Error deleting product');
      } else {
        console.log('Product deleted');
        res.status(200).send('Product deleted successfully');
      }
    });
  });


    // Start the server after connecting to the database
    app.listen(5002, () =>
        console.log('Server running at http://localhost:5002')
        );