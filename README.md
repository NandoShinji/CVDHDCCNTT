# API

### How to run Project?

-- install Nodejs: https://nodejs.org/en/
-- install AdonisJS: npm i --save @adonisjs/cli
-- install Package: npm install
-- setup .env:
---- Tạo file .env tại thư mục root
---- Copy nội dung file .env.example vào file .env
---- Tạo APP_KEY: adonis key:generate
---- PORT: Cổng mặc định chạy server
---- DB_USER: root
---- DB_PASSWORD: mật khẩu root (root là tài khoản mysql)
---- DB_DATABASE: tên database
-- Run: adonis serve --dev
-- Chạy lệnh: adonis migration:run

### API

- Endpoint: /api/v1/sensor

### Request:

- GET
- POST:
  --> form-data / json

- Database

* Table sensors:
  "object_name": string,
  "object_temp1": float,
  "object_temp2": float,
  "sensor_temp": float,
  "distance": float
