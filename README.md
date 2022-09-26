# React
노드프로젝트 생성해주는 명령어 ( 처음 만들 때는 오래걸림 )> npx create-react-app .

npm start 후 http://localhost:3000 > 웹 서버가 3000번으로 구동중인 것을 알 수 있음

vscode가 javascript에 최적화 되어 있음

import App from './App'; App.js를 불러와서 그걸 app이라 지정하겠다
이기능을 하는 태그로 사용자 정의 태그를 만들 수 있다

export default App; 이 function을 앱이라는 태그로 보내겠다

componentDidMount() > 얘가 부른다
 async callGetRepair() 웹서비스를 호출하고

헤더에다가 뭔가 값을 집어넣어주면 - 아무나 받아도 허용해주는 놈이네 
response쪽에서 온 헤더로 판단을 함 
response.setHeader("Access-Control-Allow-어쩌고") -> 이 헤더가 있으면 보여줄게하고 java Script가 허용해줌

 <></>
div를 감쌀 수 있는 것이 필요하기 때문



----------헤더파일------------------
POST http://office.pyunhan.co.kr/Cache/CacheService/addImages HTTP/1.1
User-Agent: Mozilla/5.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Content-Type: multipart/form-data; boundary=a1234567890 //boundry는 구분자
Content-Length: 29278

--a1234567890 //addformdata가 --까지 만들어줌
Content-Disposition: form-data; name=data //이 구역의 이름은 data  addformdata의 key값이 됨 서블릿도 이 이름을 해줘야함
Content-Type: text/plain; charset=utf-8 

{"title":"addimagestest","imageNames":["image1","image2"]} //예)json이다
--a1234567890
Content-Disposition: form-data; name=file; filename=image1 //파일 이름은 중요하지 않다 filename의 유무에 따라 json과 image를 구분한다
Content-Type: image/jpeg

(Binary data byte[] in hear) //실질적으로는 깨져있는 파일이 여기 들어감
--a1234567890
Content-Disposition: form-data; name=file; filename=image2 
Content-Type: image/jpeg

(Binary data byte[] in hear)
--a1234567890-- //--가 두개 붙으면 여기가 끝이다 이건 3개의 파트로 구성

 this.Contents=response.users;
 
