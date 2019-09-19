---
title: ' [JavaScript] 비동기 처리 🚦 ▻ async / await '
date: 2019-08-22 11:08:60
category: 'javascript'
---

![](./images/async-await/logo.png)

<center>ES8(ECMAScript2017) 정의된 <strong style="color:#F6CF2F">비동기 함수</strong>로 비동기 처리를 위함이다.</center>

## **💎 목차**
  * [문제 (Problem)](#-문제를-보며)
  * [해답 (Solution)](#-해답을-보며)
  * [실습 (Practice)](#-실습을-하며)

## **📕 문제를 보며**

![](./images/async-await/1.png)

__결과 : `1 3 5 2 4`__

- `비동기식`으로 처리가 되어 `setTimeout` 함수가 완료되지 않아도 다음 코드를 실행한다.

<br />

**[⬆ 목차](#-목차)**

---

## **📘 해답을 보며**

![](./images/async-await/2.png)

__결과 : `1 2 3 4 5`__

- `function`앞에 `aysnc`과 비동기로 처리되는 부분에 `await` 작성하면 된다.

- `await` 부분은 반드시 `promise`로 반환을 하기 때문에 `promise` 코드도 작성하였다.

<br />

**[⬆ 목차](#-목차)**

---

## **📗 실습을 하며**

![](./images/async-await/3.png)

해당 이미지는 한 기업에서 출제 했던 서면 인터뷰입니다.

- 다음 실행 결과와 그 이유를 설명하시오.

<br />

**[⬆ 목차](#-목차)**

---

<br />

# 여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧
