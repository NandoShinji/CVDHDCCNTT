# API

### How to run Project?

- install Nodejs: https://nodejs.org/en/
- install AdonisJS: npm i --save @adonisjs/cli
- install Package: npm install
- setup .env:
  ---- Tạo file .env tại thư mục root<br />
  ---- Copy nội dung file .env.example vào file .env<br />
  ---- Tạo APP_KEY: adonis key:generate<br />
  ---- PORT: Cổng mặc định chạy server<br />
  ---- DB_USER: root<br />
  ---- DB_PASSWORD: mật khẩu root (root là tài khoản mysql)<br />
  ---- DB_DATABASE: tên database<br />
  -- Run: adonis serve --dev<br />
  -- Chạy lệnh: adonis migration:run<br />

### API

- Endpoint: /api/v1/sensor

### Request:

- GET
- POST:
  --> form-data / json

- Database

* Table sensors:<br />
  "object_name": string,<br />
  "object_temp1": float,<br />
  "object_temp2": float,<br />
  "sensor_temp": float,<br />
  "distance": float<br />
