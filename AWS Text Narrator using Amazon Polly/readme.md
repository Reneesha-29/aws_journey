# AWS Text Narrator using Amazon Polly


## 📌 Project Overview

This project is a serverless Text-to-Speech web application built using AWS services. The application allows users to type text into a webpage and convert it into natural-sounding speech using Amazon Polly. The generated audio is returned to the browser and played instantly.

---

# 🏗 Architecture Overview

User interacts with a web page hosted on Amazon S3.
The request is sent to an API endpoint created using Amazon API Gateway.
API Gateway triggers an AWS Lambda function.
The Lambda function sends the text to Amazon Polly.
Amazon Polly converts the text into speech and returns the audio response.
The browser receives the audio and plays it.

---

# 🛠 Services Used

1. Amazon Polly – converts text to speech

2. AWS Lambda – runs backend code

3. Amazon API Gateway – exposes the API endpoint

4. Amazon S3 – hosts the static website

---

# 📁 Project Structure

The project contains two main components:

• Backend (Lambda function that communicates with Amazon Polly)

• Frontend (Simple web page where users enter text and play the generated audio)

---

## 🚀 Quick Setup Guide

1. **Create a Lambda Function:**
   Create a new AWS Lambda function and add the logic that sends text to Amazon Polly and returns the generated speech.

2. **Add Required Permissions:**
   Attach the necessary policy so the Lambda function can access Amazon Polly.

3. **Test the Lambda Function:**
   Run a test inside Lambda with sample text to confirm that speech generation works.

4. **Create an API with API Gateway:**
   Create an HTTP API and connect it to the Lambda function.
   Deploy the API to obtain the endpoint URL.

5. **Build the Web Page:**
   Create a simple webpage where users can enter text and trigger the speech generation.

6. **Host the Website on S3:**
   Upload the webpage to an S3 bucket and enable static website hosting.

7. **Test the Application:**
   Open the S3 website URL, enter text, and generate speech.

---

# 🎯 Expected Outcome

Users can enter text on the webpage and instantly hear the spoken version generated using Amazon Polly.
This demonstrates a simple but powerful serverless workflow built entirely on AWS services.


