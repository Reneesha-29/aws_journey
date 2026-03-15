import json
import boto3

translate = boto3.client('translate')

def lambda_handler(event, context):

    body = json.loads(event['body'])
    
    text = body['text']
    target = body['target']

    response = translate.translate_text(
        Text=text,
        SourceLanguageCode='auto',
        TargetLanguageCode=target
    )

    translated = response['TranslatedText']

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'translatedText': translated
        })
    }