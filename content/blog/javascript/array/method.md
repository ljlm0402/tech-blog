---
title: ' 자바스크립트 ▻ 배열 메소드 '
date: 2019-10-29 11:09:15
category: 'JavaScript'
---

![](./images/method-logo.png)

## **💎 목차**

- [배열 메서드](#-배열-메서드)
- [코드를 보며](#-코드를-보며)
- [마치며](#-마치며)

## **배열 메서드**

- 효과적인 코드 작성을 위하여 자바스크립트 `배열 메서드` 소개 및 예제를 살펴봅시다.

- 내용이 많으니 주의하시기 바랍니다.

<br />

**[⬆ 목차](#-목차)**

<hr />

## **😳 코드를 보며**

### ▸ Array.push()

```js
let arr = [1, 2, 3, 4]
arr.push(5)

// result : [ 1, 2, 3, 4, 5]
```

배열 `뒷부분`에 값을 `삽입`

<br />
<hr />

### ▸ Array.pop()

```js
let arr = [1, 2, 3, 4]
arr.pop()

// result : [ 1, 2, 3 ]
```

배열 `뒷부분`의 값을 `삭제`

<br />
<hr />

### ▸ Array.shift()

```js
let arr = [1, 2, 3, 4]
arr.shift()

// result : [ 2, 3, 4]
```

배열 `앞부분`의 값을 `삭제`

<br />
<hr />

### ▸ Array.unshift()

```js
let arr = [1, 2, 3, 4]
arr.unshift(0)

// result : [ 0, 1, 2, 3, 4]
```

배열 `앞부분`에 값을 `삽입`

<br />
<hr />

### ▸ Array.splice()

```js
let arr = [1, 2, 3, 4, 5, 6, 7]
arr.splice(3, 2)

// result : [ 1, 2, 3, 6, 7 ] 3번째 인덱스에서부터 2개 제거

let arr = [1, 2, 3, 4, 5, 6, 7]
arr.splice(2, 1, 'a', 'b')

// result : [ 1, 2, "a", "b", 4, 5, 6, 7 ] 2번째 인덱스에서 1개 제거 후 "a"와 "b"를 추가
```

`splice(index, 제거할 요소 개수, 배열에 추가될 요소)`

배열의 `특정위치`에 요소를 `추가`하거나 `삭제`

<br />
<hr />

### ▸ Array.slice()

```js
let arr = [1, 2, 3, 4, 5, 6, 7]
arr.slice(3, 6)

// result [ 4, 5, 6 ]
```

`slice(startIndex, endIndex)`

배열의 `startIndex` 부터 `endIndex`까지 (endIndex는 불포함) 새로운 배열 객체로 반환

<br />
<hr />

### ▸ Array.concat()

```js
let arr1 = [1, 2, 3]
let arr2 = [4, 5]

arr1.concat(arr2)

// result : [ 1, 2, 3, 4, 5 ]
```

배열을 하나로 합쳐야 할 때,

다수의 배열을 합치고, 병합된 배열의 사본을 반환합니다.

<br />
<hr />

### ▸ Array.join()

```js
let arr = [1, 2, 3, 4]

arr.join()
// result : 1,2,3,4 문자열로 변환

arr.join('-')
// result : 1-2-3-4 '-' 합친다.
```

배열 원소 전부를 하나의 문자열로 합친다.

추후 문자열 메서드에서 소개할 `split()` 와 반대의 개념이다.

<br />
<hr />

### ▸ Array.forEach()

```js
let array = [1, 2, 3, 4, 5]

/* for */
for (let i = 0; i < array.length; i++) {
  console.log(array[i])
}

/* result
1
2
3
4
5
*/

/* forEach() */
array.forEach(e => {
  console.log(e)
})

/* result
1
2
3
4
5
*/
```

배열 전체를 돌며 해당 배열의 요소에 `직접 어떤 작업`을 수행하고 싶을 때 적합한 메서드이다.

새로운 배열을 반환하지 않으므로 콜백에서 아무것도 반환하지 않아도 됩니다.

<br />
<hr />

### ▸ Array.map()

```js
let array = [1, 2, 3, 4, 5]

array.map(e => {
  return e * 2
})

// result : [ 2, 3, 6, 8, 10 ]
```

배열 전체를 돌며 배열값을 사용해서 `또 다른 배열`을 만들고 싶을 때 적합한 메서드이다.

원본 배열은 건들지 않고 그 값들을 사용해서 새로운 배열을 만들어야할때 유용하다.

<br />
<hr />

### ▸ Array.filter()

```js
let users = [
  { name: 'lim', age: 26 },
  { name: 'kim', age: 27 },
  { name: 'park', age: 32 },
  { name: 'choi', age: 18 },
]

users.filter(user => {
  return user.age >= 27
})

// result : [ { name: 'kim', age: 27 }, { name: 'park', age: 32 } ]
```

배열에서 특정 케이스만 필터링하여 새로운 배열로 만들고 싶을 때 적합한 메서드이다.

함수의 결과 값을 true 인 원소로만 구성된 새 배열을 반환한다.

만약 만족하는 요소가 없을 경우 빈배열로 반환합니다.

<br />
<hr />

### ▸ Array.reduce()

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.reduce((prev, cur, index) => {
  return prev + cur
})

// result : 55
```

배열의 요소들을 하나씩 돌며,

이전 콜백의 리턴값을 prev으로 넘겨받아 어떤 작업을 수행하고 싶을 때 적합한 메서드이다.

<br />
<hr />

### ▸ Array.find()

```js
let arr = [4, 15, 100, 395, 400, 1024, 3000]

arr.find(n => {
  return n % 5 == 0
})

// result : 15
```

`filter()` 와 유사하게 true인 값을 필터링하여 단 하나의 요소만을 반환한다

콜백 함수의 리턴이 true인 요소를 찾을 때 까지 순회하다가 찾으면 콜백합니다.

만약에 true인 요소가 복수개여도 첫번째 요소만을 반환합니다.

즉, 15, 100 둘다 true인 요소이지만 반환은 15만 합니다.

그리고 만족하는 요소가 없을 경우 `undefined`를 반환합니다.

filter의 경우는 빈 배열을 반환하는거와 차이점이 있습니다.

<br />
<hr />

### ▸ Array.findIndex()

```js
let arr = [4, 15, 100, 395, 400, 1024, 3000]

arr.findIndex(n => {
  return n % 5 == 0
})

// result : 1
```

`find()` 는 true인 요소의 값을 return 합니다.

하지만 `findIndex()`는 만족하는 값의 인덱스를 반환합니다.

만족하는 요소가 없을 경우는 `-1`을 반환합니다.

<br />
<hr />

### ▸ Array.reverse()

```js
let arr = [1, 2, 3, 4]

arr.reverse()

// result : [ 4, 3, 2, 1]
```

배열의 원소 순서를 `거꾸로` 전환하여 반환합니다.

<br />
<hr />

### ▸ Array.sort()

```js
let numbers = [1, 4, 5, 11, 21, 36, 7, 9]

numbers.sort()

// result : [ 1, 11, 21, 36, 4, 5, 7, 9 ]
```

배열 요소를 `정렬`하는 경우 사용한다.

그러나 예제의 결과 값이 우리가 원하는 값으로 나오지 않는다.

그 이유는 `sort()` 모든 원소를 문자열로 취급하여 정렬하기 때문이다.

그래서 비교 함수를 직접 만들어서 정렬 로직을 구현해야 한다.

```js
let numbers = [1, 4, 5, 11, 21, 36, 7, 9]

numbers.sort((a, b) => {
  return a - b
})

// result : [ 1, 4, 5, 7, 9, 11, 21, 36 ]
```

이 처럼 a 값과 b 값을 비교하여

값의 크기를 비교하는 함수를 직접 구현하였다.

```js
let users = [
  { name: 'lim', age: 26 },
  { name: 'kim', age: 27 },
  { name: 'park', age: 32 },
  { name: 'choi', age: 18 },
]

users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})

/* result
[
  { name: 'choi', age: 18 },
  { name: 'lim', age: 26 },
  { name: 'kim', age: 27 },
  { name: 'park', age: 32 },
]
*/
```

배열 객체의 정렬에서도 age를 비교하여

정렬하는 함수를 직접 구현하였다.

<br />
<hr />

### ▸ Array.indexOf()

```js
let names = ['lim', 'kim', 'park']

names.indexOf('lim')
// result : 0

names.indexOf('choi')
// result : -1
```

인자로 전달된 문자열과 매치되는 첫 번째 원소의 인덱스를 반환한다.

원소가 존재하지 않는다면 `-1`을 반환한다.

<br />
<hr />

### ▸ Array.includes()

```js
let names = ['lim', 'kim', 'park']

console.log(names.includes('lim'))
// result : true

console.log(names.includes('lim', 1))
// result : false 배열 1번 부터 검색을 하여 포함하는 값이 없다.

console.log(names.includes('choi'))
// result : false
```

`includes(searchString, length)`

searchString : 검색할 문자열로 필수 요소입니다. 대소문자를 구분합니다.

length : 검색 시작할 위치입니다. 선택 요소로 값이 없으면 전체를 대상으로 합니다.

배열에 특정 문자열을 포함하는지 확인하는 메서드입니다.

`indexOf()` 와 달리 true, false 값으로 반환합니다.

<br />
<hr />

### ▸ Array.some()

```js
let users = [
  { name: 'lim', age: 26 },
  { name: 'kim', age: 27 },
  { name: 'park', age: 32 },
  { name: 'choi', age: 18 },
]

users.some(user => {
  return user.name === 'lim'
})

// result : true
```

배열 요소 중에서 하나라도 특정 조건을 만족하는지 알고 싶을 때 매우 적합한 메서드이다.

위에 예제는 배열의 요소 중에서 name 이 lim인 요소가 있는지를 검색하였다.

name 이 lim 요소가 있어서 결과는 true를 반환하였다.

수행 중 콜백에서 한번이라도 true 값을 리턴하면 메서드 수행을 중단하고 true 리턴한다.

즉, 불필요하게 모든 배열을 순회하지 않아도 되어 성능 향상에 도움이 된다.

<br />
<hr />

### ▸ Array.every()

```js
/* return true */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = arr.every(e => {
  return typeof e === 'number'
})

// result : true

/* return false */
let arr = [1, 2, 3, 4, 'a', 6, 7, 8, 9, 10]

let result = arr.every(e => {
  return typeof e === 'number'
})

// result : false
```

배열 모든 요소가 특정 조건을 만족하는지 알고 싶을 때 매우 적합한 메서드이다

위에 예제는 배열의 값이 number인지 string인지 확인하는 문법이다.

즉, 모든 요소가 number형이라 true를 반환하였다.

하지만, 하나의 요소라도 false 값을 나타내면 false값을 반환한다.

<br />

**[⬆ 목차](#-목차)**

<hr />

## **😌 마치며**

이것으로 배열 메서드에 대해 알아보았습니다.

좀더 보충해야할 배열 메서드를 알고 계신분은 댓글로 알려주시면 감사합니다.

부족한 실력으로 정리한 글이라 많은 부분 부족하다고 생각합니다.

좀더 보충해야할 부분도 같이 알려주시면 감사합니다.

메서드 2탄에서는 문자열에 관하여 알아보겠습니다.

지금까지 포스팅을 읽어주셔서 감사합니다.

<br />

**[⬆ 목차](#-목차)**

<hr />

<br />

# 여러분의 댓글이 큰힘이 됩니다. (๑•̀ㅂ•́)و✧
