# 안드로이드 AVD 앱 아이콘 설정

## **AVD 앱아이콘 설정 및 제목 출력하기**

### **완성 UI**

![https://blog.kakaocdn.net/dn/UsSEO/btrO9OPRCWW/iGTwf7SdPiHgDAcMZTk2S1/img.png](https://blog.kakaocdn.net/dn/UsSEO/btrO9OPRCWW/iGTwf7SdPiHgDAcMZTk2S1/img.png)

### **1. 앱 아이콘으로 사용할 이미지를 준비한다.**

본인은 Instagram의 로고 아이콘을 사용하였다.

이미지의 크기는 96x96 정도의 \*png 파일을 사용하는 것이 좋다.

나는 64px x 64px의 png 파일을 사용했다.

64x64 크기의 이미지 구하기가 어렵다면 아래의 파일을 사용해서 실습해보도록 하자.

![https://blog.kakaocdn.net/dn/IEXrd/btrOQCX1qdF/w1qGkrOLaSgVSG1cz8Sks0/img.png](https://blog.kakaocdn.net/dn/IEXrd/btrOQCX1qdF/w1qGkrOLaSgVSG1cz8Sks0/img.png)

![https://blog.kakaocdn.net/dn/cxvyAw/btrO9BQw4Q0/HjR7fWZXdQP6oFrBQKX6ek/img.png](https://blog.kakaocdn.net/dn/cxvyAw/btrO9BQw4Q0/HjR7fWZXdQP6oFrBQKX6ek/img.png)

[instagram.png
0.00MB](https://blog.kakaocdn.net/dn/sNYTb/btrO4tmJ9Ms/VEtD5bNnYYXaKRgjfedv9k/img.png)

[facebook.png
0.00MB](https://blog.kakaocdn.net/dn/1g7gp/btrOQroD8SE/EiWmzQxGPsZuGus3JTvVg1/img.png)

---

### **2. drawable 폴더에 사진을 ctrl + c -> ctrl + v로 복사해준다.**

마우스를 끌어다가 올리면 파일이 복사되는 것이 아니라, 해당 프로젝트 파일로 이동을 해버린다.

계속적으로 사진 파일을 사용하고자 한다면, **이동이 아닌 '복사'**를 해준다.

![https://blog.kakaocdn.net/dn/x0sEP/btrO45TpY3C/lqNqhFACxI42OllKKMnNyK/img.png](https://blog.kakaocdn.net/dn/x0sEP/btrO45TpY3C/lqNqhFACxI42OllKKMnNyK/img.png)

---

### **3. MainActivity.java 파일에 Title 설정 및 앱 아이콘 설정 코드를 작성한다.**

![https://blog.kakaocdn.net/dn/c1RCY4/btrOQl9OeI8/BlNGKXaLuxdyulP3xroAi1/img.png](https://blog.kakaocdn.net/dn/c1RCY4/btrOQl9OeI8/BlNGKXaLuxdyulP3xroAi1/img.png)

```
setTitle("    Instagram");
```

작업 표시줄의 제목을 설정

```
getSupportActionBar().setDisplayShowHomeEnabled(true);
```

**setDisplayShowHomeEnabled(boolean showHome) 메서드**

상단 작업표시줄에 응용 프로그램 홈 어포던스를 포함할지 여부를 설정

```
getSupportActionBar().setIcon(R.drawable.instagram);
```

**setIcon(Drawable icon)**

상단 작업표시줄 '홈' 섹션에 표시할 아이콘을 설정

![https://blog.kakaocdn.net/dn/ziPBB/btrOFk4DQKY/zJatJ0qPIsUyjCfOECnUjk/img.png](https://blog.kakaocdn.net/dn/ziPBB/btrOFk4DQKY/zJatJ0qPIsUyjCfOECnUjk/img.png)

```
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setTitle("    Instagram");
        getSupportActionBar().setDisplayShowHomeEnabled(true);
        getSupportActionBar().setIcon(R.drawable.instagram);
    }
}
```

---

### **4. AVD를 실행해, 설정을 확인한다.**
