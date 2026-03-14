# AWS Rekognition Image Label Generator

🚀 This project uses AWS Rekognition to detect labels in images stored in S3.

🏗 Architecture:

S3 → Lambda → Rekognition

☁ Services Used:
- Amazon S3 – Stores images for analysis
- AWS Lambda – Runs serverless Python code
- Amazon Rekognition – Detects labels in images

⚙ How it works:
1. Upload image to S3
2. Lambda reads the image
3. Rekognition detects labels
4. Output shows labels with confidence score

## ⚙ Setup Instructions

Follow these steps to run the project.

### 1. Create an S3 Bucket

* Go to AWS Console
* Open Amazon S3
* Create a new bucket
* Upload a test image (example: `dog.jpg`)

### 2. Create a Lambda Function

* Go to AWS Lambda
* Create a new function
* Choose **Python runtime**
* Paste the code from `lambda_function.py`

### 3. Configure IAM Permissions

Attach the following policies to the Lambda execution role:

* `AmazonRekognitionFullAccess`
* `AmazonS3ReadOnlyAccess`

### 4. Update the Bucket and Image Name

Modify the code to match your bucket and image name.

Example:

```id="r7dd2e"
Image={
 "S3Object": {
   "Bucket": "your-bucket-name",
   "Name": "dog.jpg"
 }
}
```

### 5. Deploy and Test

* Deploy the Lambda function and click on test.

