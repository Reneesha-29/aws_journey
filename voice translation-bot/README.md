# 🌍 AI Voice Translator Bot (AWS Serverless)

A serverless AI-powered language translation bot built using AWS services.
This application allows users to **enter text**, translate it into multiple languages, and hear the translated result as audio.

---

# 🚀 Features

* Translate text into multiple languages
* Automatic language detection
* Voice output for translated text
* Chat-style user interface
* Fully serverless architecture

---

# 🛠️ AWS Services Used

* Amazon S3 – Static website hosting
* AWS Lambda – Backend processing
* Amazon API Gateway – API endpoint for communication
* Amazon Translate – AI language translation
* Amazon Polly – Text-to-speech conversion

---

# 🧠 Architecture

User interacts with the website hosted on Amazon S3.
The request is sent to Amazon API Gateway, which triggers an AWS Lambda function.
The Lambda function processes the text using Amazon Translate and generates speech using Amazon Polly.
The translated result is returned to the website and displayed to the user.

Flow:

User → S3 Website → API Gateway → Lambda → Amazon Translate → Amazon Polly → Response to User

---



# ⚙️ How It Works

1. The user enters text or speaks using the microphone.
2. The website sends the input to the backend API.
3. API Gateway forwards the request to AWS Lambda.
4. Lambda sends the text to Amazon Translate for translation.
5. Amazon Polly converts the translated text into speech.
6. The translated text and audio are returned to the website and displayed.

---

# 🌐 Deployment

The frontend is hosted using Amazon S3 static website hosting.

The backend uses AWS Lambda connected through Amazon API Gateway.

---

# 📖 Learning Outcome

This project demonstrates:

* Building a serverless application on AWS
* Integrating multiple AI services
* Creating APIs using API Gateway and Lambda
* Deploying static websites using Amazon S3
* Handling audio output in web applications

