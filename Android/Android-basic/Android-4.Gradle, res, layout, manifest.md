# 4. 그레이들, 리소스, 레이아웃, 매니페스트

**bulid.gradle (:app)**

![https://blog.kakaocdn.net/dn/YIOTL/btrNANkFoGR/r8PGnD6jqsEkKewrYgPckK/img.png](https://blog.kakaocdn.net/dn/YIOTL/btrNANkFoGR/r8PGnD6jqsEkKewrYgPckK/img.png)

## **그레이들(Gradle)이란?**

그레이들은 안드로이드 앱의 빌드(build)도구이다. 빌드 도구란 실행파일을 만드는 데 사용되는 도구로, 앱을 빌드하는 데 필요한 라이브러리 버전도 자동으로 파악해서 필요한 경우 다운로드까지 한다.

![https://blog.kakaocdn.net/dn/bVJCoG/btrNAwJ2m3J/k1vKjrvHJ3q8qyOLuCFpzK/img.png](https://blog.kakaocdn.net/dn/bVJCoG/btrNAwJ2m3J/k1vKjrvHJ3q8qyOLuCFpzK/img.png)

그래이들의 설정 파일은 build.gradle이다. **build.gradle(Project)**는 전체 프로젝트에 대한 빌드 설정이며, **build.gradle(Module)**은 앱을 빌드하는 데 중요한 설정이 저장되어 있다.

---

```
compileSdk 32
```

안드로이드 **SDK 31 버전을 이용해서 컴파일 하라는 의미**

```
defaultConfig {
    applicationId "ex.app.hello"
    minSdk 21
    targetSdk 32
    versionCode 1
    versionName "1.0"

    testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
}
```

**minSdk 21** => 이 앱을 설치할 수 있는 장치의 최소 SDK 버전

**targetSdk 31** => 개발할 때 목표를 하는 타겟 SDK 버전

```
compileOptions {
    sourceCompatibility JavaVersion.VERSION_1_8
    targetCompatibility JavaVersion.VERSION_1_8
}
```

자바 언어의 버전. 현재 1.8 버전이 내장되어서 사용.

---

## **리소스(resources)란?**

![https://blog.kakaocdn.net/dn/cIkDxz/btrNwnOtXYq/TvknpZ4YwF2ZRhFkqqsGZ1/img.png](https://blog.kakaocdn.net/dn/cIkDxz/btrNwnOtXYq/TvknpZ4YwF2ZRhFkqqsGZ1/img.png)

안드로이드에서 **레이아웃, 이미지, 문자열은 리소스**이다. 리소스는 모두 XML로 정의되며 res 폴더에 리소스들이 저장된다. **drawable** 폴더엔 이미지 리소스, **layout** 폴더엔 레이아웃 리소스, **values** 폴더엔 문자열 같은 리소스가 저장된다.

가능하면 리소스는 코드가 아닌 외부에 위치시켜, 코드와 리소스를 분리하여 작업한다. 코드는 프로그래머가, 리소스는 디자이너가 작성하기 때문이다.

![https://blog.kakaocdn.net/dn/bopHKv/btrNwGAf5FT/F3KKkoUiaTVoHvEARxGmo1/img.png](https://blog.kakaocdn.net/dn/bopHKv/btrNwGAf5FT/F3KKkoUiaTVoHvEARxGmo1/img.png)

출처 : 안드로이드 develop

리소스는 안드로이드가 탑재된 기기들의 사이즈가 다양해지면서, 사용 언어나 화면의 크기에 맞는 '**대체 리소스**'를 제공해야 한다. 그렇기 때문에 코드와 리소스를 더 분리해야 한다.

---

### **레이아웃(layout)이란?**

레이아웃은 화면을 어떻게 구상할 지를 정하는 것으로 위젯을 어떻게 화면에 배치할 것인지 결정한다. 안드로이드에선 레이아웃을 XML 파일을 이용해 위젯들을 배치한다.

레이아웃 파일은 프로젝트의 **res/layout/** 디렉터리에 저장되어야 한다.

아래의 코드에 **Constraintlayout**이라는 **배치 관리자**를 정의하고, 그 안에 TextView와 같은 **위젯**을 정의해 레이아웃을 만든다.

![https://blog.kakaocdn.net/dn/dIJV18/btrNCf9d3fR/CffdnieW07jDsbXKLWvGD1/img.png](https://blog.kakaocdn.net/dn/dIJV18/btrNCf9d3fR/CffdnieW07jDsbXKLWvGD1/img.png)

activity_main.xml 파일의 코드를 조금 살펴보자.

```
<?xml version="1.0" encoding="utf-8"?>
```

해당 코드 줄은 activity_main.xml 파일이 **XML 파일임을 알려주는 것**이다. XML 버전은 1.0이고, XML의 인코딩이 유니코드(utf-8) 이라는 것이다.

```
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android=
```

상대적인 배치 관리자를 나타내는 코드로, 위에선 ConstraintLayout이 사용되었다.

```
xmlns:android="http://schemas.android.com/apk/res/android"
```

**XML의 네임스페이스(namespace) 선언**으로, 네임스페이스에 정의된 속성들을 참조할 것임을 알려준다.

XML 파일에서 항상 이 속성을 상단에 정의하여야 한다.

```
<TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Hello World!"
    app:layout_constraintBottom_toBottomOf="parent"
    app:layout_constraintEnd_toEndOf="parent"
    app:layout_constraintStart_toStartOf="parent"
    app:layout_constraintTop_toTopOf="parent" />
```

<TextView>는 화면에 텍스트를 표시하는 위젯을 나타내는 요소이다. XML 속성들 앞에 붙은 "**android:**"는 **android 네임 스페이스에 선언된 속성을 참조**해 사용한다는 것을 의미한다.

### **아이콘 리소스란이란?**

아이콘을 나타내는 이미지도 리소스에 해당되며, 아이콘은 각 해상도별로 저장되어 있다. **xxhdpi**는 초초고해상도, **xhdpi**는 초고해상도, **hdpi**는 고해상도, **mdpi**는 중해상도를 의미한다.

![https://blog.kakaocdn.net/dn/HxEHV/btrNw9oBnOb/YyMLavzjKahxYUka0NP5qk/img.png](https://blog.kakaocdn.net/dn/HxEHV/btrNw9oBnOb/YyMLavzjKahxYUka0NP5qk/img.png)

**ic_launcher.webp (xxxhdpi) vs ic_launcher.webp (hdpi) vs ic_launcher.webp (mdpi)**

![https://blog.kakaocdn.net/dn/D7Tx1/btrNAxh2IEF/BAka506lO5uUc3u7L38sjk/img.png](https://blog.kakaocdn.net/dn/D7Tx1/btrNAxh2IEF/BAka506lO5uUc3u7L38sjk/img.png)

![https://blog.kakaocdn.net/dn/b1wWj1/btrNANrBr8V/qMB750k46zGkfahrJTbN2K/img.png](https://blog.kakaocdn.net/dn/b1wWj1/btrNANrBr8V/qMB750k46zGkfahrJTbN2K/img.png)

![https://blog.kakaocdn.net/dn/cLOGne/btrNyDwfIgY/ccFKjWKVeagPLgQMEs9Ack/img.png](https://blog.kakaocdn.net/dn/cLOGne/btrNyDwfIgY/ccFKjWKVeagPLgQMEs9Ack/img.png)

---

### **문자열 리소스란이란?**

![https://blog.kakaocdn.net/dn/Jky2c/btrNwFVGB3T/bSHFxwzKvxgKDdYsAWtfu1/img.png](https://blog.kakaocdn.net/dn/Jky2c/btrNwFVGB3T/bSHFxwzKvxgKDdYsAWtfu1/img.png)

문자열도 안드로이드에선 리소스이다. 문자열을 분리하여 작성하는데, 그 이유는 앱을 여러가지 언어로 분리하여 배포하기가 쉬워지는 이유도 있고, 자주 사용되는 문자열을 리소스로 정의해서 사용하게 되면, 나중에 리소스에서 한 번에 변경할 수 있어 유지보수에 좋다.

사용은 아래와 같이 **@string/[name]** 형태로 activity_main.xml 파일에 사용하면 된다.

```
android:text = "@string/app_name"
```

### **코드에서 리소스 참조하는 방법**

안드로이드 코드(MainActivity.java와 같은 파일의 코드)에서는 **리소스를 참조하기 위해 리소스 ID(식별자)를 사용**한다.

![https://blog.kakaocdn.net/dn/bCyx7S/btrNB6xJY12/XsKJELommfR2nPU7xc2UZK/img.png](https://blog.kakaocdn.net/dn/bCyx7S/btrNB6xJY12/XsKJELommfR2nPU7xc2UZK/img.png)

위의 코드에서는 **R.layout.activity_main** 이 **리소스 ID**이다.

res 폴더 아래에는 리소스를 분석하여 각 리소스마다 겹치지 않는 ID(식별자)를 하나씩 부여 하는데, 이 식별자를 **R.java**라고 하는 하나의 자바 파일에 모아둔다. R.java 파일 안에는 **R이라고 하는 클래스**가 정의되어 있고, **R 클래스 안에 다시 각 리소스 타입 별로 내부 클래스**가 작성되어 있다. 그리고 내부 클래스 안에는 각 리소스들이 정적 상수의 형태로 정의 되어 있다.

즉, **클래스 R 안에는 내부 클래스 attr, dimen, drawable, id, layout, menu, string이 정의**되어 있고, 이 클래스 안에 정적 상수 형태로 리소스 ID가 부여되어 있다. 이들 ID는 절대 겹치지 않는다.

따라서 리소스 중 레이아웃을 참고하려면 아래와 같이 R.layout.activity_main 과 같은 형태로 사용한다. 해석을 하자면 **R 클래스 안의 layout이라는 내부 클래스 안에 정의된  activity_main이라는 상수를 의미**한다.

![https://blog.kakaocdn.net/dn/dqdGFZ/btrNwEoWlmj/npV8wg4gKwhL5e9A8ITxTK/img.png](https://blog.kakaocdn.net/dn/dqdGFZ/btrNwEoWlmj/npV8wg4gKwhL5e9A8ITxTK/img.png)

---

## **매니페스트(manifest)란?**

매니페스트의 원래 의미는 "화물 적재 목록"으로, 안드로이드에서는 **애플리케이션에 적재된 모든 컴포넌트에 대하여 기술하는 파일을 의미**한다. 매니페스트에는 **애플리케이션을 구성하는 컴포넌트를 선언**한다.

매니페스트는 프로젝트의 manifests 폴더 안에 AndroidManifest.xml 이란 XML파일로 정의된다.

![https://blog.kakaocdn.net/dn/kA4sX/btrNzE9JFsb/ySRr0yNqTpugk51KBATPKK/img.png](https://blog.kakaocdn.net/dn/kA4sX/btrNzE9JFsb/ySRr0yNqTpugk51KBATPKK/img.png)

위의 매니페스트 파일 코드를 조금 분석해보자.

```
<manifest> . . . </manifest>
```

<manifest> 요소의 속성으로 패키지 이름, 버전 코드, 버전 이름 등이 선언되어 있다.

```
<application> . . . </application>
```

<manifest> 요소 안에 <application> 요소가 존재하며, 애플리케이션의 아이콘, 레이블 등이 속성으로 선언되어 있다.

해당 요소 안을 보면 <activity>가 선언되어 있는데 안드로이드에 애플리케이션이 가지고 있는 컴포넌트에 대해 알리는 역할을 한다.

```
<activity> . . . </activity>
```

액티비티의 속성들로 이름과 레이블이 선언되어 있으며 <application> 요소 안에 <activitiy> 요소가 존재한다.

```
<intent-filter> . . . </intent-filter>
```

**인텐트 필터**란 액티비티로 들어오는 인텐트를 걸러내는 것이다. 어떤 인텐트를 허용할 것인지 기술하며, 인텐트란 액티비티와 액티비티를 연결시켜주는 매커니즘을 뜻한다.
