# Try/Catch 구문

> **try 문과 catch 문**

JavaScript의 오류 및 예외 처리를 하며, 오류를 잡아내 코드 실행이 정지되거나 중단되지 않도록 하는 역할을 한다.

→ 코드에는 예상 밖의 일이 많이 일어나는데 그것들로 인해 인터넷이 다운되거나 API 요청이 사라지는 등의 문제를 방지할 수 있다.

> **try 문:**

오류를 발생시키려 하거나 오류가 날 것으로 예상되는 코드를 try 블록으로 감싼다.

> **catch 문:**

예외나 오류가 발생했을 때 실행되는 코드를 넣는 부분이다.

```jsx
function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log(e);
    console.log("Please pass a string next time!");
  }
}
```
