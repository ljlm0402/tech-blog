---
title: ' [javasciprt] async-await 비동기 처리'
date: 2019-08-22 11:08:60
category: 'javascript'
---

![](../../../assets/javascript/async-await/javascript.async.await.0.png)

<center>ES8(ECMAScript2017) 정의된 <strong style="color:#fbc2eb">비동기 함수</strong>로 비동기 처리를 위함이다.</center>

▶︎ 비동기...
---------

- 자바스크립트에서 정의 한 코드가 완료되지 않아도 다음 코드를 실행

▶︎ 문제를 보며...
-------------

![](../../../assets/javascript/async-await/javascript.async.await.1.png)

결과 : `1 3 5 2 4`

비동기식으로 처리가 되어 setTimeout 함수가 완료되지 않아도 다음 코드를 실행한다.



▶︎ 해답을 보며...
-------------

![](../../../assets/javascript/async-await/javascript.async.await.2.png)

결과 : `1 2 3 4 5`

- function 앞에 aysnc과 비동기로 처리되는 부분에 await 작성하면 된다.

- await 부분은 반드시 promise로 반환을 하기 때문에 promise 코드도 작성하였다.

▶︎ 실습을 해보며...
--------------

![](../../../assets/javascript/async-await/javascript.async.await.3.png)

해당 이미지는 한 기업에서 출제 했던 서면 인터뷰입니다.

- 다음 실행 결과와 그 이유를 설명하시오.

#여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧

<br />

> 출처  
> <a href="https://github.com/bynodejs/study/blob/master/javascript/async_await.js" target="_blank">https://github.com/bynodejs/study/blob/master/javascript/async_await.js</a>
