import json
import boto3

rekognition = boto3.client('rekognition')

def lambda_handler(event, context):

    response = rekognition.detect_labels(
        Image={
            'S3Object': {
                'Bucket': 'rekognition-image-label-project2',
                'Name': 'dog.jpg'
            }
        },
        MaxLabels=10
    )

    labels = []

    for label in response['Labels']:
        labels.append(label['Name'])

    return {
        'statusCode': 200,
        'body': json.dumps(labels)
    }