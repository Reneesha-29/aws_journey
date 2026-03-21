import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand, PutCommand, DeleteCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: "ap-south-1" }); // change if needed
const dynamo = DynamoDBDocumentClient.from(client);

const TABLE_NAME = "BlogTable";

export const handler = async (event) => {
    console.log("EVENT:", JSON.stringify(event));

    const method = event.requestContext?.http?.method;

    try {
        // GET POSTS
        if (method === "GET") {
            const data = await dynamo.send(new ScanCommand({ TableName: TABLE_NAME }));
            return response(200, data.Items || []);
        }

        // CREATE POST
        if (method === "POST") {
            const body = JSON.parse(event.body || "{}");

            await dynamo.send(new PutCommand({
                TableName: TABLE_NAME,
                Item: {
                    id: Date.now().toString(),
                    title: body.title,
                    content: body.content
                }
            }));

            return response(200, { message: "Post created" });
        }

        // DELETE POST
        if (method === "DELETE") {
            const id = event.queryStringParameters?.id;

            await dynamo.send(new DeleteCommand({
                TableName: TABLE_NAME,
                Key: { id }
            }));

            return response(200, { message: "Deleted" });
        }

        return response(400, { message: "Invalid request" });

    } catch (error) {
        console.log("ERROR:", error);
        return response(500, { error: error.message });
    }
};

function response(statusCode, body) {
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(body)
    };
}