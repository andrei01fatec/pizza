import {Router} from "express";
import multer from "multer";

import uploadConfig from './config/multer';

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticaded } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemOrderController } from "./controllers/order/AddItemOrderController";
import { UpdateItemController } from "./controllers/order/UpdateItemOrderController";
import { RemoveItemOrderController } from "./controllers/order/RemoveItemOrderControlller";
import { ListItemOrderController } from "./controllers/order/ListItemOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

const router = Router(); //crio uma instância do elemento Router

const upload = multer(uploadConfig.upload("./tmp"));


//Crio uma rota simples chamda  /teste que retorna uma dado

    
    //--------- ROTAS PARA USER ------------//
    router.post('/user', new CreateUserController().handle)
    router.post('/session', new AuthUserController().handle)
    router.get('/userinfo', isAuthenticaded, new DetailUserController().handle);

    //------- ROTAS PARA CATEGORY---------//
    router.post('/category', isAuthenticaded, new CreateCategoryController().handle);
    router.get('/listcategory', isAuthenticaded, new ListCategoryController().handle);

    //------- ROTAS PARA CATEGORY---------//
    router.post('/product', isAuthenticaded, upload.single('file'), new CreateProductController().handle);

    router.get('/category/product', isAuthenticaded, new ListByCategoryController().handle);

    //------- ROTAS PARA ORDER --------//
    router.delete('/deleteItem', isAuthenticaded, new RemoveItemOrderController().handle);
    router.get('/order/list', isAuthenticaded, new ListItemOrderController().handle);
    router.get('/order/details', isAuthenticaded, new DetailOrderController().handle);
    router.put('/order/finishorder', isAuthenticaded, new FinishOrderController().handle);
    router.post('/order', isAuthenticaded, new CreateOrderController().handle);
    router.delete('/deleteorder', isAuthenticaded, new RemoveOrderController().handle);
    router.post('/order/add', isAuthenticaded, new AddItemOrderController().handle);
    router.put('/order/update', isAuthenticaded, new UpdateItemController().handle);


export {router}; // exportação do objeto router para acesso de outros arquivos