## Wanted-pre-onboarding-frontend 선발 과제 

https://user-images.githubusercontent.com/108715216/196728340-f97590ef-fd72-4db9-a735-33ecde88a6e9.mp4



## Description

사용자가 직접 회원가입, 로그인하여 자신만의 투두 리스트를 작성, 관리할 수 있다
- 로그인, 회원가입 기능
- 투두 리스트 추가, 삭제, 수정 기능

## File tree

      📦src
       ┣ 📂components
       ┃ ┣ 📂header
       ┃ ┃ ┣ 📜header.jsx
       ┃ ┃ ┗ 📜header.module.css
       ┃ ┣ 📂login
       ┃ ┃ ┣ 📜login.jsx
       ┃ ┃ ┗ 📜login.module.css
       ┃ ┣ 📂sign_up
       ┃ ┃ ┣ 📜sign_up.jsx
       ┃ ┃ ┗ 📜sign_up.module.css
       ┃ ┣ 📂todo_item
       ┃ ┃ ┣ 📜todo_item.jsx
       ┃ ┃ ┗ 📜todo_item.module.css
       ┃ ┗ 📂todo_list
       ┃ ┃ ┣ 📜todo_list.jsx
       ┃ ┃ ┗ 📜todo_list.module.css
       ┣ 📂routes
       ┃ ┗ 📜private_route.js
       ┣ 📂utils
       ┃ ┗ 📜is_login.js
       ┣ 📜app.css
       ┣ 📜app.jsx
       ┣ 📜index.css
       ┗ 📜index.js

## Deploy
https://ohtmm.github.io/wanted-pre-onboarding-frontend_cjy/


## 프로젝트 실행 방법 
 1. root 경로 .env 파일 생성
 
      REACT_APP_API_URL=https://pre-onboarding-selection-task.shop
 
2. 프로젝트 패키지 설치

      npm install

3. 프로젝트 실행

      npm start


## 주요 라이브러리
 axios , react-router-dom
