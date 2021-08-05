# URL-Shortener

此專案可以讓使用者建立自己的 URL-Shortener

## Features - 產品功能

- 將任一網址縮成短網址
- 將長網址與短網址以列表方式呈現
- 點擊短網址可另開視窗連結至長網址的目的地
- 點擊 Copy 可以複製短網址
- 點擊 Delete 可以刪除該組網址

## Screenshot 畫面瀏覽

![image](https://github.com/steven4program/url-shortener/blob/master/screenshot/url-shortener.png?raw=true)

## Prerequisites - 環境建置與需求

- Node.js v14.17.1
- express v4.17.1
- express-handlebars v5.3.2
- method-override v3.0.0
- mongoose v5.13.5
- body-parser v1.19.0

## Installing - 安裝流程

1. 開啟終端機(Terminal)將此專案 Clone 至本機電腦

```
git clone https://github.com/steven4program/url-shortener.git
```

2. 進入存放此專案的資料夾

```
cd url-shortener
```

3. 安裝 npm 套件

```
npm install
```

4. 加入種子資料

```
npm run seed
```

5. 啟動網頁伺服器

```
npm run dev
```

當 Terminal 出現以下文字表示成功連結本地伺服器

```
App is running on http://localhost:3000
mongodb connected!
```

6. 在任一瀏覽器中輸入 http://localhost:3000 開始使用本專案

## Developer - 開發者

[Steven Chang](https://github.com/steven4program)
