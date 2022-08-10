# 함수(function)

→ JavaScript에서 함수는 Object 라고 한다.

> **다른 함수 표현식**

자바스크립트에서는 함수를 배열과 같은 **값의 하나로 간주**한다.

함수를 인수로 전달할 수 있으며, 숫자를 반환하듯 함수도 반환 값으로 변환할 수 있다.

```jsx
const add = function (x, y) {
  return x + y;
};
```

> **고차 함수**

: 다른 함수와 함께 동작하거나 다른 함수에서 작동하는 함수

→ 보통 다른 함수를 인수로 받아 어떤 작업을 하는 함수이자 함수를 반환할 수 있는 함수

- 함수를 실행할 때 rollDie()로 하면 변환된 값이 넘어가므로 callFunction 함수 안에서 실행되도록 rollDie만 넘긴다.

```jsx
function callFucntion(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callFucntion(rollDie);
```

> **반환 함수**

```jsx
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

makeBetweenFuc(40, 60)(50); //true 출력

//다른 방식 출력
let isSenior = makeBetweenFuc(40, 60);
isSenior(50); //true 출력
```

> **화살표 함수**

**함수를 정의**하는 최신 구문으로 인터넷 익스플로러에서는 실행되지 않는다.

즉, 화살표 함수는 **함수 표현식을 만들 때 사용**한다.

- 기존 함수 표현식 보다 간결하며 function 키워드 없이 함수 정의가 가능하다.
- 화살표 함수 하나만 단독으로 만들 수 없으며, 변수에 저장해서 사용한다.

```jsx
const add = (x, y) => {
  return x + y;
};

const square = (num) => {
  return num * num;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6 + 1);
};
```

⇒ 인수나 매개변수가 없는 함수라도 **( ) 괄호 자리는 차지**하고 있어야 한다.

⇒ 또한 매개변수가 **1개인 함수는 괄호를 생략**할 수 있다.

> **화살표 함수의 암시적 반환**

- 특정 상황에서는 return 키워드를 뺄 수 있다.
- 중괄호를 **괄호로** 바꾸면 화살표 함수를 포함한 구문이 **암시적 반환**(return 키워드 필요 없음)**을 만든다.**

⇒ 코드가 한 줄일 때 매우 유용하다

=⇒ **암시적 반환에서는 함수의 바디에 표현식이 하나만 있어야 한다**. 그 표현식에 맞는 값을 반환한다.

```jsx
const add = (a, b) => a + b;
//암시적 반환- 괄호 없어도 됨
```

```jsx
//보통의 함수
const isEven = function (num) {
  return num % 2 === 0;
};

//화살표 함수
const isEven = (num) => {
  return num % 2 === 0;
};

//화살표 함수인데 중괄호 생략
const isEven = (num) => {
  return num % 2 === 0;
};

// 괄호를 사용해 return 키워드 없앰
const isEven = (num) => num % 2 === 0;

// 암시적 반환을 사용한 한줄 코드
const isEven = (num) => num % 2 === 0;
```

> **기존 함수 화살표 함수로 바꿔보기**

```jsx
const movies = [
  {
    title: "Amedeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

//기존 함수 사용
const scores = movies.map(function (mov) {
  return `${mov.title} :  ${mov.score / 10}`;
});

//화살표 함수 사용
const scores = movies.map((mov) => {
  return `${mov.title} :  ${mov.score / 10}`;
});

//암시적 반환 사용
const scores = movies.map((mov) => `${mov.title} :  ${mov.score / 10}`);
```

> **콜백 함수**

→ 이름 그대로 **때가 되면 나중에 호출**되는 함수

→ 콜백 메서드란 다른 **함수에 인수로 전달**되는 함수

→함수를 등록하기만 하고 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출하는 함수
