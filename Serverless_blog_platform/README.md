# 📝 Serverless Blog Platform (AWS)

## 🚀 Project Overview

This project is built using AWS cloud services. Users can create, view, and delete blog posts through a simple web interface.

---

## 🛠️ Tech Stack

* Frontend: HTML, JavaScript
* Backend: AWS Lambda (Node.js)
* API: Amazon API Gateway (HTTP API)
* Database: Amazon DynamoDB
* Hosting: Amazon S3

---

## ⚙️ Features

* Create blog posts
* View all blog posts
* Delete blog posts
* Fully serverless architecture

---

⚙️ Setup Steps
* Create a table in Amazon DynamoDB
  -> Table name: BlogTable
  -> Partition key: id

* Create a function in AWS Lambda
  -> Add CRUD logic (Create, Read, Delete)
  -> Attach DynamoDB permissions
  
* Create an API using Amazon API Gateway
  -> Routes: GET /posts, POST /create, DELETE /delete
  -> Connect to Lambda
  -> Enable CORS and deploy

* Build frontend using HTML + JavaScript
  -> Use fetch() to call API

* Host the website on Amazon S3
  -> Enable static hosting
  -> Make files public
  -> Test the app
  -> Create, view, and delete posts

## 📎 Conclusion

This project demonstrates how to build scalable, cost-effective applications using AWS serverless services. It is a strong portfolio project showcasing backend, frontend, and cloud integration skills.

---

