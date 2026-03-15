import json
import boto3
import uuid

polly = boto3.client('polly')
s3 = boto3.client('s3')

BUCKET_NAME = "text-narrator-audio-123"

def lambda_handler(event, context):

    text = event['text']
    
    response = polly.synthesize_speech(
        Text=text,
        OutputFormat="mp3",
        VoiceId="Joanna"
    )

    file_name = str(uuid.uuid4()) + ".mp3"

    s3.put_object(
        Bucket=BUCKET_NAME,
        Key=file_name,
        Body=response['AudioStream'].read(),
        ContentType='audio/mpeg'
    )

    return {
        "statusCode": 200,
        "audio_file": file_name
    }