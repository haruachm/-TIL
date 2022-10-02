# 6. 이벤트 처리, 이벤트 리스너, 리스너 인터페이스, 콜백 메소드

### **이벤트 구동 방식(event-driven) vs 폴링 방식(polling)**

일반적으로 그래픽 사용자 인터페이스에서 사용자의 입력을 받으려면 반드시 이벤트 구동 방식으로 처리하여야 한다.

이벤트 구동 방식이 아닌, 애플리케이션이 무한 루프를 돌면서 사용자의 입력을 기다리는 폴링(polling) 방식은 CPU의 파워를 엄청나게 낭비를 하기 때문에 최악의 방법이다.

그렇기에 안드로이드에서는 애플리케이션이 다른 작업을 하고 있다가 사용자의 입력이 발생하면 이벤트가 발생되고, 발생된 이벤트를 애플리케이션이 처리하는 **이벤트 구동(event-driven) 방식**을 사용한다.

---

## **안드로이드 이벤트 처리 방식**

### **1. XML 파일에 이벤트 처리 메소드를 등록하는 방법**

클릭 이벤트만 처리할 수 있으며, 버튼과 같은 위젯의 경우 간단하게 이벤트 처리가 가능하다.

### **2. 이벤트를 처리하는 객체를 생성하여 이벤트를 처리하는 방법**

이벤트를 처리하는 객체를 별도로 생성하여 위젯에 등록한다. 이벤트를 처리하는 가장 일반적인 방법으로 **익명 클래스와 람다식**으로 처리한다.

### **3. 뷰 클래스의 이벤트 처리 메소드를 재정의 하는 방법**

뷰 클래스의 이벤트 처리 메소드를 재정의한다. 커스텀 뷰(Custom View) 작성 방법으로 처리한다.

---

### **XML 파일을 이용한 버튼 이벤트 처리**

사용자가 버튼을 클릭하면, 클릭 이벤트가 발생한다. 이때 가장 많이 이용하는 방법은 **XML 레이아웃 파일에 이벤트 처리 메소드를 등록**하는 방법이다.

사용자가 버튼을 누르면 클릭 이벤트가 발생되고, 클릭 이벤트가 발생하면 레이아웃에 등록된 메소드가 자동으로 호출된다. <Button>의 요소의 onClick 속성에 이벤트를 처리하는 메소드 이름을 적는다.

그러면 클릭 이벤트가 발생하면 onClick 속성에 저장된 메소드가 호출된다.

![https://blog.kakaocdn.net/dn/doRzMQ/btrNAw4KOef/LSCBkK9FfqR0qDKvj3ATK0/img.png](https://blog.kakaocdn.net/dn/doRzMQ/btrNAw4KOef/LSCBkK9FfqR0qDKvj3ATK0/img.png)

![https://blog.kakaocdn.net/dn/c7hJO5/btrNv0TNDNt/11VMfzWGk0YF6HWKPjRhvk/img.png](https://blog.kakaocdn.net/dn/c7hJO5/btrNv0TNDNt/11VMfzWGk0YF6HWKPjRhvk/img.png)

MainActivity.java 파일 / XML 파일

**MainActivity.java 파일에 onClick 메소드는 3가지 조건**을 지켜야 한다.

1. public 이어야 한다.

2. void 반환형을 가진다.

3. View를 메소드 인수로 가진다. 클릭된 View 객체가 인수로 전달된다.

ex) 예시. 이미지 버튼 눌렀을 때 Toast 메시지 띄우기

![https://blog.kakaocdn.net/dn/blqohe/btrNAM0MgSP/x3ZkTeiW3tg1sFCoPQIQx0/img.png](https://blog.kakaocdn.net/dn/blqohe/btrNAM0MgSP/x3ZkTeiW3tg1sFCoPQIQx0/img.png)

![https://blog.kakaocdn.net/dn/bkmCte/btrNxeRkCcG/rurdDqzHKpJuT6juRpNMBK/img.png](https://blog.kakaocdn.net/dn/bkmCte/btrNxeRkCcG/rurdDqzHKpJuT6juRpNMBK/img.png)

![https://blog.kakaocdn.net/dn/rkkus/btrNwF9sUxg/yuklalOeXmLYLvrpysucnK/img.png](https://blog.kakaocdn.net/dn/rkkus/btrNwF9sUxg/yuklalOeXmLYLvrpysucnK/img.png)

ex) 예시. 이미지 버튼 눌렀을 때 Toast 메시지 띄우기

이미지 버튼을 눌렀을 때 아래의 Toast 메시지를 띄웠다.

```
public void onClick(View view) {
    Toast.makeText(getApplicationContext(), "재생 버튼이 눌러졌습니다",
                Toast.LENGTH_SHORT).show();
}
```

토스트 메시지를 살펴보면, 정적 메소드인 makeText( )를 호출하여 토스트 객체를 생성하고, show 메소드를 호출하여 메시지를 표시하였다.

makeText 메소드는 아래의 형태로 사용된다.

```
makeText ( Context context, CharSequence text, int duration)
```

**context**는 현재 애플리케이션의 콘텍스트를 의미하며, **text**는 표시하고 싶은 텍스트이고, **duration**은 지속 시간을 의미한다. duration 에는 LENGTH_SHORT와 LENGTH_LONG이 있다.

---

## **리스너 객체를 이용한 버튼 이벤트 처리하기**

이벤트를 처리하는 객체를 생성하여 위젯에 등록하는 방법이다. 이벤트를 처리하는 메소드들이 정의된 인터페이스를 **'이벤트 리스너 (event listener)'**라고 부른다.

이벤트 리스너를 구현하는 클래스를 정의하고, 이 **클래스의 객체를 생성하여 위젯에 등록**한다.

만약 위젯에 이벤트가 발생하면 등록된 이벤트 리스너 안의 **콜백 메소드가 자동적으로 호출**되는 방식이다.

| 리스너                     | 콜백 메소드      | 설명                                                                                                              |
| -------------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| View.OnClickListener       | onClick( )       | 사용자가 어떤 항목을 터치하거나 내비게이션 키나 트랙볼을 이용해항목으로 이동한 후에 엔터키를 눌러서 선택하면 호출 |
| View.OnLongClickListener   | onLongClick( )   | 사용자가 항목을 터치하여서 일정 시간 동안 그대로 누르고 있으면 발생                                               |
| View.OnFocusChangeListener | onFocusChange( ) | 사용자가 하나의 항목에서 다른 항목으로 포커스를 이동할 때 호출                                                    |
| View.OnKeyLister           | onKey( )         | 포커스를 가지고 있는 항목 위에서 키를 눌렀다가 놓았을 때 호출                                                     |
| View.OnTouchLister         | onTouch( )       | 사용자가 터치 이벤트로 간주되는 동작을 한 경우에 호출                                                             |

### **리스너 인터페이스**

리스너 인터페이스 안에는 오직 하나의 메소드만이 정의되어 있다.

만약 버튼이 클릭되는 경우에 발생하는 클릭 이벤트를 처리하려고 하면,

**OnClickListener** 인터페이스를 구현하는 객체를 생성하고,

버튼의 **setOnClickListener( )**을 호출하여서 버튼에 붙이면 된다.

```
Button button = (Button) findViewById(R.id.button_send);

button.setOnClickListener(new View.OnClickListener() {
    public void onClick(View v) {
    }
});
```

가장 많이 사용하는 방법은 **익명 클래스를 사용**하여서 이벤트를 처리하는 클래스를 정의하고

동시에 객체를 생성하는 방법이다.

---

### **리스너 객체 생성 방법**

리스너 인터페이스를 구현하는 클래스를 어떻게 작성하느냐에 따라 다양한 방법이 있다.

**1.** 리스너 클래스를 내부 클래스로 정의한다.

**2.** 리스너 인터페이스를 액티비티 클래스에 구현한다.

**3.** 리스너 클래스를 익명 클래스로 정의한다.

**4.** 람다식을 이용한다.

---

### **익명 클래스로 리스너 클래스 정의**

**익명 클래스(anonymous)**는 클래스 몸체는 있지만 이름이 없는 클래스로, 클래스를 정의하는 동시에 객체를 생성한다.

익명 클래스는 이름이 없으므로 한번만 사용이 가능하며, 코드의 양을 줄이는 장점이 있지만 표기법이 난해하다.

익명 클래스는 부모 클래스를 상속 받아 작성하거나, 인터페이스를 구현하여 작성할 수 있다.

new 키워드 다음에 **부모 클래스**가 우면 **부모 클래스에서 상속**을 받는다는 의미이고,

new 키워드 다음에 **인터페이스** 이름이 오면 그 **인터페이스를 구현**하는 클래스라는 으미이다.

![https://blog.kakaocdn.net/dn/ryQQo/btrNAwX1YZg/8q4xUWhiybOY5LnSrqiqa1/img.png](https://blog.kakaocdn.net/dn/ryQQo/btrNAwX1YZg/8q4xUWhiybOY5LnSrqiqa1/img.png)

![https://blog.kakaocdn.net/dn/IXJeF/btrNAwX16kn/okzEmHBkKDkOK2uOog8dBK/img.png](https://blog.kakaocdn.net/dn/IXJeF/btrNAwX16kn/okzEmHBkKDkOK2uOog8dBK/img.png)

---

###

### **이벤트 리스너 반환 값**

이벤트 리스너가 **true**를 반환하면, 자신이 모든 처리를 완료했다는 의미이다. 따라서 상위 클래스의 이벤트 처리 메소드는 호출되지 않는다.

하지만 **false**를 반환하면 처리를 완료하지 않았으므로 상위 이벤트 처리 메소드가 계속해서 처리할 수 있다.

그러니까, 이벤트 리스너가 **true**를 반환하는 것은 상위 이벤트 처리 메소드에 이벤트가 전파되는 것을 막는 의미가 있다.

---

## **람다식을 이용한 이벤트 처리하기**

Java 8부터 함수를 객체로 만들 수 있는 람다식이 지원된다.

람다식을 이용하면 익명 클래스를 사용하지 않고도 이벤트 처리기를 간단하게 작성할 수 있다.

**단,** 이벤트 리스너가 **하나의 메소드만을 가지고 있는 경우에만 가능**하다.

2개 이상의 메소드가 정의되어 있다면 익명 클래스를 사용하여야 한다.

**람다식(lambda expression)**은

나중에 실행될 목적으로 다른 곳에 전달될 수 있는 코드 블록이다.

람다식은 이름이 없는 함수라고 할 수 있으며, 간결하고, 함수가 필요한 곳에 간단히 함수를 전달할 수 있다.

**자바에서 람다식**은

**(argument) -> (body) 구문**을 사용하여 작성된다.

**익명 클래스 vs 람다식 비교**

**익명 클래스**

```
button.setOnClickListener(new View.OnClickListener() {
    public void onClick(View v) { v++; }});
```

**람다식**

```
button.setOnClickListener(e->{v++;});
```
