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

## 7 Feb(continue from 6.47)

1. Update the delete wishlist endpoint for product
   ![alt text](image-12.png)
2. Update the cart controller like this
   ![alt text](image-13.png)
3. Update delete cart endpoint for product like this
   ![alt text](image-14.png)

## 12 Feb

1. Delete address and customer and products from shopping
2. Add cart model like this
   ![alt text](image-15.png)
3. Update items inside the cart like this
   ![alt text](image-16.png)
4. Update items inside orderSchema
   ![alt text](image-17.png)
5. Remove populate from orders function in repository
6. Add new function Add to cart in orders-repository
   ![alt text](image-18.png)
   ![alt text](image-19.png)
7. In Create new order function, update the profile to cart like this
   ![alt text](image-20.png)

8. Update the profile.cart variable to cart.items
9. Update the last line of function like this
   ![alt text](image-21.png)
10. Add getCart function in shopping service
    ![alt text](image-22.png)
11. Add Manage Cart function
    ![alt text](image-23.png)

## 13 Feb

1. Remove customer and products service.
2. Remove customer and products api.
3. Follow the github repo

## 16 Feb

1. Suppose customer service is down, how we will be communicating ?
   ![alt text](image-24.png)

2. To solve this problem, message broker comes into the picture. we will publish the event in common channel no matter if service is down or not.
3. Delete gateway folder.
4. Remove these two function from product utils
   ![alt text](image-25.png)
5. Download rabbitmq or cloudamqp.com and install amqplib npm in three services
6. Create three new function like this in products/utils
   ![alt text](image-26.png)

7. Subscribe message function
   ![alt text](image-27.png)

8. These are the things that is happening in above functions
   ![alt text](image-28.png)

9. Add message broker url and exchange name inside the config
   ![alt text](image-30.png)

10. Add message broker url in env and import in config file.
    ![alt text](image-29.png)

11. Create channel in root file and pass it to express app function
    ![alt text](image-31.png)

12. Pass channel in productapi function, In add wishlist function. Modify it like this
    ![alt text](image-32.png)

13. Wherever we are using the PublishCustomerEvent just replace it with Publish Message function.
14. Just do same for customer service and add queue name in config as "Shopping queue"
