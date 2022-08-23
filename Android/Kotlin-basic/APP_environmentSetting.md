# 프로젝트 생성 및 애뮬레이터 설치

### 프로젝트 생성

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d54ef182-b5e4-4015-8a69-d0572c0eae08/Untitled.png)

- **Name** : 프로젝트 이름
- **Package name** : 앱을 배포하기 위한 고유한 패키지명 작성해야 한다. 그렇지 않으면 플레이 스토어에서 승인이 안 되고, 앱을 배포할 수 없게 된다.
- **Save location** : 컴퓨터 저장 위치
- **Language** : 구글이 자바 소유주인 오라클과 문제가 생겨, 코틀린으로만 개발이 진행될 예정이니 코틀린을 학습하며 코틀린을 사용하도록 한다.
- **SDK** : Software Development Kit의 약자로, SDK는 소프트웨어 개발 도구와 설치 패키지를 모은 것으로 이는 컴파일러, 디버거, 소프트웨어 프레임워크로 앱을 구현하게 해준다. SDK는 하드웨어 플랫폼과 운영 체제에 연결되어 있다.
- **Minimum SDK** : 최소 실행되는 안드로이드 버전을 선택하며, 아래에 퍼센트를 나타내주기 때문에 대부분의 사용자가 사용할 수 있도록 설정한다.
  - 구글이 **appcompat**을 개발했다. 이는 앱 호환성으로 오래된 장치에 실행되는 새 기능을 개발하게 해준다.
- **Use legacy android.supprot libraries** : 오래된 장치들을 위한다면 체크박스를 클릭한다.

### 애뮬레이터 설치

컴퓨터에 안드로이드를 애뮬레이터하는 것으로, 핸드폰에 연결하지 않고 컴퓨터에서 테스트하게 가상의 장치를 사용할 수 있다.

1. **상단에 AVD Manager을 클릭한다.**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c33b2c28-ac87-414c-b00b-169ee742e496/Untitled.png)

1. **애뮬레이터 디바이스를 선택한다.**

- 플레이스토어 마크가 있으면, 애뮬레이터에 플레이스토어를 설치할 수 있고, 플레이스토어의 확장자를 이용할 수 있다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ab6ac13-7497-4aac-b658-8562cbe43ecf/Untitled.png)

1. **안드로이드 스튜디오 버전이라고도 하는 시스템 이미지를 선택한다.**

- 최신 버전을 선택한다.
- 사용하는 PC 기기에 따라 다르며, API레벨과 Google Play API에 따라 사용용도에 따라 선택을 한다.
- 인텔 기기라면 **x86 S버전**을 추천한다.
- 변경하고자 한다면 다시 다운로드 받아 설치하면 된다.
- • 1GB가 넘어, 용량이 크다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c65139b-e93d-462a-9190-927ec16bd56d/Untitled.png)

1. **라이센스를 동의하고 설치한다.**

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/80f95e4e-1b8f-4763-82c6-73ef08fe6701/Untitled.png)

1. **애뮬레이터 설정을 한다.**

- 알아보기 쉽게 Android 12 버전을 추가해주고, 가로 세로를 설정해준다.
- 고급 설정을 열어 추가적인 기능을 설정해준다.
  - 카메라 애뮬레이터(컴퓨터에 설치된 카메라를 가상 장치에 이용 가능)
  - 네트워크 속도 설정 가능
  - 부팅 과정 빠르게 설정 가능
  - CPU 코어 수 설정 가능
  - RAM, 저장 공간 설정 가능
  - 여러 애뮬레이터를 설정할 수 있지만, 컴퓨터 공간을 많이 사용하므로 1개를 설치를 추천한다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9eb20102-3e95-4910-8f3d-8a898202f4d8/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/06d2ddef-1ec7-4193-97be-07f11c3283cb/Untitled.png)

1. **설치된 애뮬레이터를 키고 설정을 변경할 수 있다.**

- 설치된 모바일 기기의 설정 값들 설정 가능
