# 스프레드 구문

### 스프레드란?

> **Spread(전개)**는 배열과 같이 반복 가능한 객체를 전개 구문을 사용해서 확장하는 것을 말한다.

- **전개 구문**을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 **인수** (함수로 호출할 경우) 또는 **요소** (배열 리터럴의 경우)**로 확장**하여, 0개 이상의 키-값의 쌍으로 **객체를 확장**시킬 수 있다.
  - → **어떤 것을 가져와 펼친다(전개)** 는 의미.

### 스프레드 사용 이유

- Math.max(배열)을 넣으면 여러 값이 들어 있는 배열을 주기 때문에 어떻게 출력해야 할지 몰라 사용할 수 없다.
  - **즉, 인수를 따로따로 넣어야 한다.**
    - ⇒ 이때 전개가 필요하다
- 스프레드는 배열 뿐만이 아니라 반복 가능한 객체는 모두 전개 가능하다
  → ex) 배열, 문자열
- 라이브러리나 React 도구로 작업할 때 객체 전개가 필요하다.

### 배열 및 리터럴 스프레드 구문

- 매개변수 앞에 **...**을 써서 전개를 한다.
  - …을 사용하면 해당 객체를 펼치고 인수로 따로따로 객체의 요소가 들어가게 된다.

```jsx
const nums = [1, 3, 5, 9, 11, 13, 15];

Math.max(...nums);
//매개변수 앞에 ...을 써서 전개를 한다.
console.log(...nums);
//배열에만 전개 구문을 사용할 수 있는 것이 아니다.

console.log(..."hello");
//출력: h e l l o
```

- 배열을 전개해서 펼치면 같은 배열을 **복사하여 새로운 배열을 만든 것**이다.
  - 아래 코드에서 cats를 복사해 새로운 배열 allPets를 만들어, 요소를 추가를 하게 되면 서로에 영향을 끼치지 않는다.

```jsx
const cats = ['Red', 'Blue', 'Yellow'];
const dogs = ['Choco', 'Terry'];

const allPets = [...cats];
//고양이 배열 전개해서 복사

const allPets = [...cats, ...dogs];
//고양이와 개 2개 배열을 묶어서 새로운 배열을 만듦
//출력 : (5) ['Red', 'Blue', 'Yellow', 'Choco', 'Terry']

[1, 2, 3, ...cats, ...dogs, "Sathy"]
//위와 같이 값을 추가해서 전개도 가능하다.

[..."hello"]
//출력 : (5) ['h', 'e', 'l', 'l', 'o']
```

### 객체 스프레드 구문

> 객체에 있는 특성을 복사해서 **새로운 객체를 만든다**.

- 객체 여러 개를 한 객체로 묶을 수 있고, 기존의 객체를 이용해 객체를 새롭게 만들어 수정할 수도 있다.

```jsx
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const mixFeline = { ...feline, color: "white" };
//feline을 복사해 새로운 객체를 만들고 color을 추가했다.
```

> 아래와 같이 family 특성이 **중복되어 있을 때는 순서가 중요**하다.

→ 충돌이 있을 때는 뒤에 전개된 특성이 덮기 때문에 마지막이 중요하다.

```jsx
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine };
```

> 스프레드는 배열을 펼칠 때 많이 사용된다.

```jsx
{...[2, 4, 6, 8]}

//출력 : {0: 2, 1: 4, 2: 6, 3: 8}
//인덱스를 키로 사용하고 배열의 값을 값으로 사용한다.
```

### 실제 사용 예시

> 웹사이트 회원가입을 통해 받은 데이터로 새로운 객체를 만들 때 사용

```jsx
const dateFromForm = {
  email: "paran@gmail.com",
  password: "top123!",
  username: "frank",
};

const newUser = { ...dataFromForm, isAdmin: false };
```
