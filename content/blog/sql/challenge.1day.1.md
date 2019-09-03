---
title: ' [Sql] (👀) 7daySQL 챌린지 (👀) - Day 1 (모든 레코드 조회하기) '
date: 2019-09-02 11:50:00
category: 'sql'
---

![](../../../assets/sql/challenge/sql.challenge.logo.png)

<center><strong style="color:#fbc2eb">프로그래머스</strong>에서 주최하는 SQL 문제 풀이</center>

<br />

<center>첫 날엔 가볍게. 💪몸풀기💪 문제부터 시작해봅시다.<br />아주 기초적인 SELECT 문을 작성해보아요.</center>

## **💎 목차**
  * [문제 설명 (Problem)](#-문제-설명)
  * [입출력 예 (Example)](#-입출력-예)
  * [문제 풀이 (Solution)](#-문제-풀이)

## **📕 문제 설명**

- `ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다.

- `ANIMAL_INS` 테이블 구조는 다음과 같으며,

- `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는

- 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

|        NAME        |    TYPE    | NULLABLE |
|:------------------:|:----------:|---------:|
| ANIMAL_ID          | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE        | VARCHAR(N) | FALSE    |
| DATETIME           |  DATETIME  | FALSE    |
| INTAKE_CONDITION   | VARCHAR(N) | FALSE    |
| NAME               | VARCHAR(N) | TRUE     |
| SEX\_UPON\_INTAKE  | VARCHAR(N) | FALSE    |

- 동물 보호소에 들어온 모든 동물의 정보를 ANIMAL_ID순으로 조회하는 SQL문을 작성해주세요.

<br />

**[⬆ 목차](#-목차)**

---

## **📙 입출력 예**

| ANIMAL_ID | ANMAIL_TYPE |      DATETIME       | INTAKE_CONDITION |  NAME  | SEX\_UPON\_INTAKE |
|:---------:|:-----------:|:-------------------:|:----------------:|:------:|:-----------------:|
| A349996   | Cat         | 2018-01-22 14:32:00 | Normal           | Sugar  | Neutered Male     |
| A350276   | Cat         | 2017-08-13 13:50:00 | Normal           | Jewel  | Spayed Female     |
| A350375   | Cat         | 2017-03-06 15:01:00 | Normal           | Meo    | Neutered Male     |
| A352555   | Dog         | 2014-08-08 04:20:00 | Normal           | Harley | Spayed Female     |

__... 이하 생략__

<br />

**[⬆ 목차](#-목차)**

---

## **📘 문제 풀이**

```js

SELECT * 
FROM 'ANIMAL_INS'
ORDER BY 'ANIMAL_ID'

```

<br />

**[⬆ 목차](#-목차)**

---

<br />

> 출처
>
> <a href="https://programmers.co.kr/learn/courses/30/lessons/59034" target="_blank">https://programmers.co.kr/learn/courses/30/lessons/59034</a>

#여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧
