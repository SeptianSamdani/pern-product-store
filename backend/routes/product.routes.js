import express from 'express'; 
import { createProduct, getAllProducts, getProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const productRoutes = express.Router(); 

productRoutes.get('/', getAllProducts); 
productRoutes.get('/:id', getProduct); 
productRoutes.post('/', createProduct); 
productRoutes.put('/:id', updateProduct); 
productRoutes.delete('/:id', deleteProduct); 


export default productRoutes; 
