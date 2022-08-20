> **구조 분해란?**

값을 해체하고, 꺼내고, 선정하는 간편한 방식으로 배열이나 객체에 사용할 수 있다.

## 배열 구조 분해

‘**[ ] = 배열**’을 선언해 배열 요소를 새로운 변수 형태로 분해할 수 있다.

- **순서를 기반**으로 새로운 변수를 만든다.
- 대괄호를 통해 배열에서 분해한 것을 어떻게 지칭할지 정한다.
- **나머지 연산자 …**를 사용해 나머지 값들을 저장할 수 있다.

ex) 1위와 2위에겐 보상을 주고 나머지는 별개의 변수로 분리

```jsx
const pinball_scores = [999, 869, 706, 505, 447, 323, 232, 122];

const firstScore = scores[0];
const secondScore = scores[1];
//위와 같이 배열을 분해할 수 있지만, 아래와처럼 분해하면 간단히 사용가능

const [gold, silver, bronze, ...everyoneElse] = scores;
//첫 번째 변수 gold에는 999, 새로운 변수 silver에는 869가 저장
//나머지 값들은 everyoneElse에 저장
```

## 객체 구조 분해

객체 분해는 **순서를 따르지 않기** 때문에 배열 구조 분해보다 실용적이다.

- 일일이 객체를 작성할 필요 없으며, **중괄호 {} 를** 사용해 작성한다.
- 배열 분해와 달리 순서가 아닌 **특성의 이름이 중요**하다.
- 변수의 이름을 특성의 이름으로 선언한 것과 같다.
- 객체 자체를 바꾼 것이 아닌 복사해서 새로운 변수를 선언하는 것이다.

```jsx
const user = {
  email: "user@naver.com",
  password: "userskrlas123",
  firstName: "U",
  lastName: "ri",
  born: 2022,
  died: 2056,
  city: "Seoul",
  state: "Korea",
};

const { email, firstName, lastName, born, died, city, state } = user;
//객체의 특성 이름과 같은 새로운 변수를 생성한 것

const { born: birthYear, died: deathYear } = user;
//위와 같이 변수의 이름을 정해서  객체 분해가 가능하다.
```

> **변수명 변경**

- : 콜론을 사용해 변수명 변경이 가능하다.

```jsx
const { born: birthYear, died: deathYear } = user;
//위와 같이 변수의 이름을 정해서  객체 분해가 가능하다.
```

> **디폴트 값 추가**

- 분해 과정에 변수 옆에 디폴트 값을 줄 수 있다.
- 객체 안에 해당 값이 있다면 디폴트 값을 부여해줘도 적용되지 않는다.

```jsx
const user2 = {
  email: "u2@naver.com",
  firstName: "P",
  lastName: "atty",
  born: 2000,
  city: "Seoul",
  state: "Korea",
};

const { city, state, died } = user2;
//객체에 없는 정보를 접근하므로 died 변수는 undefined를 갖는다.

const { city, state, died = "N/A" } = user2;
//객체에 died가 없으면 N/A라는 디폴트 값을 같도록 한다.
```

## 매개변수 분해

함수를 정의할 때 괄호 안에 매개변수를 작성하면 전달되는 값의 구조를 분해할 수 있다.

- 객체에 주로 사용되는 방법
-

ex) 사용자 객체의 정보를 받아 값을 출력

> **기존의 방식으로 함수 선언할 때**

```jsx
function fullName(user) {
  return `${user.firstName} ${user.lastName}`;
}
```

> **객체 분해를 사용했을 때**

```jsx
function fullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
```

> **매개변수 분해를 사용했을 때**

- 다른 정보는 사용하지 않고 특정 정보만 필요할 때

```jsx
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

fullName(user); //호출
```

> **디폴트 값 부여**

- 객체의 값이 없을 때 디폴트 값 출력

```jsx
function fullName({ firstName, lastName = "asdadsd" }) {
  return `${firstName} ${lastName}`;
}
```

> 사용 예시 / 영화 평점

```jsx
const movies = [
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
];

//기존방식
movies.filter((movie) => movie.score >= 90)

//매개변수 자리에 구조 분해 사용
movies.filter(({score}) => score >= 90)

//기본 방식으로 map( ) 사용
movies.map((movie) => {
  return `${movie.title}는 점수가 ${movie.score}이고, ${movie.year}년에 만들어졌습니다.`;
});

```
