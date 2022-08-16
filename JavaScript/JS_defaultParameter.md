# 디폴트 매개변수

### 1. 매개변수를 정의했는지 확인 후 디폴트 값 넣기

> **[옛날방식] _`if_ (변수 === undefined)` 확인 후 디폴트 값 넣기**
>
> - 이것은 옛날 방식이며 매개변수가 여러 개 있으면 좋지 않은 방식이다.

```jsx
function rollDie(numSides) {
  if (numSides === undefined) {
    numSides = 1;
  }
  return Math.floor(Math.random() * numSides) + 1;
}
```

### 2. 등호와 디폴트 값을 매개변수 목록에 넣기

> 아래와 같은 방식으로 디폴트 매개변수를 여러 개 쓸 수 있지만 **순서에 유의**해야 한다.

```jsx
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}
```

- 순서에 유의

```jsx
function greet(msg = "Hello", person) {
  console.log(`${msg}, ${person}`);
}

//입력 : greet(hwan)
//출력 : hwan, undefined!
//=> 매개변수의 순서가 중요하다.
```
