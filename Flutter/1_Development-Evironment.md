## **Flutter 개발환경 구축하기**

## **1. 윈도우 플러터 개발 환경 구축**

### **(1) 플러터 SDK 다운받기**

**아래의 플러터 홈페이지에 접속해 플러터 SDK를 다운받는다.**

[https://docs.flutter.dev/get-started/install](https://docs.flutter.dev/get-started/install)

[Install
Install Flutter and get started. Downloads available for Windows, macOS, Linux, and Chrome OS operating systems.
docs.flutter.dev](https://docs.flutter.dev/get-started/install)

---

**[Windoews]를 클릭한다.**

![https://blog.kakaocdn.net/dn/bFkZSR/btrV85LMS6v/9NTtZwD0yn1gtooFcdGxFK/img.png](https://blog.kakaocdn.net/dn/bFkZSR/btrV85LMS6v/9NTtZwD0yn1gtooFcdGxFK/img.png)

---

**아래로 내려 Get the Flutter SDK를 찾아, flutter_windows_3.3.10-stable.zip 버튼을 클릭한다.**

![https://blog.kakaocdn.net/dn/oIH8M/btrV731K39w/7pq3K5Y5twMxEQfWy2y6Hk/img.png](https://blog.kakaocdn.net/dn/oIH8M/btrV731K39w/7pq3K5Y5twMxEQfWy2y6Hk/img.png)

**다운로드 받은 Flutter 파일을 원하는 위치에 압축을 풀어준다.**

**나는 C드라이브에 해당 파일의 압축을 풀어줬다.**

![https://blog.kakaocdn.net/dn/DnLFq/btrWg1Br5BG/fs7kx8MxGIKQo6jBs0cboK/img.png](https://blog.kakaocdn.net/dn/DnLFq/btrWg1Br5BG/fs7kx8MxGIKQo6jBs0cboK/img.png)

---

### **(2) 환경 변수 설정**

위에서 다운 받은 flutter SDK의 위치를 환경 변수로 설정을 해야 한다. 그래야 플러터 명령을 사용할 수가 있다.

**'환경'을 입력해 환경변수 편집을 찾는다.**

![https://blog.kakaocdn.net/dn/oW3ZZ/btrWbMfcEEG/DBJQqasvU40quzhfeWQJi0/img.png](https://blog.kakaocdn.net/dn/oW3ZZ/btrWbMfcEEG/DBJQqasvU40quzhfeWQJi0/img.png)

---

**1. 시스템 속성 창에서 [환경변수(N)]를 클릭한다.**

**2. Path 변수를 찾아 클릭한 후에, [편집(E)]을 클릭한다.**

**3. [찾아보기]를 누른다.**

![https://blog.kakaocdn.net/dn/yvKmN/btrWggS3KWr/itcHpakp4o1aOwjVbZcPD0/img.png](https://blog.kakaocdn.net/dn/yvKmN/btrWggS3KWr/itcHpakp4o1aOwjVbZcPD0/img.png)

**찾아보기를 클릭한 후에 이전에 Flutter SDK 폴더를 풀었던 위치로 간다.**

**flutter_windows_version-stable > flutter > bin 을 찾아 클릭한 후에 [확인]을 누른다.**

![https://blog.kakaocdn.net/dn/d8LUuF/btrWd04lQ5G/09pGk59HKjk0IsxVKeUwwk/img.png](https://blog.kakaocdn.net/dn/d8LUuF/btrWd04lQ5G/09pGk59HKjk0IsxVKeUwwk/img.png)

그러고 확인 버튼을 연이어 클릭해 환경변수 등록을 마무리한다.

---

### **(3) 안드로이드 스튜디오 설치하기**

안드로이드 스튜디오는 플러터를 개발하는 통합개발환경(IDE)이다.

안드로이드 스튜디오는 아래의 공식 홈페이지에서 설치 방법을 보고 따라해서 설치를 하면 된다.

[https://developer.android.com/studio/install?hl=ko](https://developer.android.com/studio/install?hl=ko)

[Android 스튜디오 설치  |  Android 개발자  |  Android Developers
Windows, macOS 또는 Linux에서 Android 스튜디오를 설정 및 설치합니다.
developer.android.com](https://developer.android.com/studio/install?hl=ko)

---

### **(4) 안드로이드 스튜디오 Dart / Flutter 플러그인 설치하기**

안드로이드 스튜디오 설치가 완료되면 플러그인(Plugins)를 설치해야 한다.

왼쪽에 **[Plugins]**를 누른 후, **Flutter**를 검색해 **Intall**를 눌러 설치한다.

![https://blog.kakaocdn.net/dn/vQPe3/btrWccxPPnn/HAFtU7nHw3tDcZGQgiui0K/img.png](https://blog.kakaocdn.net/dn/vQPe3/btrWccxPPnn/HAFtU7nHw3tDcZGQgiui0K/img.png)

---

Flutter 설치하기를 누르면 아래와 같이 **"Dart" 플러그인 설치**를 묻는다.

그럼 함께 설치하기 위해 Install 를 누른다.

![https://blog.kakaocdn.net/dn/cwsyRb/btrWeG5FoCd/A0fkdKb3O1CknJnJEYWsLK/img.png](https://blog.kakaocdn.net/dn/cwsyRb/btrWeG5FoCd/A0fkdKb3O1CknJnJEYWsLK/img.png)

설치가 되면 **Restart IDE 버튼**이 활성화 되는데, 이를 클릭해 안드로이드 스튜디오를 재실행한다.

그래야 플러그인이 반영된다.

![https://blog.kakaocdn.net/dn/qSTPL/btrWbViOXTv/lth0KpzYKUxPZlG7g1gXgK/img.png](https://blog.kakaocdn.net/dn/qSTPL/btrWbViOXTv/lth0KpzYKUxPZlG7g1gXgK/img.png)
