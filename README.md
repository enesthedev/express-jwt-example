<p align="right"><a href="https://github.com/enesthedev/express-jwt-example/blob/master/README_TR.md" title="Bu sayfayı Türkçe olarak görüntüle" target="_blank"><img height="20" src="https://github.com/enesthedev/art/blob/master/see-at-turkish.ico"/></a></p>

# ExpressJS JWT Example
JSON Web Token (JWT) usage in ExpressJS server.

### Requirements

- Node 16.x

### Install Instructions

- Clone the package
- Run `npm install`
- Copy .env.example as .env
- Set JWT_SECRET variable as string inside in .env file
- Run `npm run dev` to see results

### High Level Arthitecture
You can find out the high level arthitecture of this project at below image.
![](https://user-images.githubusercontent.com/16338242/198821076-644d2ba5-f0cc-4b4e-ba00-234a1875a64e.png)

### Usage Instructions
You can find out the example usage from Postman at below code section.

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
