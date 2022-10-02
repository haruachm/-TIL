# 5. UI, View, View클래스, id, 크기 단위, margin, padding, visibility, rotation

## **사용자 인터페이스(UI)**

![https://blog.kakaocdn.net/dn/cdebLf/btrNwjyEZ2u/94MKcjKUKwVYM09LBIHSIK/img.png](https://blog.kakaocdn.net/dn/cdebLf/btrNwjyEZ2u/94MKcjKUKwVYM09LBIHSIK/img.png)

사용자 인터페이스(UI, User Interace)의 요소는 크게 **뷰(View)**와 **뷰 그룹(ViewGroup)**으로 나눌 수 있다.

뷰는 화면을 구성하는 요소인 위젯이고, 뷰 그룹은 위젯들을 담는 컨테이너이다. 뷰 그룹은 레이아웃이라고 부른다.

안드로이드의 **모든 위젯은 View 클래스를 상속**하여 만들어진다. **레이아웃은 ViewGroup 클래스를 상속**받는다. 상속의 계층은 아래 사진을 참고하면 된다.

![https://blog.kakaocdn.net/dn/QLzG6/btrNAxCvPFa/E6p67R6gsy8FbDWL4MCNQ1/img.png](https://blog.kakaocdn.net/dn/QLzG6/btrNAxCvPFa/E6p67R6gsy8FbDWL4MCNQ1/img.png)

---

### **UI 작성 절차**

1. 레이아웃인 뷰 그룹을 생성

2. 뷰 그룹에 필요한 뷰들을 추가

3. setContentView( )를 호출해 작성된 UI를 액티비티의 화면으로 설정

setContentView( )은 액티비티의 화면을 설정하는 메소드이다.

### **UI를 작성하는 방법**

1. XML 을 이용하여 인터페이스 기술

2. 자바 코드만으로 인터페이스 기술

3. 비주얼 도구 사용

![https://blog.kakaocdn.net/dn/ctQDvZ/btrNvMuziXW/bJ9SBlx0yURZihB0HJAOI0/img.png](https://blog.kakaocdn.net/dn/ctQDvZ/btrNvMuziXW/bJ9SBlx0yURZihB0HJAOI0/img.png)

![https://blog.kakaocdn.net/dn/JjONU/btrNwFVRzba/2a5lb4svMOTSmA1UZzs411/img.png](https://blog.kakaocdn.net/dn/JjONU/btrNwFVRzba/2a5lb4svMOTSmA1UZzs411/img.png)

![https://blog.kakaocdn.net/dn/c3YaIa/btrNwo7TRxM/W2dsMOSted9HKHUg25JZd1/img.png](https://blog.kakaocdn.net/dn/c3YaIa/btrNwo7TRxM/W2dsMOSted9HKHUg25JZd1/img.png)

XML / 자바 코드 / 비주얼 도구

---

## **View 클래스**

View 클래스는 모든 위젯들의 부모 클래스로, View 클래스가 가진 필드나 메소드를 상속 받기 때문에 모든 위젯에서 공통적으로 사용이 가능하다.

![https://blog.kakaocdn.net/dn/bhXnwx/btrNCf2DCNp/kD9FERcmZhdx3sdboj2jj0/img.png](https://blog.kakaocdn.net/dn/bhXnwx/btrNCf2DCNp/kD9FERcmZhdx3sdboj2jj0/img.png)

위젯은 클래스로 생성되고 클래스 안에는 많은 속성들이 변수로 저장된다. 해당 변수는 자바 코드에서 설정자 메소드를 통해 변경이 가능하고, XML 파일에서 특정 값을 지정할 수 있다.

대략적인 View 클래스의 필드와 메소드를 보자.

---

### **id**

모든 위젯은 정수로 된 id(식별자)를 가질 수 있다.

```
android:id="@+id/my_button"
```

위젯에 식별자를 부여해, 자바 코드에서 findViewById( ) 메소드로 위젯을 찾아 착업을 할 수 있다.

```
Button button1;
button1 = (Button) findViewById(R.id.my_button);
```

![https://blog.kakaocdn.net/dn/OaQOj/btrNvNAi4jV/guLXvKZpFm0g6wikdwatzK/img.png](https://blog.kakaocdn.net/dn/OaQOj/btrNvNAi4jV/guLXvKZpFm0g6wikdwatzK/img.png)

![https://blog.kakaocdn.net/dn/EfD2D/btrNyGzYYBd/7P00X9kINSckjaWcZlPUZ1/img.png](https://blog.kakaocdn.net/dn/EfD2D/btrNyGzYYBd/7P00X9kINSckjaWcZlPUZ1/img.png)

### **위젯의 크기와 위치**

![https://blog.kakaocdn.net/dn/ADFqO/btrNw93sJLJ/0snKq2spR0uvEFKVV8OIY0/img.png](https://blog.kakaocdn.net/dn/ADFqO/btrNw93sJLJ/0snKq2spR0uvEFKVV8OIY0/img.png)

위젯의 크기와 위치는 레이아웃 객체에 의하여 전적으로 결정된다. 픽셀 단위로 지정할 수도 있지만 match_parent나 wrap_content와 같은 값을 사용하기도 한다.

| 상수         | 설명                                  |
| ------------ | ------------------------------------- |
| match_parent | 부모의 공간을 전부 차지한다           |
| wrap_content | 뷰가 나타내는 내용물의 크기에 맞춘다. |
| 숫자 지정    | 크기를 정확히 지정한다.               |

![https://blog.kakaocdn.net/dn/pebU9/btrNAwRcTDn/gzyjsokSh49DxTSioEjWF1/img.png](https://blog.kakaocdn.net/dn/pebU9/btrNAwRcTDn/gzyjsokSh49DxTSioEjWF1/img.png)

**위젯의 실제 위치**는 **getLeft( )**와 **getTop( )**으로 얻을 수 있으며,

**실제 너비와 실제 높이**는 **getWidth( )**와 **getHeight( )**로 얻을 수 있다.

---

### **뷰의 크기 단위**

| 단위                             | 설명                                                                                                                                                                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| px (pixels)                      | 화면의 실제 픽셀을 나타낸다. px은 장치마다 화면 밀도가 다르기 때문에 권장하지 않는다.                                                                                                                                |
| dp (density-indepentdent pixels) | dp는 화면의 밀도가 160dpi 화면에서 하나의 물리적인 픽셀을 말한다.크기를 160dp로 지정하면 화면의 밀도와는 상관없이 항상 1인치가 된다. dp로 뷰의 크기를 지정하면 화면의 밀도가 다르더라도 항상 동일한 크기로 표시된다. |
| sp (scale-indepentdent pixels)   | 화면 밀도와 사용자가 지정한 폰트 크기에 영향을 받아서 변환된다. 이 단위는 폰트 크기를 지정하는 경우 권장한다.                                                                                                        |
| pt (points)                      | 1/72 인치를 표시한다.                                                                                                                                                                                                |
| mm (millimeters)                 | 밀리미터를 나타낸다.                                                                                                                                                                                                 |
| in (inches)                      | 인치를 나타낸다.                                                                                                                                                                                                     |

---

### **위젯의 표시 여부**

위젯의 표시여부는 **visibility** 속성을 다음 중 하나로 설정하면 된다.

뷰를 그리는 것은 안드로이드 프레임워크의 책임으로, 프레임워크는 뷰들의 트리를 순회하면서 각 뷰들을 그린다.

부모 뷰들이 먼저 그려지고 자식들이 나중에 그려지는데, 이때 초기에 뷰의 표시 여부를 제어하려면 visibility 속성을 설정하면 된다.

| 상수      | 값  | 설명                          |
| --------- | --- | ----------------------------- |
| visible   | 0   | 화면에 보이게 한다. 디폴트 값 |
| invisible | 1   | 표시되지 않는다.              |
| gone      | 2   | 완전히 숨겨진다.              |

---

### **마진과 패딩**

![https://blog.kakaocdn.net/dn/bcFIwA/btrNzFASFYd/NXZr63TeXY4K8UBOJQuckk/img.png](https://blog.kakaocdn.net/dn/bcFIwA/btrNzFASFYd/NXZr63TeXY4K8UBOJQuckk/img.png)

마진(margin)은 레이아웃과 위젯 간의 간격이다. XML에서는 **layout_margin 속성**으로 상하좌우 똑같은 마진 설정을 할 수 있다.

상하좌우 다르게 마진을 설정하려면 **layout_marginLeft, layout_marginRight, layout_marginTop, layout_marginBottom**으로 각기 다르게 설정하면 된다.

---

### **enable 속성과 rotation 속성**

enable 속성 true 또는 false를 줌으로써 활성화/비활성화 할 수 있다. 또한 rotaion 속성으로 회전을 줄 수 있다.

![https://blog.kakaocdn.net/dn/cRpf8Q/btrNwjerHIe/yxyT0v9lJPPi9JHVzaDkq1/img.png](https://blog.kakaocdn.net/dn/cRpf8Q/btrNwjerHIe/yxyT0v9lJPPi9JHVzaDkq1/img.png)
