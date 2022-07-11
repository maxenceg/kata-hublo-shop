# Build my shop REST API using NestJs

# Introduction 

This kata offers a set of features to practice your API programming skills. It covers basic HTTP verbs and codes.
In this Kata you will implement an API for an online Shop.

## Requirements 

  * REST API design 
  * NestJS

## Features
  * Shopping API with :
    * products
    * orders
    * bills.

## Products

Can created, updated, found by id or deleted
Have an id, name, price and weight
Products can be sorted by name, price or weight


- Products name must be longer than 3 characters or throw an error if shorter
- Products id cannot be updated

## Orders

Can be created, listed, updated and deleted
Have a status, a product list with a quantity per product, a shipment amount, a total amount and a weight
Orders status can be pending, paid or canceled

Are offered 5% discount when the price exceeds 1000€
Shipment costs 25€ for every 10 more kg (50€ for 20kg, 75€ for 30kg, etc.)

## Bills

Can be listed
Have an amount and a creation date
Are automatically generated when an order status is set to paid
