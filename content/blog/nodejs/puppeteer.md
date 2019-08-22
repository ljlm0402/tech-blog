---
title: ' [nodejs] Puppeteer를 활용한 크롤링'
date: 2019-08-21 20:38:00
category: 'nodejs'
---

![](../../../assets/nodejs/puppeteer/nodejs.puppeteer.0.png)
  
<center><strong>Headless Chrome</strong>을 쉽게 사용할 수 있는 node.js 라이브러리이다.</center>

▶︎ 설치를 하며...
-------------
```sh

npm install puppeteer

```

▶︎ 기능을 살피며...
-------------

####▸ screenshot
*   스크린샷을 저장한다.<br />

![](../../../assets/nodejs/puppeteer/nodejs.puppeteer.1.png)
<br /><br />

####▸ pdf
*   PDF 파일을 저장한다.<br />

![](../../../assets/nodejs/puppeteer/nodejs.puppeteer.2.png)
<br /><br />

####▸ emulate devices
*   디바이스 모드로 전환한다.<br />

![](../../../assets/nodejs/puppeteer/nodejs.puppeteer.3.png)
<br /><br />

####▸ setCookie
*   쿠키를 설정한다.<br />

![](../../../assets/nodejs/puppeteer/nodejs.puppeteer.4.png)
<br /><br />

####▸ tracing
*   접속 브라우저 정보를 추적한다.<br />  

![](../../../assets/nodejs/puppeteer/nodejs.puppeteer.5.png)
<br /><br />

▶︎ 추가적으로...
-----------

`크롤링`을 세련도를 높이고자 몇 가지 모듈을 추가하였다.

**cheerio**
-   HTML DOM Element 접근에 용이한 모듈

<br />

**exceljs**
-   Excel 파일 생성 모듈

<br />

**readline-sync**
-   콘솔 입력 모듈

<br />

다음은 앞서 말한 세 가지 모듈을 활용하여 소스를 작성 해보았다.

<br />

![](../../../assets/nodejs/puppeteer/nodejs.puppeteer.6.png)

<br />

해당 소스는 `네이버 맵` 크롤링 소스이다. 간략히 설명 하겠습니다.

1. readline 모듈을 통해 검색어를 입력

2. cheerio 모듈을 통해 손쉽게 Element 접근

3. exceljs 모듈을 통해 데이터 수집이 완료 시 Excel 저장

#끝까지 봐 주셔서 감사합니다.  ʕ　·ᴥʔ

<br />

> 출처  <a href="https://github.com/bynodejs/crawling" target="_blank">https://github.com/bynodejs/crawling</a>
