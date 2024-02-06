## 18 Dec

1. Just Install the dependencies to respective services
2. Create gateway folder and install express-http-proxy as an extra package.
3. Copy the respective files.

## 25 Jan

1. Update the customer model
   ![Alt text](image.png)
   ![Alt text](image-1.png)

2. Update the findCustomerById
   ![Alt text](image-2.png)

3. Update addWishListToItem controller
   ![Alt text](image-3.png)

## 30 Jan

1. Update the AddCartItem controller
   ![Alt text](image-4.png)

2. Now remove product and shopping repository and services.

## 31 Jan

1. Create app-event.js in src/api/app-event.js
2. What we are doing in this file is just providing a way/webhook so other applications can connect with our application
   ![Alt text](image-5.png)
3. Update the root index.js like this
   ![Alt text](image-6.png)
4. Use postman to test this
   ![Alt text](image-7.png)
5. Now Make sure that Customer endpoints are working fine.

## 4 Feb(continue from 25)

1. Delete the address, order models from product ms
2. Delete customer and shopping repository
3. Delete customer and shopping services.
4. Create app-events.js in api folder
   ![alt text](image-8.png)

## 6 Feb

1. Install axios in product
2. Create publishCustomerEvent function and publishShoppingEvent function in utils index.js
3. In publishCustomerEvent function call customer app events endpoints.
   ![alt text](image-9.png)
4. Create getProductPayload in product services
   ![alt text](image-10.png)
5. Update the wishlist function in product api
   ![alt text](image-11.png)
