```dart
(매개변수) => {}
```

ex)

```dart
void main() {
  List<int> num = [1, 2, 3, 4, 5];

  //람다함수
  final numSum = num.reduce((value, element) => value + element;

  print(numSum);
}

// 15
```

---

### **try ... catch 구문**

**try...catch 구문**은 try{}catch 사이에 코드를 작성하고, 해당 코드에 **에러가 발생**했을 때 try에 있는 **코드가 실행되지 않고** 바로 catch 구문으로 넘어가게 된다.

즉, **시도(try) 해보고 에러를 잡다(catch)라는 뜻의 구문**이다.

즉, **시도(try) 해보고 에러를 잡다(catch)라는 뜻의 구문**이다.

```dart
void main() {
  try{
    const String company = '삼성';
    print(company);
  }catch(e){
    print(e);
  }
}
```
