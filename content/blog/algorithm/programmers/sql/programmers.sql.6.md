---
title: ' [알고리즘] (👀) 7daySQL 챌린지 (👀) - Day 3 (이름이 없는 동물의 아이디) '
date: 2019-09-04 10:25:00
category: 'algorithm'
---

![](../../../../../assets/algorithm/programmers/sql/programmers.sql.logo.png)

<center><strong style="color:#fbc2eb">프로그래머스</strong>에서 주최하는 SQL 문제 풀이</center>

<br />
 
<center>보호소에 가장 먼저 들어온 동물은 누구일까요?🤔<br />테이블을 뒤져 통계를 내어봅시다.</center>

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

- 동물 보호소에 들어온 동물 중, 이름이 없는 채로 들어온 동물의 ID를 조회하는 SQL 문을 작성해주세요.

- 단, ID는 오름차순 정렬되어야 합니다.

<br />

**[⬆ 목차](#-목차)**

---

## **📙 입출력 예**

- 예를 들어 `ANIMAL_INS` 테이블이 다음과 같다면

![](../../../../../assets/algorithm/programmers/sql/programmers.sql.6-1.example.png)
<br />

- 이름이 없는 채로 들어온 동물 ID는 `A434523`와 `A562649`입니다.

- 따라서 SQL문을 실행하면 다음과 같이 출력되어야 합니다.

![](../../../../../assets/algorithm/programmers/sql/programmers.sql.6-2.example.png)
<br />

**[⬆ 목차](#-목차)**

---

## **📘 문제 풀이**

```js

SELECT 'ANIMAL_ID'
FROM 'ANIMAL_INS'
WHERE 'NAME' IS NULL
ORDER BY 'ANIMAL_ID'

```

<br />

**[⬆ 목차](#-목차)**

---

<br />

> 출처
>
> <a href="https://programmers.co.kr/learn/courses/30/lessons/59039" target="_blank">코딩테스트 연습 > SQL > 이름이 없는 동물의 아이디</a>

#여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧
