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

````sql
update 테이블 명
set 속성명 = 변경할 값
where 속성명 = 검색할 값### **SQL 질의**

```sql
select 속성 이름 | 질의의 결과에 나타나야할 속성을 나열
from 릴레이션 | 질의를 수행하기 위해 접근해야 하는 릴레이션
where 조건 | from 절에 있는 릴레이션의 속성과 관련된 술어로 구성
group by
having
order by desc/asc

etc, join, not, all 등
````

SQL 표현에서는 결과에서 뿐만 아니라 릴레이션에서도 중복을 허용한다.

**`select distinct 속성 이름`** : distinct 키워드로 중복된 튜플 제거 가능

**`select all 속성 이름`** : all 키워드로 중복 제거를 명시적으로 하지 않기 위함.

**`select 속성 이름 + - * /`** : 상수나 튜플의 속성에 적용되는 연산자를 포함한 **산술표현** 가능

**`where 조건`** : from 절의 릴레이션에 있는 튜플 중 where 절에 명시된 술어를 만족하는 행만 반환

**`where 조건 and, or, not 조건`** : and, or, not 과 같은 논리 접속사 사용 가능, 비교 연산자 포함 가능

````

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
````

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
