<p align="right"><a href="https://github.com/enesthedev/express-jwt-example/blob/master/README_TR.md" title="Bu sayfayı Türkçe olarak görüntüle" target="_blank"><img height="20" src="https://github.com/enesthedev/art/blob/master/see-at-turkish.ico"/></a></p>

# ExpressJS JWT Örneği
JSON Web Token kullanımını örnek olarak gösterdiğim ExpressJS aplikasyonu.

### Gereklilikler

- Node 16.x

### Kurulum Yönergeleri

- Paketi bilgisayarınıza indirin (git clone)
- `npm install` komutunu çalıştırın
- .env.example dosyasını .env olarak dizine kopyalayın
- .env dosyası içerisindeki JWT_SECRET değişkenini herhangi bir string olarak belirleyin
- `npm run dev` komutu ile uygulamayı başlatın

### Kullanım Yönergeleri
Postman ile oluşturulmuş bir koleksiyonun JSON çıktısını alt tarafta bulabilirsiniz. İstekler ve adresler alt taraftaki JSON içerisinde bulunmaktadır.

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
