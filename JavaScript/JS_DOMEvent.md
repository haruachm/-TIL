# DOM 이벤트

**이벤트(Event)**는 인터렉티브 웹사이트를 만들 때 중요한 역할을 하는데, 사용자들이 하는 행동에 반응하는 작업을 말한다. 즉, 실행되는 코드에 응답을 하는 것인데 사용자가 특정 행동을 할 때 응답을 하는 것이다.

클릭, 드래그, 드롭, 마우스 올리기, 스크롤 움직이기, 폼 제출, 자판 누르기, 마우스 휠 움직이기, 더블 클릭, 클립보드에 복사 및 붙여넣기, 스크린 조정 등의 행동을 말한다. 이러한 다양한 일련의 행동들을 감지하면 JavaScript 코드를 실행한다.

### **이벤트의 종류 -** onClick (온클릭) 속성

- onClick 속성 값으로는 함수를 작성해야 한다. function이 아닌 바로 작성을 하면 해당 값이 바로 실행이 되는 것이지, 이벤트가 발생되었을 때 함수를 실행하는 것이 아니기 때문이다.

### 유저 인터페이스 이벤트(**UI Event)**

| Event  | Description                                                              |
| ------ | ------------------------------------------------------------------------ |
| load   | 웹페이지나 스크립트의 로드가 완료되었을 때                               |
| unload | 웹페이지가 언로드될 때(주로 새로운 페이지를 요청한 경우)                 |
| error  | 브라우저가 자바스크립트 오류를 만났거나 요청한 자원이 존재하지 않는 경우 |
| resize | 브라우저 창의 크기를 조절했을 때                                         |
| scroll | 사용자가 페이지를 위아래로 스크롤할 때                                   |
| select | 텍스트를 선택했을 때                                                     |
| abort  | 이미지의 로딩이 중단되었을 때 이벤트 발생                                |

### 키보드 이벤트(**Keyboard Event)**

| Event    | Description                             |
| -------- | --------------------------------------- |
| keydown  | 키를 누르고 있을 때                     |
| keyup    | 누르고 있던 키를 뗄 때                  |
| keypress | 키를 누르고 뗏을 때                     |
| keyCode  | 키 코드값. https://blog.lael.be/post/75 |

### 마우스 이벤트(**Mouse Event)**

| Event       | Description                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| click       | 마우스 버튼을 클릭했을 때                                                          |
| dbclick     | 마우스 버튼을 더블 클릭했을 때                                                     |
| mousedown   | 마우스 버튼을 누르고 있을 때                                                       |
| mouseup     | 누르고 있던 마우스 버튼을 뗄 때                                                    |
| mousemove   | 마우스를 움직일 때 (터치스크린에서 동작하지 않는다)                                |
| mouseover   | 마우스를 요소 위로 움직였을 때 (터치스크린에서 동작하지 않는다)                    |
| mouseout    | 마우스를 요소 밖으로 움직였을 때 (터치스크린에서 동작하지 않는다)                  |
| mouserenter | 해당 요소에 마우스 커서를 올려다놓았을때                                           |
| mouseleave  | 해당 요소에 마우스 커서를 빼낼때                                                   |
| contextmenu | context menu(마우스 오른쪽 버튼을 눌렀을 때 나오는 메뉴)가 나오기 전에 이벤트 발생 |

### 포커스 이벤트(**Focus Event)**

| Event          | Description               |
| -------------- | ------------------------- |
| focus/focusin  | 요소가 포커스를 얻었을 때 |
| blur/foucusout | 요소가 포커스를 잃었을 때 |

### 폼 이벤트(**Form Event)**

| Event  | Description                                                                                              |
| ------ | -------------------------------------------------------------------------------------------------------- |
| input  | input 또는 textarea 요소의 값이 변경되었을 때contenteditable 어트리뷰트를 가진 요소의 값이 변경되었을 때 |
| change | select box, checkbox, radio button의 상태가 변경되었을 때                                                |
| submit | form을 submit할 때 (버튼 또는 키)                                                                        |
| reset  | reset 버튼을 클릭할 때 (최근에는 사용 안함)                                                              |

### 클립보드 이벤트(**Clipboard Event)**

| Event | Description            |
| ----- | ---------------------- |
| cut   | 콘텐츠를 잘라내기할 때 |
| copy  | 콘텐츠를 복사할 때     |
| paste | 콘텐츠를 붙여넣기할 때 |

### onclick

```jsx
const newBtn = document.querySelector("#newBtn");

newBtn.onclick = function () {
  console.log("날 클릭했구나");
};

//요약 코드
document.querySelector("h1").onclick = function () {
  alert("날 누르지마");
};

//화살표 함수 사용
document.querySelector("h1").onclick = () => {
  alert("날 누르지마");
};
```

### onmouse

```jsx
function talk() {
  console.log("그만 눌러");
}

thirdBtn.onmouseenter = talk;
```

### addEventListener

- 제네릭 메서드로 이벤트나 이벤트 리스너에서 감지하고 싶은 어떤 이벤트든 전달할 수 있다.
- 첫 번째 인수는 이벤트, 두 번째 인수는 콜백함수이다.
- 해당 이벤트가 실제로 발생했을 때 실행하고 싶은 함수를 두 번째 인수로 넣는다.
- 다시 말하면 이벤트가 발생했을 때 브라우저 및 JavaScript에 의해 나중에 호출될 함수를 정의하는 방법이다.

```jsx
const button = document.querySelector("h1");

button.addEventListner("click", () => {
  alert("클릭");
});
```

- onClick이 아닌 addEventListener을 사용하는 이유는 onClick을 사용하는 경우 동일한 이벤트에 대해 두 개의 서로 다른 콜백 함수를 지정할 수 없다. 그러나 addEventListener 같은 경우엔 콜백 함수를 원하는 만큼 넣을 수 있다.
- 또한 addEventListener은 {once: true}와 같은 옵션을 넣을 수 있다.

```jsx
const fifthBtn = document.querySelector("#fifthBtn");
//첫 번째 이벤트가 발생했을 때 한번만 실행한다.
fifthBtn.addEventListener("click", () => console.log("첫번째 이벤트"), {
  once: true,
});
fifthBtn.addEventListener("click", () => console.log("두번째 이벤트"));
```

### 이벤트와 this 키워드

```jsx
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const allButton = document.querySelectorAll("button");

for (let button of allButton) {
  button.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}
```

### 키보드 이벤트와 이벤트 객체

**이벤트 객체**

- 이벤트 객체는 콜백함수 매개변수 부분에 자동적으로 전달된다. 소위 이벤트나 e 또는 evt라고 불린다.
- 이는 이벤트에 대한 정보를 담고 있는 객체이다.

```jsx
const button = document.querySelector("button");
button.addEventListener("click", function (e) {
  console.log(e);
});
```

**키보드 이벤트**

- 키보드 이벤트를 사용할 때 어떤 키가 눌려졌는지에 대한 정보를 이벤트 객체를 통해 받아온다.
- keyup, keydown 이벤트를 적용

```jsx
input.addEventListener("keyup", function () {
  console.log("Keyup");
});
```

- 위와 같은 경우엔 어떤 키가 눌렸는지 모른다. 어떤 키가 눌렸는지 알기 위해 ‘**이벤트 객체**’를 사용한다.
- code와 key에 집중한다.
- code는 키보드에서의 실제 위치를 표시한다. key는 입력된 값이다.
- 타이핑할 때 키보드에서의 위치를 알아내야 한다면 **code**를 써야 한다.
- 그러나 글자를 표시하고 글자를 만들기 위해 무슨 자판이 눌러지든 상관이 없고, 키보드의 어디에 있든 상관이 없다면 **key**를 쓸 수 있다. 상황에 따라 다르다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bb2f37e3-6d94-449a-a66d-7d49826eaf45/Untitled.png)

```jsx
window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("위쪽키");
      break;
    case "ArrowLeft":
      console.log("왼쪽키");
      break;
    case "ArrowRight":
      console.log("오른쪽키");
      break;
    case "ArrowDown":
      console.log("아래키");
      break;
    default:
      console.log("무시");
  }
});
```

### 폼 이벤트(Form Events), PreventDefault

- form action은 데이터가 전송되는 위치인 URL을 넣는다
- button을 누르면 action 주소로 입력된 데이터를 전송한다.

```html
<body>
  <h1>Form Events</h1>
  <form action="/register">
    <input type="text" name="username" />
    <input type="password" name="password" />
    <button>Register</button>
  </form>
  <script src="app.js"></script>
</body>
ㅇ
```

**PreventDefault**

- 자바스크립트에서 폼이 제출되고 다른 페이지로 이동하지 않도록 할 수 있다.
  - ex) 댓글을 달 때 버튼을 눌러도 새로고침이나 이동하지 않는 것.
- 이벤트 객체에 **preventDefault**라는 메서드를 사용한다.
  - 이건 이벤트의 결과로서 일어날 기본 동작을 방지한다. 즉, 폼이 제출되면 기본 동작인 새로고침을 방지할 수 있다.

**Form Elements**

- Form 요소 중 elemnets에는 폼 요소 집합이 순서대로 있어 요소에 접근할 수 있다.
- name은 요소의 특성 이름으로 설정되어 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/93bc8288-36a6-4269-b205-06e41a033348/Untitled.png)

form의 elements → name 값으로 접근할 수 있다.

- 댓글 달기 이벤트
- `e.preventDefault();` 로 새로고침을 막고, 그 페이지에서 작성 가능하도록 함.
- `username.value = "";` 입력 값 초기화
- `document.querySelector` 대신 `form.elements.요소` 를 사용해서 폼 요소에 엑세스
- form에 name을 부여해 name으로 요소에 접근 가능

```jsx
const commentForm = document.querySelector("#commentForm");
const commentContainer = document.querySelector("#comments");
commentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = commentForm.elements.username;
  const comment = commentForm.elements.comment;
  addComment(username.value, comment.value);
  username.value = "";
  comment.value = "";
});

const addComment = (username, comment) => {
  const newComment = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newComment.append(bTag);
  newComment.append(` 댓글 : ${comment}`);

  commentContainer.append(newComment);
};
```
