# 메서드(Method)

→ JavaScript에서 함수는 Object 라고 한다.

## **메서드(methods)란?**

메서드는 객체에 종속된 특성으로 함수에 포함되는 개념이다.

즉, **메서드는 객체에 속성으로 추가된 함수이다**.

- 메서드 이름 앞에 점을 찍어 사용한다.
- 모든 메서드는 함수이지만 **모든 함수가 메서드는 아니다**.

```jsx
const myMath = {
  PI: 3.14159,
  sqaure: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};
```

아래와 같이 function 키워드를 생략할 수 있음

```jsx
const myMath = {
  PI: 3.14159,
  sqaure(num) {
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};
```

### 콜백 메서드란(Callback methods)란?

다른 함수가 실행을 끝낸 뒤에 실행되는 함수로 함수를 인수로 넘길 수도 있는데 이것이 콜백 메서드이다.

→

---

# 콜백 메서드

### **forEach 메서드**

함수를 인수로 받아들이는 메서드로 for of 루프가 등장하기 전에 많이 쓰인 메서드이다.

- 배열 안의 item 각각에 대해 **함수와 코드를 한 번씩 실행**한다
  - 어떤 함수를 넣든 상관없이 함수가 아이템별로 한 번씩 호출된다.
  - 각각의 아이템이 함수에 자동으로 전달된다.

```jsx
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (n) {
  console.log(n);
});
```

해당 forEach 메서드는 요샌 for of 루프로 쓴다.

→ 길이도 짧고 읽기도 편하다

```jsx
for (let n of numbers) {
  console.log(n);
}
```

### **Map 메서드**

→ “ Map은 콜백 함수를 수령해 배열의 요소당 1번씩 실행한다는 점에서 forEach와 비슷하다.

⇒ 그러나 차이점은 **콜백의 반환 값을 이용해서 새로운 배열을 생성**한다는 점이다.

즉, 배열을 다른 상태로 매핑한다.

- 콜백 함수에서 돌아오는 반환 값 무엇이든 Map 메서드는 그것을 받아 새로 생성한 배열에 추가하고 반환한다.
  - 기존 값은 변경하지 않으면서 새로운 배열을 만든다. ⇒ **복사본을 형성한다.**

```jsx
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mul = numbers.map(function (num) {
  return num * 2;
});

console.log(mul);
//output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
```

- 아래와 같이 사용하면 title만 모여있는 새로우운 배열을 생성할 수 있다.

```jsx
const movie_title = movies.map(function (movie) {
  return movie.title;
});
```

⇒ 데이터를 두 배 늘린다거나 데이터의 일부를 가져올 때 사용된다.

### **setTimeout() / setInterval() / clearInterval() 메서드**

콜백 함수를 전해줘야 하지만 배열 메서드와는 상관 없는 함수이다.

> 이 함수들은 **실행을 연기하고, 대기하고, 중단하고, 추후 날짜로 실행을 연기하거나 또는 기본적으로 작업 일정을 정한다.**

> **setTimeout 함수**

- 2가지 인수를 전달
  1. **콜백 함수**
  2. **함수의 실행을 연기 시킬 시간**

→ **2번째 인수의 밀리 초 시간이 흐른 후에 1번째 인수의 함수를 1회 실행시키는 함수이다.**

```jsx
setTimeout(() => {
  console.log("Hello!");
}, 3000);
```

> **setInterval 함수**

- 2가지 인수를 전달
  1. **콜백 함수**
  2. **함수의 실행을 반복할 간격 시간**

→ **콜백을 매 특정 밀리 초마다 호출하는 함수**이다. 즉, 인터벌을 두고 반복한다.

```jsx
setInterval(() => {
  console.log(Math.floor(Math.random() * 20));
}, 2000);
```

⇒ **호출할 때마다** setInterval( ) 함수는 설정해놓은 인터벌에 해당하는 **ID 값을 반환**한다.

→ **해당 ID 값으로 중단하고 싶은 함수를 지정**할 수 있다.

> **clearInterval 함수**

→ setInterval로 설정한 것을 종료시킬 수 있는 함수이다.

⇒ **clearInterval(id값)** 으로 사용한다.

- 페이지가 열린 동안 작업이 끝없이 반복되는 걸 방지한다.

### Filter 메서드

**Filter**은 요소로 구성된 배열에서 필터링 하거나 부분 집합을 모아 **새 배열을 만들 때 사용**한다.

→ **원본 배열은 바뀌지 않는다.**

⇒ 평점이 가장 높은 아이템이나 오래된 아이템, 새로운 아이템 등을 필터링 할 때 유용하다.

> filter 메서드 첫번째 인자로 콜백 함수를 전달해 참이나 거짓을 리턴 받는다. → 불리언 함수

> 그 콜백 함수가 어떤 요소에 대해 true 값을 반환하면 그 요소는 필터링 된다.

> Filter 메서드를 통해 **함수를 전달**해서 참이나 거짓을 반환하고 지정된 요소에 대해 참이 반환되면 해당 요소는 **필터링** 되어 만들어진 새 배열에 추가된다.

```jsx
const movie = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Goding On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1996,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

const goodMovies = movie.filter((m) => m.score > 70);
const bedMovies = movie.filter((m) => m.score <= 70);
const recentMovies = movie.filter((m) => m.year > 2000);
```

- filter 를 하게 되면 객체들의 배열이 나온다. 원하는 값들의 배열을 얻기 위해 **filter와 map 메서드를 함께 사용**한다.

→ 3번째 코드에서 filter와 map을 줄여 한 줄로 표현할 수 있다.

```jsx
const goodMovies = movie.filter((m) => m.score > 70);
const goodTitles = goodMovies.map((m) => m.title);
const gdTitles = movie.filter((m) => m.score > 70).map((m) => m.title);
```

### Every 메서드

새 배열을 반환하는 map, filter와는 달리 불리언 메서드로 **항상 참이나 거짓을 반환**한다.

**→ 테스트 하는 방법으로 사용**

→ 모든 각각의 요소가 해당 콜백에서 참을 반환하는지 검사

- 배열 내의 모든 요소가 every를 통해 테스트를 거친다.
- **함수를 인수로 전달**하면 **모든 요소**가 해당 함수로 전달되어 **참**을 반환하면 호출된 전체 every 함수가 참을 반환한다.
  > **하나가 콜백에서 거짓을 반환**하면 전체 **every가 거짓**이 된다.

→ 아래의 배열은 모두 75를 넘으므로 참을 반환한다.

⇒ 그러나 75 이하의 수가 **1개라도 있으면** false를 반환

```jsx
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];
exams.every((score) => score >= 75);
```

### Some 메서드

요소 중 **하나 또는 일부**가 테스트를 통과하는지 여부를 테스트한다.

→ some에서는 하나 이상인지 여부만 본다.

⇒ 아래 코드는 75점보다 높은 점수가 최소 한 개 이상 있으면 true를 반환한다.

```jsx
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];
exams.some((score) => score >= 75);
```

⇒ every와 some 모두 참이나 거짓을 반환하며, 전달해야 하는 콜백 함수 또한 참이나 거짓을 반환해야 한다.

### Reduce 메서드

**배열을 가져다가 점차 줄여가면서 마지막에는 결국 하나의 값만 남기는 메서드**이다.

→ Reduce는 자동적으로 배열 안에 있는 모든 요소를 처리하거나 하진 않는다.

> **Reduce 함수 예시**

- 첫 번째 매개변수에서 첫 번째는 ‘**총 합계**’를 나타낸다.
  ⇒ 이는 기본적으로 **줄여나가야 하는 대상**이다.
- 첫 번째 매개변수에서 두 번째는 ‘**각각의 개별 요소**’를 나타낸다.
- 두 번째 매개변수는 **콜백을 전달**해야 한다.
- **return 값**으로 **반환된 값**은 **다음 번 순회에 첫 번째 매개변수에서 accumulator에 사용**된다.

```jsx
[3, 5, 7, 8, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

//암시적 반환을 사용할 수도 있다.
const total = prices.reduce((total, element) => total + element);
```

→ accumulator 가 3에서 시작하고 currentValue가 5에서 시작해서 합계가 8, 8은 다음 accumulator에 사용된다.

+> 반환된 값은 다음 번에 순회하면서 즉, **함수가 다음에 호출될 때 그 다음 번 순서에서 사용**된다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1d7b70ef-1243-42f7-951e-15a83eda7efb/Untitled.png)

> **Reduce 함수 사용하기**

```jsx
const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

let sum = 0;
for (let p of prices) {
  sum += p;
}
console.log(sum);

let red = prices.reduce((sum, next) => sum + next);
console.log(red);
```

> **Reduce 함수**는 **최솟값, 최댓값**을 구할 때도 사용이 가능하다.

```jsx
const minPrice = prices.reduce((min, price) => {
  if (min > price) return price;
  else return min;
});
```

> 첫 번째 매개변수 accumulator를 통해서 **시작하는 초기포인트를 지정**할 수 있다.

→ 매개변수를 하나 더 추가한다. ⇒ 이는 reduce 함수의 초기 값이 된다.

```jsx
const evens = [2, 4, 6, 8, 10];

evens.reduce((sum, num) => sum + num, 100);
//결과 : 130
//매개변수를 하나 더 준다
```
