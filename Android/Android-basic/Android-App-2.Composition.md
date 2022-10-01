# 2. 안드로이드 애플리케이션 구성

### **컴포넌트(Component)**

안드로이드 애플리케이션은 컴포넌트들로 구성된다.

컴포넌트들은 **하나의 독립된 entity**로 존재하고, 정해진 역할을 수행한다.

각 컴포넌트는 애플리케이션을 시작하는 진입점을 가질 수 있으며 4가지 종류의 컴포넌트가 있다.

**1. Activity ( 액티비티 )**

**2. Service ( 서비스 )**

**3. Broadcast receiver ( 방송 수신자 )**

**4. Content provider ( 컨텐트 제공자 )**

### **액티비티(activity)란?**

액티비티는 사용자 인터페이스 화면을 가지고 하나의 작업을 담당하는 컴포넌트이다.

하나의 애플리케이션은 여러 개의 액티비티를 가지고 있으며,

앱에서 화나의 화면은 하나의 액티비티이다.

모든 액티비티는 Activity 클래스를 상속 받는다.

![https://blog.kakaocdn.net/dn/bkS788/btrNvxcM8Mk/yrFokVqmmaRUZ7Y9Xj7U11/img.png](https://blog.kakaocdn.net/dn/bkS788/btrNvxcM8Mk/yrFokVqmmaRUZ7Y9Xj7U11/img.png)

![https://blog.kakaocdn.net/dn/2BKXT/btrNu6GBhzP/RAk8WZ53Q4etR3gm5HofDk/img.png](https://blog.kakaocdn.net/dn/2BKXT/btrNu6GBhzP/RAk8WZ53Q4etR3gm5HofDk/img.png)

### **서비스(service)란?**

서비스란 백그라운드에서 실행되는 컴포넌트로 실행되는 작업이나

원격 프로세스를 위한 작업을 할 때 사용되며, 서비스는 사용자 인터페이스 화면을 가지지 않는다.

### **방송 수신자(broadcast receiver)란?**

방송을 받고 반응하는 컴포넌트로, BroadcastReceiver 클래스를 상속 받는다.

예로 배터리 상태가 낮다든지, 사진이 촬영되었다든지, 알림이 울렸다든지 하는 것을 알리기 위해 방송을 사용한다.

### **컨텐트 제공자(content provider)란?**

데이터를 관리하고 다른 애플리케이션에 데이터를 제공하는 컴포넌트이다.

데이터는 파일 시스템이나, SQLite 데이터베이스, 클라우드에 저장될 수도 있다.

컨텐트 제공자를 통하여 다른 애플리케이션은 데이터를 쿼리하거나 변경할 수 있다.

컨텐트 제공자는 CotentProvider 클래스를 상속받는다.

![https://blog.kakaocdn.net/dn/oGN5o/btrNwngehEU/dME7rqWXCKkjLfH0yo87y1/img.png](https://blog.kakaocdn.net/dn/oGN5o/btrNwngehEU/dME7rqWXCKkjLfH0yo87y1/img.png)

---

### **인텐트(intent)란?**

인텐트는 비동기적 메시지로, 애플리케이션의 의도를 적어서 안드로이드에 전달하면

안드로이드가 가장 적절한 컴포넌트를 찾아서 활성화하고 진행한다.

### **인텐트 사용 이유**

안드로이드 애플리케이션은 PC에서 실행되는 프로그램과 달리

여러 개의 **애플리케이션의 특정 컴포넌트를 공유하여 사용이 가능**하다.

만약, 만든 앱에서 카메라 기능이 필요하다고 하면, 사진 촬영 기능을 제공하는

기존의 카메라 애플리케이션의 기능을 사용할 수 있다.

여기서 원하는 컴포넌트를 안드로이드 안에서 찾아 실행하기 위해 **'인텐트(intent)'가 필요**하다.

---

### **애플리케이션 개발 절차**

**1. 사용자 인터페이스 작성**

XML을 이용하여 사용자 인터페이스 화면을 디자인한다.

**2. 자바 코드 작성**

자바를 이용하여 코드를 작성하는데, 직접 필요한 클래스를 작성하거나

안드로이드에서 제공하는 라이브러르 클래스를 가져다가 사용한다.

**3. 매니페스트 파일 작성**

애플리케이션을 구성하고 있는 컴포넌트를 기술하고 실행 시에 필요한 권한을 지정한다.
