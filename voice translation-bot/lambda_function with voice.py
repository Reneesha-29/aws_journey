import json
import boto3
import base64

translate = boto3.client('translate')
polly = boto3.client('polly')

def lambda_handler(event, context):

    body=json.loads(event['body'])

    text=body['text']
    target=body['target']

    result=translate.translate_text(
        Text=text,
        SourceLanguageCode='auto',
        TargetLanguageCode=target
    )

    translated=result['TranslatedText']

    speech=polly.synthesize_speech(
        Text=translated,
        OutputFormat='mp3',
        VoiceId='Joanna'
    )

    audio=speech['AudioStream'].read()

    audio_base64=base64.b64encode(audio).decode('utf-8')

    return {
        "statusCode":200,
        "headers":{
            "Access-Control-Allow-Origin":"*"
        },
        "body":json.dumps({
            "translatedText":translated,
            "audio":"data:audio/mp3;base64,"+audio_base64
        })
    }