---
title: TypeScript 3.0 全新 unknown 型別
tags:
  - typescript
date: 2018-07-14 00:15:00
---

TypeScript 3.0 RC 版本發布，新增了 `unknown` 型別。`unknown` 顧名思義就是不知道這個型別是什麼型別的型別（好繞口令）。 看似和現有的 `any` 型別一樣，但卻又不盡相同。

## any 型別

在了解 `unknown` 型別前先來回顧現有的 `any` 型別。any 型別可以是任何型別，任何變數只要宣告成 `any` 型別，就會失去 TypeScript 型別檢查機制，使開發時期倒退到傳統 JavaScript 的動態型別。

<iframe src="https://codesandbox.io/embed/kkml74vmq7?module=%2Fsrc%2Findex.ts&view=split" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


上面將 `foo` 宣告成 `any`，但實際上是數值型別。除了第一行可以正常執行，接下來幾行的程式碼在執行時期（runtime）會出錯。開發時期由於是 `any` 型別，TypeScript 認為它可以是任何型別，因此是可以正常編譯的。為了要解決 `any` 型別太過寬鬆，導致開發時期不容易偵錯，因此誕生了 `unknown` 型別。

## unknown 型別

`unknown` 型別可以想像成只能 `set-only` 的 `any` 型別。依樣可以指派任何型別的值給 `unknown`，但要對 `unknown` 型別操作時，必須轉成 `unknown` 以外的型別，否則便會出錯。此外， `unknown` 只能指派給同樣是 `unknown` 型別或是 `any` 型別，不像 `any` 型別可以指派給 `string`、`number` 等任何型別。

```typescript
const foo: unknown = 10;
const bar: any = foo;
const bar2: unknown = foo;

// 下面*開發時期*每一行都會跳警告
const bar3: number = foo; // unknown 只能指派給 unknown
const bar4: string = foo; // unknown 只能指派給 unknown
foo.x.prop; // unknown 不能直接操作屬性、方法、建構式
foo.y.prop;
foo.z.prop;
foo();
new foo();
upperCase(foo);
foo`hello world!`;

function upperCase(x: string) {
  return x.toUpperCase();
}

foo.toFixed(1); // error! 即使目前實際型別是數字，仍不能直接對 unknown 操作

if (typeof foo === 'number') {
  foo.toFixed(1); // ok. TypeScript 推斷是 number 型別
}

if (typeof foo === 'string') {
  foo.toUpperCase(); // ok. TypeScript 推斷是 string 型別
}

const foo2 = foo as string; // 強制轉型
foo2.toUpperCase(); // ok. 因為 foo2 現在被轉型成 string 型別

```

## 總結

大部分情況下，`unknown` 型別幾乎可以取代現有的 `any` 型別，確保當下能斷定目前變數到底是什麼型別在對其進行操作，降低 `any` 型別帶來的不確定性。