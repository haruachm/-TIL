# 3. 프로젝트 뷰 구성, MainActivity.java 구조

![https://blog.kakaocdn.net/dn/tzxbE/btrNu6zRCD8/2pSrpfe7rp9k6sEEiIUYLk/img.png](https://blog.kakaocdn.net/dn/tzxbE/btrNu6zRCD8/2pSrpfe7rp9k6sEEiIUYLk/img.png)

### **프로젝트 뷰 구성**

**[ java ] 폴더**

자바 소스 파일들이 들어있는 폴더로, 폴더 안의 es.app.hello는 패키지의 이름이다.

**[ Gradle Scripts ] 폴더**

그레이들(Gradle)은 빌드 시에 필요한 스크립트이다.

**[ res ] 폴더**

각종 리소스들이 저장되는 폴더로, **drawable**은 해상도별로 아이콘 파일들이 저장.

**layout**은 화면의 구성을 정의, **values**엔 문자열과 같은 리소스가 저장

**menu**엔 메뉴 리소스가 저장

**[ manifest ] 폴더**

XML 파일로 앱의 전반적인 정보, 즉 앱의 이름이나 컴포넌트 구성과 같은 정보를 가진다.

## **MainActivity.java 파일 분석**

![https://blog.kakaocdn.net/dn/bHIs6a/btrNwoTS7hc/vKkddxgrEDK6QDziwk9IIK/img.png](https://blog.kakaocdn.net/dn/bHIs6a/btrNwoTS7hc/vKkddxgrEDK6QDziwk9IIK/img.png)

```java
package ex.app.hello;
```

패키지를 선언하는 문장으로, **패키지(package)는 서로 관련 있는 클래스들을 모아놓는 컨테이너**로서 위의 문장은 패키지를 하나 생성하여 현재의 클래스를 이 패키지에 넣겠다는 것을 의미한다.

```java
import androidx.appcompat.app.AppCompatActivity;
```

**import** 문장은 외부의 패키지나 클래스를 소스에 포함시킬 때 사용한다. **androix**가 붙은 패키지는 **JetPack에 속하는 클래스로 호환성을 위해** 최근에 사용이 권장되는 패키지를 뜻한다.

```java
public class MainActivity extends AppCompatActivity { ... }
```

- 클래스는 객체 지향 프로그래밍에서 가장 기본이 되는 최소 단위이다. 액티비티는 Activity 클래스로 생성된다. AppCompatActivity는 **Activity** **클래스**의 자식 클래스로, **AppCompatActivity**를 상속 받기 때문에 MainActivity 클래스도 액티비티가 된다.

**액티비티(Activity)**는 안드로이드에서 애플리케이션을 구성하는 컴포넌트 중 하나로, 사용자가 화면을 통하여 어떤 작업을 할 수 있도록 하는 컴포넌트이다. 애플리케이션은 여러 액티비티를 가질 수 있지만, 사용자는 오직 하나의 액티비티 하고 상호작용을 한다.

```java
@Override
```

**@Override**는 현재 메소드가 부모 클래스의 메소드를 **오버라이드(재정의)하였다는 것을 컴파일러에게 전달**한다. @Override를 쓰는 이유는 메소드의 이름 한글자라도 틀리면 메소드 오버라이드가 되지 않기 때문에, 컴파일러에게 오버라이드 할 것을 알려 재정의가 성립되지 않으면 경고 메시지를 호출하기 위함이다.

```java
protected void onCreate(Bundle savedInstanceState) { ... }
```

**onCreate( ) 메소드**는 안드로이드 시스템에서 **액티비티가 생성되는 순간에 딱 한번만 호출**된다. 한번 호출되기 때문에 모든 초기화와 사용자 인터페이스 설정을 onCreate( )에서 이루어져야 한다.

**savedInstanceState 매개변수**는 애플리케이션이 이전에 실행되었던 상태를 전달해 준다.

```java
super.onCreate(savedInstanceState);
```

부모 클래스인 **AppCompatActivity** 클래스의 onCreate( )를 호출한다. **super** **키워드**는 상속 관계에서 부모 클래스를 나타내는 키워드다.

```java
setContentView(R.layout.activity_main);
```

**setContentView(  )**는 액티비티의 화면을 설정하는 함수이다. **R.layout.activity_main**을 액티비티 화면으로 하겠다는 의미다. **점 연산자(.)**는 클래스 멤버를 참고할 대 사용하며, R 이라는 클래스에 layout이라는 멤버가 있고 그 안에 activity_main이 있을 것이다.
