---
title: ' [Algorithm] 프로그래머스 - 베스트 앨범 '
date: 2019-03-18 18:00:00
category: 'algorithm'
---

![](../../../../../assets/algorithm/algorithm.logo.png)

<center><strong>어떠한 문제를 해결하기 위해 정해진 절차나 방법을 공식화</strong></center>

<br />

## **💎 목차**
  * [문제 설명 (Problem)](#-문제-설명)
  * [제한 사항 (Limitations)](#-제한-사항)
  * [입출력 예 (Example)](#-입출력-예)
  * [문제 풀이 (Solution)](#-문제-풀이)

## **📕 문제 설명**

- 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다.

- 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
    
    * [1] 속한 노래가 많이 재생된 장르를 먼저 수록합니다.

    * [2] 장르 내에서 많이 재생된 노래를 먼저 수록합니다.

    * [3] 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

- 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,

- 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

<br />

**[⬆ 목차](#-목차)**

---

## **🔖 제한 사항**

- genres[i]는 고유번호가 i인 노래의 장르입니다.

- plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.

- genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.

- 장르 종류는 100개 미만입니다.

- 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.

- 모든 장르는 재생된 횟수가 다릅니다.

<br />

**[⬆ 목차](#-목차)**

---

## **📙 입출력 예**

![](../../../../../assets/algorithm/programmers/hash/programmers.hash.3.example.png)
<br />

**[⬆ 목차](#-목차)**

---

## **📘 문제 풀이**

![](../../../../../assets/algorithm/programmers/hash/programmers.hash.3.solution.png)
<br />

**[⬆ 목차](#-목차)**

---

<br />

> 출처
>
> <a href="https://programmers.co.kr/learn/courses/30/lessons/42579" target="_blank">코딩테스트 연습 > 해시 > 베스트앨범</a>

# 여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧