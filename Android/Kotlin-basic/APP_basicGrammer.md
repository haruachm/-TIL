> **보일러 플레이트 코드(Boilerplate code)란?**

별 수정 없이 반복적으로 사용되는 코드로 실행할 수 있게 이미 만들어져 있는 코드를 말한다.

```kotlin
package kr.tutorials.kotlinbasics

fun main() {
    var myName = "Hwan"
    val notChange = "Jaemin"
    myName = "Minsu"
    notChange = "change"
print(myName)
}
```

- **fum main() {}** : **fun**은 함수를 뜻하며 **main**은 앱 시작점을 알려주는 특별한 함수
- var & val : 변수를 선언하며, var는 중복 지정이 가능하나 val는 값 변경 불가능
