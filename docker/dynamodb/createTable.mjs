// Load the AWS SDK for Node.js
import pkg from "aws-sdk";
const { config, DynamoDB } = pkg;
// Set the region
config.update({
  region: "localhost",
  endpoint: "http://localhost:8000",
});

// Create the DynamoDB service object
const ddb = new DynamoDB({ apiVersion: "22-01-2023" });

const tableName = "Services";

const params = {
  AttributeDefinitions: [
    {
      AttributeName: "ServiceID",
      AttributeType: "N",
    },
    {
      AttributeName: "ServiceName",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "ServiceID",
      KeyType: "HASH",
    },
    {
      AttributeName: "ServiceName",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
  TableName: tableName,
};

ddb.createTable(params, function (err, data) {
  if (err) {
    console.error(
      "Unable to create table. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log(
      "Created table. Table description JSON:",
      JSON.stringify(data, null, 2)
    );
  }
});
