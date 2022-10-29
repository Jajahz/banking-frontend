# banking-frontend

## Project Setup

```sh
npm install
```

## ฏatabase setup by JSON-Server

```sh
npm run db
```

## การใช้งานของแอปพลิเคชัน
- สามารถดู transaction history ได้
- สามารถดูจำนวนเงินปัจจุบันได้

## สิ่งที่ทำไม่เสร็จ
### Back-End (Everything)
- Not generate JWT token
- Not create API
- Note create database
### Front-End
- Not connect some API
- Can not filter by transfer or receive meni
- Can not view who transfer to
### Infrastructure (Everything)
- Dockerfile
- Docker-compose

## เหตุผลที่ทำงานไม่เสร็จ
- เนื่องจากได้ test มาเมื่อวันพุธ แต่วันพฤหัสบดีเป็นวันสอบ ทำให้เริ่มทำจริง ๆ ได้วันศุกร์
- งานที่ได้รับมอบหมายค่อนข้างมีจำนวนมาก เนื่องด้วยเป็นความรู้ใหม่ด้วย ทำให้ทดลองทำไม่ทันภายใน 2-3 วัน

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```