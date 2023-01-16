# [Flutter] 1. 다트(Dart) 기본 문법 - 변수, 컬렉션, List, Set, Map

### **메인 함수**

프로그램의 시작을 main()으로 알리며, 중괄호 사이에 코드를 작성한다. 괄호 ()안에 매개변수를 지정할 수 있다.

```dart
void main() {

}
```

### **print( ) 함수**

문자열을 콘솔에 출력한다.

```dart
void main(){
	print("안녕");
}
```

### **var 변수 선언 | var 변수명 = 값;**

다트(dart)에는 **타입 추론 기능**을 제공하므로 명시적으로 타입을 지정하지 않아도 자동으로 타입을 추론한다.

컴파일 될 때는 **추론된 타입으로 치환**되어 적용이 된다.

```dart
void main() {
  var num = 1;
  print(num);
}
```

var는 자동으로 변수 타입을 유추하지만 **직접적으로 변수 타입을 명시**해줄 수도 있다.

여기엔 정수, 실수, 문자열, 불리언 타입을 지정할 수 있다.

키워드로는 **int, double, String, bool** 등이 가능하다.

### **dynamic 변수 선언**

var 타입은 추론된 타입을 고정하지만, dynamic 키워드를 사용하면 타입이 고정되지 않고 다른 타입의 값을 변수에 저장할 수 있게 된다.

```dart
void main() {
  dynamic num = 1;
  print(num);
  num = '안녕';
  print(num);
}
```

### **final / const 사용한 변수 선언**

final과 const를 사용해 선언한 변수는 값을 선언한 이후로 변경할 수 없다.

이들의 차이점은 **final**은 **런타임 상수**, **const**는 **빌드타임 상수**이다.

런타임은 실행될 때 확정된다는 말이고, const는 빌드를 할 때 즉, 코드를 실행하지 않은 상태에서 값이 확정된다.

그렇기 때문에 코드를 실행하지 않는 상태에서 값이 확정되면 const, 실행될 때 확정되는 경우엔 final을 사용한다.

```dart
void main() {
  const num = 1;
  final str = '안녕';
}
```

## **컬렉션 타입(Collection type)**

컬렉션은 하나의 변수에 여러 값을 저장할 수 있는 타입으로 **List, Map, Set** 등이 사용된다.

컬렉션 타입은 서로의 타입으로 자유롭게 형변환이 가능하다.

컬렉션 타입에 대해 알아보자.

### **리스트 타입(List type)**

리스트(List)는 여러 값을 순서대로 하나의 변수에 저장할 때 사용되며 '인덱스'의 형식으로 특정 값을 접근할 수 있다. 첫 번째 값은 인덱스 '0'으로 접근한다.

```dart
void main() {
  List<String> name = ['철수', '영희', '짱구'];

  print(name);
  print(name[0]);
}

//[철수, 영희, 짱구]
//철수
```

리스트에 넣을 값을 <> 사이에 지정할 수 있다. 또한 리스트 타입은 다트(Dart)에서 기본적으로 제공하는 함수가 있다. 그 중 **add(), where(), map(), reduce() 함수**가 많이 사용된다.

### **add() 함수**

add()는 List에 값을 추가할 때 사영되며 값을 add() 괄호 안에 매개변수 형태로 값을 추가할 수 있다.

```dart
void main() {
  List<String> name = ['철수', '영희', '짱구'];

  print(name);
  name.add('맹구');
  print(name);
}

//[철수, 영희, 짱구]
//[철수, 영희, 짱구, 맹구]
```

### **where() 함수**

리스트에 있는 값을 순서대로 접근하면서 설정한 조건에 맞는 값만을 필터링해 가져올 수 있다.

**where() 함수의 매개변수로 함수를 입력**해야 하며, 입력한 함수의 매개변수로 List의 값이 들어간다.

마지막 값까지 접근이 끝나고 조건에 맞는 값들을 기반으로 **이터러블(Iterable)**이 반환된다.

```dart
void main() {
  List<String> name = ['철수', '영희', '짱구'];

  print(name);

  final newName = name.where(
    (name) => name == '짱구'
  );

  print(newName);
}

//[철수, 영희, 짱구]
//(짱구)
```

where을 쓰면  ( ) 괄호의 이터러블(Iterable) 형태로 출력이 되는데, 이를 다시 List로 변환할 때는 **.toList()**를 사용한다.

```dart
 print(newName);

 print(newName.toList());

//(짱구)
//[짱구]
```

### **map() 함수**

리스트에 있는 값들을 순서대로 접근하면서 값을 변경할 수 있다. map()의 매개변수로는 함수를 입력해야 하며, 해당 함수의 매개변수로 리스트의 값이 순서대로 입력된다. where()와 마찬가지로 이터러블(Iterable)을 반환한다.

```dart
void main() {
  List<String> name = ['철수', '영희', '짱구'];

  print(name);

  final newName = name.map(
    (name) => '어린이 $name'
  );

  print(newName);
}

//[철수, 영희, 짱구]
//(어린이 철수, 어린이 영희, 어린이 짱구)
```

### **reduce() 함수**

리스트에 있는 값들을 접근하면서 반환한 값을 쌓아가는 특징이 있다. reduce()는 위의 함수와 다르게 List 멤버와 같은 타입을 반환한다.

reduce() 함수는 매개변수로 함수를 입력받으며 함수의 매개변수로는 2개의 값을 받는데, 첫 번째 매개변수는 첫 번째 값, 두 번째 매개변수엔 두 번째 값이 들어가며, 순회를 할 대마다 첫 번째 매개변수에 값이 쌓여간다.

```dart
void main() {
  List<String> name = ['철수', '영희', '짱구'];

  print(name);

  final allName = name.reduce((all, children) => all + '와 '+ children );

  print(allName);
}

//[철수, 영희, 짱구]
//철수와 영희와 짱구
```

### **Map 타입**

맵(Map)은 키(key)와 값(value)의 쌍으로 값을 저장한다. Map<키의 타입, 값의 타입>으로 선언하며

키와 값을 접근해 반환할 수 있다.

```dart
void main() {
  Map<String, String> music = {
    '곰세마리' : '동요',
    'Hype boy' : '가요',
    '태진아' : '트로트'
  };

  print(music.keys);
  print(music.values);
}
//(곰세마리, Hype boy, 태진아)
//(동요, 가요, 트로트)
```

### **Set 타입**

Set는 중복이 없는 값들의 집합이다. Set<타입> 이름으로 선언한다. 중복을 제거하고자 할 때 사용한다.

**.contains()**로 값 포함 여부를 확인하거나 **.toList()**로 리스트 형태로 변환, **.form()**으로 Set 타입으로 변환이 가능하다.

```dart
void main() {
  Set<String> name = {'철수', '짱구', '맹구', '유리'};

  print(name);
  print(name.toList());
  print(name.contains('짱구'));
}

//{철수, 짱구, 맹구, 유리}
//[철수, 짱구, 맹구, 유리]
//true
```
