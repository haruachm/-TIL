- DDL (Data Definition Language) : DB 구조 정의 또는 변경
  - `**Create**`, `**Alter**`, `**Drop**` 등
- DML (Data Manipulation Language) : 데이터 삽입, 삭제, 수정 등
  - `**Select**`, `**Insert**`, `**Updata**`, `**Delete**` 등
- DCL (Data Control Language): DB 권한 제어
  - `**Grant**`, `**Revoke**` 등
- TCL (Transaction Control Language): 조작된 결과를 트랜젝션 별로 제어
  - `**Commit**`, `**Rollback**` 등

**데이터 삽입**

**`insert into 테이블명 [ 삽입할 속성 명 ] values (삽입할 값);`** : values 대신 select from where가 들어갈 수 있음

**데이터 삭제**

```sql
delete 삭제할 속성 명
from 테이블 명
where 조건
```

**데이터 수정**

```sql
update 테이블 명
set 속성명 = 변경할 값
where 속성명 = 검색할 값
```

### 데이터베이스 관련 명령어

**`show databases;`** : MySQL 서버에 존재하는 현재 데이터베이스를 나열하는 명령어

`**CREATE DATABASE <name>;**`

```sql
CREATE TABLE table_명(
 속성이름 데이터타입 [NOT NULL, DEFAUT VALUE]
	...
 PRIMARY KEY (속성이름)
 FOREIGN KEY (속성이름) REFERENCES 테이블(속성이름)
 UNIQUE (속성이름) 등

)
```

### 릴레이션 관련 명령어

`**show tables;**` : DB 안에 있는 테이블 출력

**`create table [릴레이션 이름]`** : 릴레이션 정의

**`drop table r;`** : 릴레이션 제거

`**delete from r;**` : 릴레이션 r의 모든 튜플 제거, 릴레이션 r은 남아있음.

**`alter table r add A D;`** : 이미 존재하는 릴레이션 r에 속성을 추가. A는 추가될 속성의 이름, D는 속성의 도메인

**`alter table r drop A;`** : 릴레이션 r의 A 속성을 제거

### create table 명령 옵션

**`primary key(A1, A2, … , Ai)`** : 주 키(primary key) 명세

**`foreign key(A1, A2, … , Ai) references s` :** 외래 키(foreign key) 명세, 튜플에 대한 속성값이 반드시 릴레이션 s가 갖고 있는 튜플의 주 키 속성 값에 상응해야 함.

**`not null;`** : 널 값을 허용하지 않는 제약 조건, 도메인에서 널 값을 제외
