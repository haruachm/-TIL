# 문서객체모델(DOM)

DOM이란 Document Object Model로, 웹 페이지를 구성하는 JavaScript 객체들의 집합이며, 문서 객체 모델은 JavaScript에서 웹 페이지의 콘텐츠로 접근하는 통로이다.

브라우저는 웹페이지를 띄울 때 HTML와 CSS 정보를 받아들인 다음 **요소와 스타일을 기반**으로 **JavaScript 객체를 생성**한다.

## 문서(Document)란?

> **문서는 문서 객체 모델 내에서 하나의 객체**이며, 브라우저에서 **자동으로 생성**된다.

⇒ 새로운 페이지를 열 때마다 해당 페이지의 콘텐츠를 이용한 문서 객체 모델이 생성된다.

⇒ **페이지의 콘텐츠를 나타내는 객체의 모음**이며, 클릭이나 드래그에 반응하는 메서드와 특성으로 CSS 요소를 변경이 가능하다.

## 문서(Document) 특성

- <body> 태그에 포함된 모든 요소 하나하나에 대한 고유의 JavaScript 객체가 생성된다.
- 객체마다 고유의 타입을 나타내는 특성을 갖으며, 각 객체는 단독으로 존재하는 게 아니라 **다 연결되어** 관계를 형성하고 있다.
- 객체를 통해 구성 관계인 ‘**트리 구조**’의 데이터 구조를 알 수 있다.
  - 트리 구조의 가장 **최상위**에 있는 중요한 요소가 바로 **‘문서(Document)’** 객체이다.
- 문서 객체 모델을 이용해 HTML, CSS 요소를 바꿀 수 있다.
- **console.dir(document)** 을 콘솔에 입력해 문서 객체 구조를 출력할 수 있다.
  - 이를 출력하면 HTML이 아닌 JavaScript의 객체를 확인할 수 있다.
  - console.dir(document) all: 에 출력된 것 모두 객체이다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/318437a5-1384-4c47-8224-5998e150f3b1/Untitled.png)

- 문서 객체는 모든 특성과 메서드를 포함하며, 웹페이지에 나타나는 모든 콘텐츠를 객체로 나타낸다.

### document.getElementById(’ ’)

> `document.getElementById(' ')` 메서드에 문자열을 전달하면 일치하는 **ID를 가진 요소**를 찾아내 해당 값을 나타내고 없으면 **null**을 나타낸다.

- **문서(document)에 내장**되어 있는 메서드이다.
- JavaScript에게 일치하는 ID 를 가진 요소를 페이지에서 찾아서 **객체**로 가져오라고 하는 것과 같으며 HTML이 아닌 **문서 객체 모델의 객체**를 찾는다.
- ID를 선택할 때 작용하며, 클래스 이름으론 작용하지 않는다.

### document.getElement**s**ByTagName(’ ‘)

> 태그 이름을 전달하면 `HTMLCollection`을 반환한다. HTMLCollection은 배열처럼 생겼지만 **배열은 아니다.**

- getElements ← **s**가 붙음을 인지하자. 여러 개를 가져오기 때문에 s가 붙는다.
- 가져온 값은 **객체**이다.

> `HTMLCollection`은 배열이 아니기 때문에 map과 같은 메서드를 액세스 할 수 없다. 반복 가능한 집합이지만 배열이 아니기 때문에 `for of`나 `length`는 사용 가능하다.

- `HTMLCollection` 안에는 **요소(Element)**라고 불리는 특정한 항목이 있다. JavaScript에서 Element는 반환되는 객체에 해당하며 **하나의 HTML 요소를 나타내는 모든 특정을 지닌 객체**이다.

```jsx
document.getElementsByTagName("img");

//출력 : HTMLCollection(4) [img#banner, img.square, img.square, img.square, banner: img#banner]

const allImages = document.getElementsByTagName("img");
allImages[0];

//출력 : <img id="" src="">
//가져온 이미지는 문자열이나 텍스트가 아닌 객체이다.
//console.dir(allImages); 로 출력하면 객체인 것을 확인할 수 있다.
```

### document.getElementsByClassName(’ ‘)

> ID나 태그이름이 아닌 **클래스**로 선택을 한다. TagName과 마찬가지로 같은 기능을 한다.

- `document.getElementsByClassName()` 과 Tagname 내장 함수 둘 다 유사한 성질에, 배열 같은 객체인 `HTMLCollection` **집합을 반환**한다.

```jsx
const Images = document.getElementsByClassName("square");
```

### document.querySelector( )

> 최근에 나온 메서드로 이 하나의 메서드를 사용해서 ID, 클래스, 요소 타입, 속성, CSS 스타일이든 뭐든 이용해서 선택할 수 있는 메서드이다.

```jsx
document.querySelector('a[title="Java"]');
```

1. **TagName** | `document.querySelector('p')`
2. **ID** | `document.querySelector('#toc')`
3. **Class** | `document.querySelector('.square')`

### document.querySelectorAll( )

> 일치하는 첫 번째 요소 대신에 일치하는 모든 요소를 반환한다.

```jsx
document.querySelectorAll("p a");
```

### innerHTML, textContent, innerText

> **innerText** vs **textConent**

- **공통점**
  → 태그 안에 있는 텍스트 컨텐츠를 가져온다.
- **차이점**
  → textConent는 태그 안에 모든 요소를 반환해 모든 콘텐츠를 나타낸다.
  → textConent는 **공백을 포함**하며 html 코드 **마크업**에서 가져온다.
  → 큰 차이점은 display: none을 했을 때 **textConent**는 마크업에서 가져오므로 **none 요소인 숨겨진 항목을 보여주지만**, **innerText**는 보이는 내용만 가져오므로 **숨겨진 항목은 무시**한다.나타내지 않는다.

```jsx
document.querySelector("p").innerText;

document.querySelector("p").textContent;
//출력 : p 태그 안의 문장이 출력

//textConent로 출력했을 때
//They are suitable for children, but like any pet,\n
//should be handled with care.\n
```

> **innerHTML**

- innerText는 텍스트로 취급하기 때문에 HTML 태그를 처리하기 위해 innerHTML이 필요하다.
- **태그 이름을 포함**해서 여는 태그, 닫는 태그 등 전체 콘텐츠를 출력한다.
  - innerText, textContent, innerHTML 모두 콘텐츠를 설정하거나 업데이트가 가능하지만, **유일하게 innerHTML만 요소를 다른 요소에 추가할 때 사용이 가능**하다.

```jsx
document.querySelector("p").innerHTML;

//출력 : 'The <b>title</b>is a <a href="/wiki/List ~

document.querySelector("h1").innerHTML = "<i>이게 제목이다</i>";
//콘텐츠를 덮어쓰기 떄문에 원래 내용이 제거된다.

document.querySelector("h1").innerHTML += "<sup>2018</sup>";
//콘텐츠를 추가하는 것이기 때문에 원래 내용 뒤에 추가한다.
```

### Properties & Methods

→ 속성에 엑세스 하여 속성 값을 변경할 수 있다.

> **1. 속성에 직접 액세스**

```jsx
document.querySelector("#banner").id;
document.querySelector("a").src;
document.querySelector("a").title;
```

> **2.getAttribute 메서드로 액세스**

```jsx
const link = document.querySelector("#banner").getAttribute("src");
const link = document.querySelector("#banner").src;
//같은 역할을 하지만 차이점이 있다.
```

> **차이점**

- 같은 값이지만 **그냥 가져오면 JavaScript를 거쳐서 오기 때문에** file 부분이 앞에 삽입이 된다.
  - 이는 계산된 값이다.
- `getAttribute()`를 사용하면 **HTML 자체**에서 직접 가져온다.

```jsx
link.href;
//=> "file://wiki/title

link.getAttribute("href");
//=> /wiki/title
```

> **3.setAttribute 메서드로 값 변경하기**

```jsx
link.setAttribute("href", "www.google.com");
```

### Style

- JavaScript에서는 식별자에 `text-color`와 같은 **대시 기호를 사용하지 않는다**.
- 대시 기호는 **카멜케이스**로 처리한다. ex) textColor
- Style 객체에 **스타일 시트에서 지정한 스타일이 포함되지 않아** Style 객체를 출력했을 때 빈 문자열을 출력한다. → 인라인 스타일은 설정이 된다.

```jsx
h1.style.color = "green";
```

- 위와 같이 JavaScript를 이용해 스타일을 변경하면 ‘**인라인 스타일**’로 작성된다.
- style 속성을 사용하는 것은 한 가지를 수정할 땐 좋지만 많은 스타일을 적용할 때는 다 적용해야 하는 귀찮음이 있고, 인라인 스타일은 특정 요소에만 적용되어 많이 사용하는 것은 좋지 않다.

> **요소를 변경하고 새 스타일을 적용할 때 ‘클래스’를 사용한다.**

→ CSS 클래스를 정의한 후 그 클래스를 요소에 추가하거나 제거하는 방식을 사용한다.

→ **JavaScript에서 유효하려면 따옴표 안에 값을 작성**해야 한다.

→ **JavaScript에서 특성은 카멜케이스**로 작성해야 한다.

→ 아래와 같이 작성하면 특성이 한 개 이상인 상황에서 각각 특성을 별도로 작성해야 하기 때문에 좋은 방법이 아니다.

→ 인라인 스타일로 들어가 마크업 안에 요소가 생겨 좋지 않다.

```jsx
const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.style.color = "red";
  link.style.textDecorationColor = "blue";
  link.style.textDecorationStyle = "wavy";
}
```

> `window.getComputeStyle()` 을 사용하면 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신한다.

```jsx
const h1 = document.querySelector("h1");
window.getComputeStyle(h1);
```

- 적용된 순서가 있어 `window.getComputedStyle(h1)[0]` 와 같이 액세스할 수 있다.
- `window.getComputedStyle(h1).color` 와 같이 **특정한 특성을 액세스**할 수 있다.
  - **⇒ 어떤 요소의 현재 스타일을 알아내고 싶을 때 사용**한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bbb968f0-04b1-439f-9d74-e30fbefd8e6f/Untitled.png)

### ClassList

> **클래스를 추가하는 방법**

1. **`setAttribute()` 사용**

   ```jsx
   const h2 = document.querySelector("h2");
   h2.setAttribute("class", "red");

   h2.setAttribute("class", "border");
   //다시 사용하면 앞에 red 클래스를 덮어쓴다.
   //위 방식대로 하려면 아래와 같이 해야 한다.

   let current = h2.getAttribute("class");
   h2.setAttribute("class", `${current} purple`);
   ```

2. `classList` 객체 사용하기
   - 요소의 클래스를 제어하고 클래스를 검색, 조작하기 위해 호출하는 객체이다.
   - classList 안에 **내장된 메서드**가 있다.

> `classList.add('')` **클래스 추가하기**

```jsx
const h2 = document.querySelector("h2");
h2.classList.add("red");
```

> `classList.remove('')` **클래스 삭제하기**

```jsx
h2.classList.remove("red");
```

> `classList.contains('')` **해당 클래스 포함되었는지 확인하기**

```jsx
h2.classList.contains("red");
//>> true (포함을 의미)
```

> `classList.toggle('')` **특정 클래스 토글**

- 호출할 때마다 **추가ㆍ삭제를 반복**한다.
- 버튼, 체크리스트, 할 일 목록 등 **클릭 때 생겼다가 사라지는 기능**에 사용

```jsx
h2.classList.toggle("red");
//>>false [삭제]
h2.classList.toggle("red");
//>>true  [추가]
```

### 계층이동

해당 특성들은 한 요소에서 다른 친척이나 부모 또는 조부 요소로 이동 및 순회한다.

- 요소를 제거하거나 새 요소를 삽입할 때 자주 사용한다.
- 사용자가 뭔가를 클릭하는 경우에 해당 버튼의 부모 요소나 자식 요소에 변화가 생기도록 할 수 있다.

> `**.parentElement**` **부모 요소로 순회**

```jsx
const move = document.querySelector("b");

move.parentElement;
//>> 그 위에 부모요소 <p>
move.parentElement.parentElement;
//>> 그 위에 부모요소 <body>
move.parentElement.parentElement.parentElement;
//>> 그 위에 부모요쇼 <html>
```

> `**.childElementCount` 자식 요소 개수\*\*

```jsx
firstPara.childElementCount;
```

> `**.children` 자식 요소의 목록\*\*

- HTMLCollection으로 배열은 아니지만 인덱스가 있어 반복 가능한 것을 자식 요소를 가져온다.
- 부모는 하나지만 자식 요소는 여러 개일 수 있다.
- 자식 요소에 작업을 하려면 반복을 걸어 작업한다.

```jsx
firstPara.children;
//>> HTMLCollection(8) [b, b, a, a, a, a, a, a]

firstPara.children[0];
//>> b
//이는 객체이다.
```

> `**.previousSibling**` `.**nextSibling`\*\* 인접한 형제 요소로 이동

- 이 둘은 해당하는 **노드를 출력**한다.

```jsx
firstImg.nextSibling;
//>> #text
//노드를 출력한다.
```

- 요소를 살펴보면 그 안에 요소의 텍스트에 해당하는 텍스트 노드가 있다.
- 어떤 브라우저에서는 자동으로 공백을 만들고, 그 공백을 텍스트 노드로 만든다.

> 여기서 **노드(node)**란?
>
> → DOM 문서는 node의 계층 구조로 되어 있다. node에는 텍스트, 요소, 주석, cdata 등이 있는데 요소는 node의 여러가지 유형 중 하나이다.

> `**.previousElementSibling**` `**.nextElementSibling**`

- 한 요소에서 이전과 다음 형제로 이동한다.
- **공백과 텍스트 노드를 무시**한다.

### document.createElement & append

> id가 있는 요소에 추가하기

```jsx
$("#id").append("");
```

> `**document.createElement**`

- 새로운 요소 생성

```jsx
const newImage = document.createElement("img");
//이미지 객체 생성
newImage.src =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
//출처를 추가한다. 아직
```

> **`appendChild`**

- 생성한 요소를 추가할 장소를 정한다.
  - 빈 요소 생성 → 요소 변경 → 추가
  - append 메서드 사용
  → 이미지 삽입

```jsx
document.body.appendChild(newImage);
//newImage 변수에 있는 요소를 body에 추가해 페이지에 삽입
newImage.classList.add("squear");
```

→ H3 삽입

```jsx
const newH3 = document.createElement("h3");
newH3.innerText = "새로운 사진입니다!";
document.body.appendChild(newH3);
```

> `**append**`

- Internet Explorer에서는 지원이 안 된다.
- 한 번에 한 개 이상 삽입이 가능하다

```jsx
const p = document.querySelector("p");
p.append("나는 텍스트야", "나도 텍스트야");
//동시에 여러 개를 삽입할 수 있다.
//appendChild와 동일하다.
```

> `**prepend**`

- Internet Explorer에서는 지원이 안 된다.
- 어떤 항목을 요소의 첫 번째 자녀로 삽입한다.

```jsx
const newB = document.createElement("b");
newB.append("안녕!");
p.prepend(newB);
//앞쪽에 삽입
```

> **`.insertAdjacentElement(position, element)` 엘리먼트 특정 위치에 삽입**

- **Parameter - position**
  - `‘beforebegin’` : element 앞에
  - `‘afterbegin’` : element 안에 가장 첫 번째 child
  - `‘beforeend’` : element 안에 가장 마지막 child
  - `‘afterend’` : element 뒤에
    - afterbegin 과 beforeend는 꼭 부모가 있어야 한다.

```jsx
//h1제목 뒤에 h2 추가하기
const h2 = document.createElement("h2");
h2.append("나는 두번째 제목");
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2);
```

> **`after` 요소 뒤에 삽입**

- Internet Explorer에서는 지원이 안 된다.

```jsx
//h1제목 뒤에 h3 추가하기
const h3 = document.createElement("h3");
h3.innerText = "나는 세번째 제목";
h1.after(h3);
```
