# REST 매개변수

### 인수객체 arguments

arguments 객체는 **함수에 전달된 인수에 해당**하는 Array 형태의 객체이다.

- arguments 객체는 모든 함수 내에서 이용 가능한 지역 변수이다.
- 함수 내에서 모든 인수를 참조할 수 있으며 호출할 때 제공한 인수 각각에 대한 항목을 갖고 있다.

⇒ **`arguments` 인수 객체는 모든 인수를 자동으로 모아준다.**

→ 그러나 배열은 아니기 때문에 배열의 기능을 사용할 순 없다.

```jsx
function sum() {
  console.log(arguments);
}
```

→ 인수를 넣으니 인덱스로 값들이 순서대로 나열되어 있다.

⇒

![Untitled (1)](https://user-images.githubusercontent.com/85959639/185751403-42e79c90-c9ce-481f-9e68-6f9f8e30eb53.png)


### REST 매개변수가 필요한 이유

아래와 같이 코드를 작성하면,

→ **인수 객체가 배열이 아니어서** 작동하지 않으며 reduce를 사용할 수 없다.

→ 콘솔에서는 arguments.reduce가 함수가 아니라고 출력

**⇒ 인수 객체는 배열이 아니기 때문에 나머지 연산자가 필요하다.**

```jsx
function sum() {
  return arguments.reduce((total, element) => total + element);
}

//사용 불가
```

![Untitled (2)](https://user-images.githubusercontent.com/85959639/185751412-eb8624d2-8666-43da-a1d1-97475e43f7da.png)

### REST 매개변수

> 나머지 매개변수는 점 세개 **…** 로 만들고 매개변수 목록에 함께 사용한다.

> **나머지 매개변수는 화살표 함수에서 사용할 수 없다.**

> 스프레드와 다르게 펼치는 것이 아닌 **모아주는 기능**을 한다.

→ arguments는 배열과 비슷한 역할을 하지만 배열은 아니기 때문에 REST 매개변수를 사용해 배열을 이용한다.

→ REST 매개변수를 사용하면 **남아 있는 인수를 모두 모으고 배열**로 나타낸다.

```jsx
function sum(nums) {}
sum(1, 2);
//위와 같이 작성하면 매개변수가 하나로
//sum(1, 2)를 호출해도 2는 무시가 된다.

function sum(...nums) {}
sum(1, 2, 3, 4, 5);
//REST 매개변수를 사용하면 배열로 묶는다

function sum(...nums) {
  return nums.reduce((total, element) => total + element);
}
//가능하다.
```

> **사용예시**

→ 나머지 매개변수를 모으기 때문에 나머지 매개변수라고 한다.

```jsx
function medal(gold, silver, ...everyone) {
  console.log(`Gold : ${gold}`);
  console.log(`Silver : ${silver}`);
  console.log(`Everyone : ${everyone}`);
}

medal("hwan", "minsu", "yeju", "minjeong", "lalal", "haha");

//출력 : Gold : hwan
//Silver : minsu
//Everyone : yeju,minjeong,lalal,haha
```
