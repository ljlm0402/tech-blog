---
title: ' [Algorithm] 프로그래머스 - 루시와 엘라 찾기 '
date: 2019-09-07 10:32:00
category: 'algorithm'
---

![](../../../../../assets/algorithm/programmers/sql/programmers.sql.logo.png)

<center><strong style="color:#fbc2eb">프로그래머스</strong>에서 주최하는 SQL 문제 풀이</center>

<br />

## **💎 목차**
  * [문제 설명 (Problem)](#-문제-설명)
  * [입출력 예 (Example)](#-입출력-예)
  * [문제 풀이 (Solution)](#-문제-풀이)

## **📕 문제 설명**

- `ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다.

- `ANIMAL_INS` 테이블 구조는 다음과 같으며,

- `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는

- 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

<br />

![](../../../../../assets/algorithm/programmers/sql/programmers.sql.table.png)
<br />

- 동물 보호소에 들어온 동물 중 이름이 Lucy, Ella, Pickle, Rogan, Sabrina, Mitty인 

- 동물의 아이디와 이름, 성별을 조회하는 SQL문을 작성해주세요.

- 이때 결과는 아이디 순으로 조회해주세요.

<br />

**[⬆ 목차](#-목차)**

---

## **📙 입출력 예**

- 예를 들어, `ANIMAL_INS` 테이블이 다음과 같다면

![](../../../../../assets/algorithm/programmers/sql/programmers.sql.13-1.example.png)
<br />

SQL문을 실행하면 다음과 같이 나와야 합니다.

![](../../../../../assets/algorithm/programmers/sql/programmers.sql.13-2.example.png)
<br />

**[⬆ 목차](#-목차)**

---

## **📘 문제 풀이**

```js

SELECT 'ANIMAL_ID', 'NAME', 'SEX_UPON_INTAKE'
FROM 'ANIMAL_INS'
WHERE 'NAME' IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty')

```

<br />

**[⬆ 목차](#-목차)**

---

<br />

> 출처
>
> <a href="https://programmers.co.kr/learn/courses/30/lessons/59046" target="_blank">코딩테스트 연습 > String, Date > 루시와 엘라 찾기</a>

# 여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧