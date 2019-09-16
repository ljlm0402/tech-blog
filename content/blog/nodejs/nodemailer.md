---
title: ' [Node Js] 이메일 📬 ▻ nodemailer '
date: 2019-09-16 10:50:00
category: 'nodejs'
---

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.logo.png)

<center><strong style="color:#1FB674">이메일</strong> 발송을 위한 라이브러리</center>

## **💎 목차**
  * [설치를 하며](#️-설치를-하며)
  * [코드를 보며](#-코드를-보며)
  * [생각 해보며](#-생각해-보며)

## **⚙️ 설치를 하며**

```sh

$ npm install nodemailer

```

## **😳 코드를 보며**

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.example.1.png)
<br />

1. `createTransport` service, auth: user(메일 계정), pass(계정 비밀번호) 생성

2. `sendMail` from(보내는 사람), to(받는 사람), subject(제목), text(내용) 기입

<br />

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.result.1.png)
<br />

* 전송 결과는 다음과 같다.

<br />

> 출처
>
> <a href="https://github.com/bynodejs/nodemailer/tree/958db3d3e67948a28e700a4dfa41bda3d78e3d2d" target="_blank">github > nodemailer_v1</a>

<br />

**[⬆ 목차](#-목차)**

---

## **🤔 생각해 보며**
* 위 처럼 text만 전송 하는 경우보다는 정적 HTML 문서를 전송하는 추세이다.

* 정적 HTML에 링크, 영상을 첨부하여 이메일 홍보를 진행하고 있다.

* 몇가지 모듈을 활용하여 완성도를 높혀보자! 

### ▸ ejs
* HTML 페이지를 이용하여 이메일 전송을 한다.

```sh

// nodejs 템플릿 엔진으로 HTML 형식으로 변환 시키는 모듈이다.
$ npm install ejs

```

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.example.2.png)
<br />

* `ejs.renderFile` /public/views/example.html 파일을 불러와서 전송한다.

<br />

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.result.2.png)
<br />

* 전송 결과는 다음과 같다.

<br />

> 출처
>
> <a href="https://github.com/bynodejs/nodemailer/tree/e17308df03ab4053c516eb8c7f62c81169998e33" tager="_blank">github > nodemailer_v2</a>

<br />

<hr>

### ▸ html-pdf
* HTML 파일을 PDF 저장하여 첨부파일로 전송한다.

```sh

// HTML 형식 파일을 PDF 문서로 변환시키는 모듈이다.
$ npm install html-pdf

```

__nodemailer.js__

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.example.3-1.png)
<br />

__pdf.js__

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.example.3-2.png)
<br />

1. `ejs.renderFile` 결과 HtmlCode `pdf.create`로 전송

2. `htmlCode`를 buffer로 생성하여 resolve

3. buffer를 `attachments` filename(pdf 파일명), content(pdf 파일) 기입

<br />

__email__

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.result.3-1.png)
<br />

__pdf__

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.result.3-2.png)
<br />

* 전송 결과는 다음과 같다.

<br />

> 출처
>
> <a href="https://github.com/bynodejs/nodemailer/tree/dc618f7462f6ee0068a4bd643d112f16e0860764" tager="_blank">github > nodemailer_v3</a>

<br />

### ▸ error
* nodemailer 사용시 에러가 발생할수 있다.

```sh

Error: Invalid login: 535-5.7.8 Username and Password not accepted. Learn more at
535 5.7.8  https://support.google.com/mail/?p=BadCredentials y28sm48092065pfq.48 - gsmtp

```

<br />

![](../../../assets/nodejs/nodemailer/nodejs.nodemailer.solution.png)
<br />

* 구글 계정에서 보안 수준 앱의 엑세스를 허용하면 가능하다.

<br />

**[⬆ 목차](#-목차)**

---

<br />

> 출처
>
> <a href="https://github.com/bynodejs/nodemailer" target="_blank">github > nodemailer</a>

# 여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧
