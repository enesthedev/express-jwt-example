<p align="right"><a href="https://github.com/enesthedev/express-jwt-example/blob/master/README_TR.md" title="Bu sayfayı Türkçe olarak görüntüle" target="_blank"><img height="20" src="https://github.com/enesthedev/art/blob/master/see-at-turkish.ico"/></a></p>

<main align="left">
    <h3>Express JWT Example</h3>
    <p>Example JSON Web Token usage in Express HTTP server.</p>
    <hr />
    <h4>Requirements</h4>
    <ul>
        <li>Node 16.x LTS</li>
        <li>ESLint (optional)</li>
    </ul>
    <hr/>
    <h4>Install Instructions</h4>
    <ul>
        <li>Clone the package</li>
        <li>Run `npm install`</li>
        <li>Copy .env.example as .env</li>
        <li>Set JWT_SECRET variable as string inside in .env file</li>
        <li>Run `npm run dev` to see results.</li>
    </ul>
    <hr/>
    <h4>High Level Arthitecture</h4>
    <p>You can find out the high level arthitect of this project at below</p>
    <img src="https://user-images.githubusercontent.com/16338242/198821076-644d2ba5-f0cc-4b4e-ba00-234a1875a64e.png"/>
    <hr/>
    <h4>Usage Instructions</h4>
    <p>You can find out the example usage from Postman at below.</p>
</main>
   
```json
{
  "info": {
    "_postman_id": "261e620b-cffd-470a-bd67-04840f619d5d",
    "name": "express-jwt-example",
    "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
  },
  "item": [
    {
      "name": "Generate token",
      "id": "396476b9-3ce6-4487-a2fe-7be0cb11551f",
      "request": {
        "method": "POST",
        "header": [],
        "body": {
          "mode": "formdata",
          "formdata": [
            {
              "key": "issuer",
              "value": "1",
              "type": "text"
            },
            {
              "key": "audience",
              "value": "public",
              "type": "text"
            },
            {
              "key": "data",
              "value": "{\"id\": \"2\"}",
              "type": "text"
            }
          ]
        },
        "url": "127.0.0.1:3000/token"
      },
      "response": []
    },
    {
      "name": "Verify token",
      "id": "74c750cf-0c23-47f4-bff9-2592d95406fb",
      "request": {
        "auth": {
          "type": "bearer",
          "bearer": {
            "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIiLCJpYXQiOjE2NjI5MTA4MjYsImlzcyI6IjEiLCJhdWQiOiJwdWJsaWMiLCJleHAiOjE2NjI5MTgwMjZ9.hpG2XFXxp4wlg0MuGWAZde_yjBJfm_0Q_Eu0bukQWDs"
          }
        },
        "method": "POST",
        "header": [],
        "body": {
          "mode": "formdata",
          "formdata": [
            {
              "key": "issuer",
              "value": "1",
              "type": "text"
            },
            {
              "key": "audience",
              "value": "public",
              "type": "text"
            }
          ]
        },
        "url": "127.0.0.1:3000/verify"
      },
      "response": []
    }
  ]
}
```
