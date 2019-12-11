---
title: ' 날짜 및 시간 ⏰ ▻ moment '
date: 2019-12-11 10:57:00
category: 'Node Js'
---

![](./images/moment/logo.jpeg)

<center>JavaScript에서 <strong style="color:#0FB4AB; font-size: 20px;">날짜, 및 시간</strong>을 조작할 수 있는 라이브러리</center>

## **💎 목차**

- [설치를 하며](#️-설치를-하며)
- [코드를 보며](#-코드를-보며)
- [생각 해보며](#-생각해-보며)

## **⚙️ 설치를 하며**

```sh

$ npm install moment

```

<br />

**[⬆ 목차](#-목차)**

<hr />

## **😳 코드를 보며**

### **▸ 년 월 일**

`moment()` 라이브러리에서는 해당 시간에 맞게 원하는 형식으로 시간을 반환에 줍니다.

해당 토큰들은 `대 소문자`를 구분합니다.

```js
moment().format()
// result : 2019-12-11T11:22:22+09:00
// 현재시간을 알려준다.

/* Year */
moment().format('YYYY YY Y')
// result : 2019 19 2019

/* Month */
moment().format('MMMM MMM MM M')
// result : December Dec 12 12

moment().format('Q')
// result : 4

/* Day */
moment().format('DDDD DDD DD D Do')
// result : 345 345 11 11 11th
```

- `Year`

  1. YYYY (4자리 연도) / YY (2자리 연도) / Y (자릿수와 부호가 있는 연도)

- `Month`

  1. MMMM (월 이름) / MMM (월 이름 축약)
  2. MM (월) / M (월 0 제외) 1..12
  3. Q (해당 월의 분기) 1..4

- `Day`
  1. DDDD (년도의 일) / DDD (년도의 일 0 축약) 1..365
  2. DD (달의 일) / D (달의 일 0 축약) 1..31
  3. Do (서 수가 있는 일) 1st..31st

<br />

### **▸ 시 분 초**

```js
/* Hours */
moment().format('HH H')
// result : 13 13

moment().format('hh h')
// result : 01 1

moment().format('kk k')
// result : 13 13

moment().format('a A')
// result : pm PM

moment().format('ZZ Z')
// result : +0900 +09:00

/* Minutes */
moment().format('mm m')
// result : 02 2

/* Seconds */
moment().format('ss s')
// result : 46 46

moment().format('SSS SS S')
// result : 152 15 1
```

- `Hours`
  1. HH (24 시간) / H (24시간 0 축약) 0..23
  2. hh (12 시간) / h (12시간 0 축약) 1..12
  3. kk (24 시간) / k (24시간 0 축약) 1..24
  4. a (포스트 소문자) am pm / A (포스트 대문자) AM PM
  5. ZZ (UTC 표기) +0900 / zz (UTC 표기) +09:00
- `Minutes`

  1. mm (분) / m (분 0 축약) 0..59

- `Seconds`
  1. ss (초) / s (초 0 축약) 0..59
  2. SSS SS S (분수 초) / 0..999

<br />

### **▸ 주별 및 주중**

```js
/* Year */
momnet().format('gggg gg')
// result : 2019 19

/* Week */
momnet().format('ww w')
// result : 50 50

/* Day */
momnet().format('e')
// result : 3

momnet().format('dddd ddd dd')
// Wednesday Wed We
```

- `Year`

  1. gggg (4자리 년도) / gg (2자리 년도)

- `Week`

  1. ww (주) / w (주 0 축약) 1..53

- `Day`
  1. e (요일) 0..6
  2. dddd / ddd / dd (요일 이름)

<br />

### **▸ ISO 주일**

[ISO 표기법](https://en.wikipedia.org/wiki/ISO_week_date)은 국제 표준화기구에서 정의한 날이다.

```js
/* Year */
moment().format('GGGG GG')
// result : 2019 19

/* Week */
moment().format('WW W')
// result : 50 50

/* Day */
moment().format('E')
// result : 3
```

- `Year`

  1. GGGG (4자리 년도) / GG (2자리 년도)

- `Week`

  1. WW (주) WW (주 0 축약) 1..53

- `Day`
  1. E (요일) 1..7

<br />

### **▸ 로케일 형식**

로케일 형식은 해당 시간을 문자열로 형식으로 반환합니다.

```js
moment().foramt('L')
// result : 12/11/2019

moment().foramt('LL')
// result : December 11, 2019

moment().foramt('LLL')
// result : December 11, 2019 1:32 PM

moment().foramt('LLLL')
// result : Wednesday, December 11, 2019 1:32 PM

moment().foramt('LT')
// result : 1:32 PM

moment().foramt('LTS')
// result : 1:32:11 PM
```

1. L (날짜 현지 형식) MM/DD/YYYY
2. LL (월 이름, 일, 년) MMMM DD, YYYY
3. LLL (월 이름, 일, 년, 시간, 포스트) MMMM DD, YYYY h:mm A
4. LLLL (요일, 월 이름, 일, 년, 시간, 포스트) dddd, MMMM DD, YYYY h:mm A
5. LT (시, 분, 포스트) h:mm A
6. LTS (시, 분, 초, 포스트) h:mm:ss A

<br />

### **▸ 포맷 지정**

원하는 포맷을 지정하여 출력하는 방법이다.

```js
moment().format('YYYY년 MM월 DD일  HH시mm분ss초')
// result : 2019년 12월 11일 13시 42분 36초

moment().format('YYYY-MM-DD HH:mm:ss')
// result : 2019-12-11 13:42:36
```

<br />

### **▸ 원하시는 시간 지정**

시간 데이터를 삽입하여 원하는 포맷으로도 출력이 가능하다.

현재 구동되는 서버 시간은 `KST`를 하고있다.

```js
new Date()
// result : 2019-12-11T04:48:06.906Z

moment(new Date()).format()
// result : 2019-12-11T13:48:06+09:00
```

이 처럼 현재 new Date는 04시 표기된다.

하지만 `moment`를 사용하면 UTC 표기법에 의거 +09:00를 하여 13시로 표기된다.

추가적으로 원하는 일자를 지정해보겠다.

```js
new Date(2019, 12, 25)
// result : 2020-01-24T15:00:00.000Z

moment(new Date(2019, 12, 25)).format()
// result : 2020-01-25T00:00:00+09:00

moment(20191225).format()
// result : 1970-01-01T14:36:31+09:00

moment('20191225').format()
// result : 2019-12-25T00:00:00+09:00
```

결과 값을 보시다시피 Date객체로 지정한 날짜는 month를 -1 값을 지정해줘야합니다.

그리고 number 형식으로 지정한 포맷은 인식하지 못해 이상한 데이터를 표기합니다.

포맷 형식은 `string` 형식으로 지정해줘야 알맞은 시간을 보여줄 수 있습니다.

<br />

### **▸ 단위 별 출력**

시간 데이터를 구할 때 단위별로 원하는 시간을 가져오고 싶을때가 있다.

`moment()`에서는 단위 별로 출력하는 기능을 제공한다.

```js
moment().year()
// result : 2019

moment().month() + 1
// result : 12
// 0..11 값을 표기하므로 +1을 해준다

moment().date()
// result : 11

moment().day()
// 3
// 0 : 일요일 .. 6 : 토요일

moment().hours()
// result : 13

moment().minutes()
// result : 53

moment().seconds()
// result : 22

moment().milliseconds()
// result : 412
```

순서대로 `년, 월, 일, 요일, 시, 분, 초, 밀리초`를 가져온다.

<br />

### **▸ 날짜 및 시간 가져오기**

`moment().add()`를 사용하면 쉽게 날짜 및 시간을 가져올수있다.

```js
/* 날짜 */
moment().add(1, 'y').format('YYYY-M-D')
// result : 1 시간 뒤

moment().add(1, 'Q').format('YYYY-M-D')
// result : 1 분기 뒤

moment().add(1, 'M').format('YYYY-M-D')
// result : 한달 뒤

moment().add(1, 'w').format('YYYY-M-D')
// result : 1주 뒤

moment().add(1, 'd').format('YYYY-M-D')
// result : 1일 뒤

/* 시간 */
moment().add(1, 'h').format('HH:mm:ss')
// result : 1 시간 뒤

moment().add(1, 'm').format('HH:mm:ss')
// reuslt : 1 분 뒤

moment().add(1, 's').format('HH:mm:ss')
// result : 1 초 뒤

moment().add(1, 'ms').format('HH:mm:ss:ms')
// result : 1 밀리초 뒤
```

예제 처럼 `add(value, key)`를 지정해주면 해당 value 만큼 key에 맞는

시간을 더하거나 빼값을 반환해준다.

key 값은 다음과 같이 정의한다.

| Key          | Shorthand |
| -----------: | :-------: |
| years        | y         |
| quarters     | Q         |
| months       | M         |
| weeks        | w         |
| days         | d         |
| hours        | h         |
| minutes      | m         |
| seconds      | s         |
| milliseconds | ms        |

만약 전 시간을 알고싶으면 `add(-1, key)` 이 처럼 value를 음수로 지정해주면된다.

<br />

### **▸ 날짜 및 시간 계산**

`moment().diff()`를 사용하면 특정 날짜로 부터 얼마나 지났는지 확인이 가능하다.

```js
moment('20191225').diff(moment(), 'years')
// result : 0

moment('20191225').diff(moment(), 'months')
// result : 0

moment('20191225').diff(moment(), 'days')
// result : 13

moment('20191225').diff(moment(), 'hours')
// result : 321

moment('20191225').diff(moment(), 'minutes')
// result : 19271

moment('20191225').diff(moment(), 'seconds')
// result : 1156293

moment('20191225').diff(moment(), 'milliseconds')
// result : 1156293480
```

해당 예제는 `2019-12-25` 크리스마스까지 얼마나 남았는지 출력해보았다.

순서대로 `년, 월, 일, 시, 분, 초 , 밀리초` 표기하였습니다.

`moment(비교 대상).diif(기준 일, 반환 타입)` 으로 정해주면 됩니다.

<br />

**[⬆ 목차](#-목차)**

<hr />

## **🤔 생각해 보며**

<br />

**[⬆ 목차](#-목차)**

<hr />

<br />

> 출처
>
> <a href="https://github.com/bynodejs/moment" target="_blank">GitHub > moment</a>

# 여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧
