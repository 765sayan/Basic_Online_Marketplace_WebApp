# Basic Online Marketplace Web Application
## 1.1 Introduction

This is a basic web application which is an example of a simple online marketplace. Here one can create two kinds of accounts,

  1. Admin (or seller accounts)
  2. User (or buyer accounts)
  
 Here the seller can list products buy entering the neccessary information required (The database models are significantly simplified).
 
 And buyers can order the products. There is no delivery tracking system like an e-commerce application.

## 1.2 Backend and Api

At this point I have only coded the backend of the application.

   ### 1.2.1 The Backend Tech-Stack
   
   The backend uses the following tech stack, 
   
      1. Express.js with Node.js for server side
      2. MongoDB as database (Local MongoDB)
      
   ### 1.2.2 The Backend API Routes
   
       The API routes, 
       
       |       Route       |   Endpoint   | HTTP Method |           Function              |
       | ----------------- | ------------ | ----------- | ------------------------------- |
       |  /api/v1/auth     | /register/   |   POST      | Create account as admin or user |
       |  /api/v1/auth     | /login/      |   POST      | Login to your account           |
       |  /api/v1/products | /            |   GET       | See all your products as admin  |
       |  /api/v1/products | /            |   POST      | Add your product as admin       |
       |  /api/v1/products | /id          |   DELETE    | Delete your product as admin    |
       |  /api/v1/products | /id          |   PUT       | Update your product as admin    |
       |  /api/v1/products | /buy         |   POST      | Buy (order) a product as user   |
       |  /api/v1/products | /buy         |   GET       | Get ordered products as user    |
       |  /api/v1/products | /list        |   GET       | Get list of available products  |
       |                   |              |             | as user                         |
       |  /api/v1/profile  | /user        |   GET       | Get your profile info as user   |
       |  /api/v1/profile  | /user        |   PUT       | Edit your profile info as user  |
       |  /api/v1/profile  | /user        |   DELETE    | Delete your profile as user     |
       |  /api/v1/profile  | /admin       |   GET       | Get your profile info as admin  |
       |  /api/v1/profile  | /admin       |   PUT       | Edit your profile info as admin |
       |  /api/v1/profile  | /admin       |   DELETE    | Delete your profile as admin    |
       
       
       
