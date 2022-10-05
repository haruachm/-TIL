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
