# EAT & FIT
<div align="center">
    <img src="https://github.com/elice-cookcook/eatnfit/assets/33516975/b12408f9-691b-4703-819b-14e6bcd0da27" alt="대체 텍스트">
</div>

## 프로젝트 설명 
다이어터들을 위한 식단 관리 & 운동 관리 웹어플리케이션 

## 개발환경
- 프론트엔드 ![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![Redux](https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=Redux&logoColor=white)
![Styled-Components](https://img.shields.io/badge/-Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
![React Query](https://img.shields.io/badge/-React_Query-ff4154?style=flat-square&logo=React-Query&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-671ddf?style=flat-square&logo=axios&logoColor=white)

- 백엔드 
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/-Express-000000?style=flat-square&logo=Express&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white)


## 팀원구성 및 역할
| 이름 | 역할 | 상세 역할 |
|:---|:---|:---|
| 윤보영 | 프론트엔드 | <ul><li>팀장</li><li>메인페이지 식단 섹션 UI/기능 구현</li><li>식단, 식단 수정 페이지 기능 구현</li></ul> |
| 이선우 | 프론트엔드 |  <ul><li>메인페이지 운동 섹션 UI/기능 구현</li><li>식단 페이지 UI 구현</li><li>운동 페이지 UI/기능 구현</li><li>식단, 운동 검색 및 추가 페이지 UI/기능 구현</li></ul>|
| 최정윤 | 프론트엔드 | <ul><li>메인 페이지 캘린더 UI/기능 구현</li><li>메인페이지 식단 섹션 UI/기능 구현</li><li>로그인/회원가입 UI/기능 구현</li><li>설정 페이지 UI/기능 구현</li></ul> |
| 장보근 | 백엔드 | <ul><li>식단, 운동, 계획 API 개발 및 데이터베이스 구현</li><li>백/프론트 서버 배포</li></ul> |


## 페이지 구성
<table width="100%">
  <tr>
    <th width="33%">랜딩 페이지</th>
    <th width="33%">로그인</th>
    <th width="33%">회원 가입</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/685c2afc-81a3-44ef-b4e1-d7a7e9f14a28" /></td>
    <td><img src="https://github.com/user-attachments/assets/56490317-cb53-4997-aee5-68704f83910d" /></td>
    <td><img src="https://github.com/user-attachments/assets/61337d17-7b66-4ce0-8ccd-0cb354b14f8e" /></td>
  </tr>
  <tr>
    <td><ul><li>화면 터치 시 로그인 페이지로 이동합니다.</li></ul></td>
    <td><ul><li>로그인 시 아이디와 비밀번호를 입력합니다.</li></ul></td>
    <td><ul><li>회원가입 시 필요한 정보들을 입력받습니다.</li><li>사용자가 입력할 때마다 입력값의 유효 여부를 체크합니다.</li></ul></td>
  </tr>
  <tr>
    <th>메인 페이지</th>
    <th>메인 페이지(하단)<br/>식단 기록이 있을 시</th>
    <th>설정 페이지</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/25007741-27e8-4a1b-972d-16a6a26cedcb"></td>
    <td><img src="https://github.com/user-attachments/assets/642293ab-786e-41ed-a1cc-d13632a8d092"></td>
    <td><img src="https://github.com/user-attachments/assets/859022c3-6b96-48f3-902a-a99a8d2ce592"></td>
  </tr>
  <tr>
    <td><ul><li>메인 상단에는 캘린더가 보여집니다.</li><li>날짜 아래의 색상을 통해 해당 날짜에 식단과 운동 기록이 있는지 확인할 수 있습니다.</li></ul></td>
    <td><ul><li>메인 하단에서는 식단, 운동, 계획 탭별로 기록된 내용을 바탕으로 칼로리 계산 결과를 확인할 수 있습니다.</li></ul></td>
    <td><ul><li>사용자의 정보를 수정할 수 있습니다.</li><li>로그아웃 및 탈퇴가 가능합니다.</li></ul></td>
  </tr>
  <tr>
    <th>식단 기록 페이지</th>
    <th>음식 검색 페이지</th>
    <th>음식 추가 페이지</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/b574a97c-8918-403f-b183-29ed3f683df8"></td>
    <td><img src="https://github.com/user-attachments/assets/6db6063a-35f1-4a10-b3e0-ccb8b21547db"></td>
    <td><img src="https://github.com/user-attachments/assets/27234bf0-0f5d-4b1e-972a-1e4a4be4481c"></td>
  </tr>
  <tr>
    <td><ul><li>식단 페이지에서는 식단 이미지, 시간, 영양성분을 확인하고 추가할 수 있습니다.</li><li>기존 식단은 검색을 통해 추가하면 자동으로 영양성분이 계산됩니다.</li></ul></td>
    <td><ul><li>음식 이름을 검색하고 등록 버튼을 누르면 식단 기록에 자동으로 추가됩니다.</li></ul></td>
    <td><ul><li>음식을 새로 등록할 수 있습니다.</li><li>등록한 음식은 추후에 재등록 하지 않고 검색을 통한 재사용이 가능합니다.</li></ul></td>
  </tr>
  <tr>
    <th>운동 기록 페이지</th>
    <th>운동 검색 페이지</th>
    <th>운동 추가 페이지</th>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/61090219-d6ff-44b2-90b9-ed63de312ed2"></td>
    <td><img src="https://github.com/user-attachments/assets/7c14ed5c-01b5-474e-a808-391c6d39ce15"></td>
    <td><img src="https://github.com/user-attachments/assets/91b7dbbe-24e0-44bb-8f8d-25d87dbf9bca"></td>
  </tr>
  <tr>
    <td><ul><li>운동 페이지에서는 운동명, 시간, 종류, 부위 및 강도를 추가할 수 있습니다.</li><li>기존 운동은 검색을 통해 추가할 수 있습니다.</li></ul></td>
    <td><ul><li>운동 이름을 검색하고 등록 버튼을 누르면 운동 기록에 자동으로 추가됩니다.</li><li>운동 종류는 운동 API 데이터를 활용하여 제공됩니다.</li></ul></td>
    <td><ul><li>운동을 새로 등록할 수 있습니다.</li><li>등록한 운동은 추후에 재등록 하지 않고 검색을 통한 재사용이 가능합니다.</li></ul></td>
  </tr>
</table>
