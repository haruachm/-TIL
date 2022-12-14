# this 키워드

> **this 키워드**

메서드에 있는 객체를 가리킬 때 this 키워드를 사용한다.

```jsx
const cat = {
  name: "hwan",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says MEOWWWW`);
  },
};
```

위에서는 cat이라는 객체 전체를 가리킨다.

그러나 항상 this가 해당 객체를 가리키진 않는다

→ this 값이 바뀔 수 있다. **사용된 함수의 호출 컨텍스트에 따라 값이 달라진다.**

⇒ 함수를 호출하는 방법에 달려있다.

> 메서드에 **this.**특성을 쓰면 **이 메서드가 정의하는 객체**를 가리키게 된다.

아래의 코드에서 meow2에서 **this는 cat을 가리키지 않는다.**

**→ 호출 컨텍스트의 차이**

⇒여기서는 **윈도우(Window) 객체**를 가리킨다. 이는 자바스크립트의 최상위 객체이다.

```jsx
const cat = {
  name: "hwan",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log(`${this.name} says MEOWWWW`);
  },
};

const meow2 = cat.meow;
```

**⇒ this 키워드의 기본 값은 윈도우 객체이다.**

## 화살표 함수와 ‘this’ 키워드

this 키워드를 사용하면 화살표 함수는 다르게 동작한다.

```jsx
const person = {
  firstName: "Han",
  lastName: "Woo",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

//출력 person.fullName()
//출력 : Han Woo
```

→ 위 코드의 경우 this 키워드가 함수 왼쪽에 있는 객체인 ‘person’을 가리킨다.

⇒ 여기서 this 키워드는 **함수를 실행하는 방법**과 관련이 있다.

> 그러나 **화살표 함수**를 사용하면 **undefined**를 출력한다.

⇒ 화살표 함수 안에 있는 **this 키워드는 함수가 만든 범위**를 가리키게 된다.

즉, 지금 this 키워드는 **윈도우 객체**를 가리킨다.

```jsx
const person = {
  firstName: "Han",
  lastName: "Woo",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};

//person.fullName()
//출력 : 'undefined undefined'
```

> **실행 컨텍스트**와 관련이 있는 오류

function 에 window 객체 메서드인 setTimeout( )에 그냥 함수를 사용하면 윈도우 객체를 가리키며 오류를 출력한다.

```jsx
const person = {
  firstName: "Han",
  lastName: "Woo",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(function () {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};

//출력 : window 객체를 가리킨다. 또한 오류를 발생시킨다.
//Uncaught TypeError: this.fullName is not a function at app.js:10:24 가 나옴.
```

이를 화살표 함수로 변환시켜 적용해보자.

⇒ 화살표 함수는 **함수가 만든 범위에 상속되는 this 키워드 값**과 같다.

⇒ 그 말은 this 키워드가 함수 안 this 키워드와 같다는 말이다.

```jsx
const person = {
  firstName: "Han",
  lastName: "Woo",
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
  shoutName: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.fullName());
    }, 3000);
  },
};

//결과 출력 : person 객체를 가리킨다.
```

<aside>
🟥 **결론** : this 키워드는 화살표 함수에서 다르게 동작하며, **메서드를 정의하려고 할 땐 화살표 함수를 사용하면 문제**가 발생할 수 있음을 주의하자. **일반 함수와 달리 화살표 함수에서 this 키워드는 다르게 동작한다.**

</aside>
