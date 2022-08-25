# Hello world

![Untitled](https://user-images.githubusercontent.com/85959639/186729049-ae3aea93-5f65-4738-87b5-b3ec3611a884.png)

- import에 적힌 부분은 라이브러리 또는 네임 스페이스
- `savedInstanceState: Bundle?` 이 main activity에서 사용되기 때문에 Bundle을 import 한다.
- `class MainActivity : AppCompatActivity()`는 클래스이며 코드 컨테이너 역할을 한다. 콜론은 AppCompat로 부터 상속 받는다는 의미
- `override fun onCreate()` ’fun’은 기능을 의미하며 onCreate()에 오버라이딩된 기능을 의미한다. ‘compat’ 액티비티 안에 ‘onCreate’ 메서드가 있고, 그것을 코드로 오버라이딩 하는 것을 뜻한다.
- `setContentView(R.layout.*activity_main*)` 뷰의 컨텐츠를 설정, 레이아웃 액티비티 main의 내용을 설정, R.layout.activity_main 에서 찾을 수 있다.

![Untitled (1)](https://user-images.githubusercontent.com/85959639/186729061-b1f514eb-fb45-4789-a2c8-6b314af21c15.png)

- `**textSize` : SP**(Scale Independent Pixel) 단위는 어떤 장치에서 사용하든지 같은 크기로 표현, **PX\*\*(픽셀)로 설정하면 스크린 크기에 따라 크기가 달라진다. 장치마다 dpi가 달라 px로 했을 때는 크기가 달라지지만 SP는 스크린의 픽셀 양에 영향을 받지 않고 스크린에 따라 비슷하게 보이도록 해준다.
- `**컨트롤 키 + 클릭`\*\* 컨트롤 키 누르고 activity_main을 클릭하면 편집 창으로 바로 이동한다.

![Untitled (2)](https://user-images.githubusercontent.com/85959639/186729076-3239828b-e3b3-4ed5-bdf5-3c55c3565126.png)

- `**item ID`\*\* 사용자 인터페이스 내에 모든 아이템에는 ID가 있으며, ID를 통해 실제 코드에 있는 UI 요소에 접근할 수 있다.
  - setOnclickListener을 사용해, 특정 행동이 일어나면 발생하는 이벤트를 설정할 수 있다.

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnClick = findViewById<Button>(R.id.mybutton)
        val textViewClick = findViewById<TextView>(R.id.mytextView)

        btnClick.setOnClickListener {
            btnClick.text = "클릭하셨습니다."

            textViewClick.text = "잘했어요!"
        }//버튼이 눌릴 때까지 대기, 눌리면 대괄호 안에 코드가 실행
    }
}

```

![Untitled (3)](https://user-images.githubusercontent.com/85959639/186729171-42e50b35-909f-4279-a20e-4e13fb3023bd.png)

![Untitled (4)](https://user-images.githubusercontent.com/85959639/186729199-7d615a88-25fa-4bfa-830f-63d1001345be.png)

### **버튼 클릭 시 카운팅 ⇒ 사람 수 체크하는 앱**

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnClick = findViewById<Button>(R.id.mybutton)
        val textViewClick = findViewById<TextView>(R.id.mytextView)
        var peopleNumber = 0

        btnClick.setOnClickListener {
            peopleNumber += 1

            textViewClick.text = peopleNumber.toString()
						Toast.makeText(this, "카운트하였습니다", Toast.LENGTH_LONG).show()
        } //toString()를 사용해 숫자를 text로 변경해준다.
    }
}
```

![Untitled (5)](https://user-images.githubusercontent.com/85959639/186729213-c7c9b1bb-3d13-4902-b58f-26a3da037bd8.png)

![Untitled (6)](https://user-images.githubusercontent.com/85959639/186729225-d938793b-353f-4a72-874d-6050524cf4a0.png)

`Toast.makeText(this, "카운트하였습니다", Toast.*LENGTH_LONG*).show()` : 버튼 클릭 이벤트 발생할 때, “카운트 하였습니다”라는 안내창이 나타났다가 사라진다.
