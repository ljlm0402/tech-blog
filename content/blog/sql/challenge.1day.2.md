---
title: ' [Sql] (👀) 7daySQL 챌린지 (👀) - Day 1 (역순 정렬하기) '
date: 2019-09-02 12:10:00
category: 'sql'
---

![](../../../assets/sql/challenge/sql.challenge.logo.png)

<center><strong style="color:#fbc2eb">프로그래머스</strong>에서 주최하는 SQL 문제 풀이</center>

## **▶︎ 문제 설명**

- `ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다.

- `ANIMAL_INS` 테이블 구조는 다음과 같으며,

- `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는

- 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

|        NAME        |    TYPE    | NULLABLE |
|:------------------:|:----------:|:--------:|
| ANIMAL_ID          | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE        | VARCHAR(N) | FALSE    |
| DATETIME           | DATETIME   | FALSE    |
| INTAKE_CONDITION   | VARCHAR(N) | FALSE    |
| NAME               | VARCHAR(N) | FALSE    |
| SEX\_UPON\_INTAKE  | VARCHAR(N) | FALSE    |

- 동물 보호소에 들어온 모든 동물의 이름과 보호 시작일을 조회하는 SQL문을 작성해주세요.

- 이때 결과는 `ANIMAL_ID` 역순으로 보여주세요.

## **▶︎ 입출력 예**

|  NAME  |       DATETIME      |
|:------:|:-------------------:|
| Rocky  | 2016-06-07 09:17:00 |
| Shelly | 2015-01-29 15:01:00 |
| Benji  | 2016-04-19 13:28:00 |
| Jackie | 2016-01-03 16:25:00 |
| *Sam   | 2016-03-13 11:17:00 |

... 이하 생략

## **▶︎ 문제 풀이**

```js

SELECT `NAME`, `DATETIME` FROM `ANIMAL_INS` ORDER BY `ANIMAL_ID` DESC;

```

<br />

---

<br />

> 출처
>
> <a href="https://programmers.co.kr/learn/courses/30/lessons/59035" target="_blank">https://programmers.co.kr/learn/courses/30/lessons/59035</a>

#여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧
