/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/route/cart.ts
| ├── start/route/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './cart'
| import './customer'
|
*/
import health from './route/health'
import photo from './route/photo'
import swagger from './route/swagger'

export {
  health,
  photo,
  swagger
}
