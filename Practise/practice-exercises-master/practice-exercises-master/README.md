## Practice

This practice comprises of 5 exercises.

### Problem Statements

#### Practice 1 - Create a Product object

Write a JavaScript function to create a product object which has the properties like productId, productName, description and unitPrice.  

#### Task

- Declare and initialize a student object with the following properties like productId, productName, description and unitPrice.​

The solution for this exercise should be provided in `p1-submission.js` file.

The file is located inside the folder `p1-create-product`.

#### Practice 2 - Filter premium products

At Ricky's fashion store, you can't have discount over the premium products. Premium products are ones which costs more than 300 USD. ​

List the premium products after filtering based on the product price using Array filter method.

#### Task

- Declare and initialize an array with given product values.​

- Use Array's filter arrow function to get the array of premium products whose price is greater than $300​

- Display the array of premium products.

    | Product Name | Price(USD)|
    |-|-|
    | Gucci Round Bucklet Belt​ | 400​ | 
    | Gucci Round Bucklet Belt​ | 450​ |
    | Gucci Round Bucklet Belt​ | 400​ |
    | Gucci Round Bucklet Belt​ | 320​|
    | Smiley T-Shirt​ | 350​ |
    | Smiley T-Shirt​ | 150​ |
    | Shinie Nail Paint​ | 100​ |
    | Shinie Nail Paint​ | 250​ |
    | Esbeda Wallet​ | 250​ |

The solution for this exercise should be provided in `p2-submission.js` file.

The file is located inside the folder `p2-premium-products`.

#### Practice 3 - Apply discount on non-premium products

People tend to shop products which are sold at a discount. Items which are not at a discount are unlikely to be sold. ​

Apply 15% discount on all the non-premium products to help the shop keeper improve his sales.

#### Task

- Initialize the same array of products declared in the previous exercise.​

- Use Array's filter arrow function to get the array of non-premium products whose price is lesser than $300​

- Use map function to apply 10% discount on the non-premium products.​

- Display the array of non-premium products with discounted rates.

The solution for this exercise should be provided in `p3-submission.js` file.

The file is located inside the folder `p3-discounted-price`.

#### Practice 4 - Create a stock of each product type

The shopkeeper at Ricky's fashion store wants to know the stock of each product type so that he can update his inventory details.​

​Get the stock of each product type using Array's reduce method.​

#### Task

- Initialize the same array of products declared in the previous exercise.​

- Use Array's reduce method to find the count of product of each type.​

- Display the array of product details with productName and stock as its properties.

    | Product Name​ |   Stock​   |
    |-|-|
    | Gucci Round Bucklet Belt​ | 4​ |
    | Smiley T-Shirt​ | 2​ |
    | Shinie Nail Paint​ | 2​ |
    | Esbeda Wallet​ | 1​ |

The solution for this exercise should be provided in `p4-submission.js` file.

The file is located inside the folder `p4-product-stock`.

#### Practice 5 - Function chaining

Array operations can be chained together if they are performed on the same Array object to increase performance.​

Get the stock of each non-premium product using JavaScript function chaining strategy.​

#### Task

- Initialize the same array of products declared in the previous exercise.​

- Chain Array's filter, map and reduce function to get the count of each non-premium products whose price is less than $300.​

- Display the array of product details with productName and stock as its properties.

    | Product Name​ |   Stock​   |
    |-|-|
    | Gucci Round Bucklet Belt​ | 1 |
    | Smiley T-Shirt​ | 1 |
    | Shinie Nail Paint​ | 2​ |
    | Esbeda Wallet​ | 1​ |

The solution for this exercise should be provided in `p5-submission.js` file.

The file is located inside the folder `p5-function-chaining`.