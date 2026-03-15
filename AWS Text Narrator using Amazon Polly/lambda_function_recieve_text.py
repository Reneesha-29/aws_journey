import json
import boto3
import base64

polly = boto3.client('polly')

def lambda_handler(event, context):

    body = json.loads(event['body'])
    text = body['text']

    response = polly.synthesize_speech(
        Text=text,
        OutputFormat="mp3",
        VoiceId="Joanna"
    )

    audio = response['AudioStream'].read()

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "audio/mpeg",
            "Access-Control-Allow-Origin": "*"
        },
        "body": base64.b64encode(audio).decode('utf-8'),
        "isBase64Encoded": True
    }