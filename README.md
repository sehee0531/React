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
div를 감쌀 수 있는 것이 필요하기 때문에
