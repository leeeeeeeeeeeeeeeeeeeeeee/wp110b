```
let text = "Name: LeeWoYuan, Age: 19, Height: 186, Weight: 76;"
undefined
let re = /[0-9]+/g
undefined
text.match(re)
(3) ['19', '186', '76']
let re2 = /[a-z]+/g
undefined
text.match(re2)
(7) ['ame', 'ee', 'o', 'uan', 'ge', 'eight', 'eight']
let re3 = /\w+/g
undefined
text.match(re3)
(8) ['Name', 'LeeWoYuan', 'Age', '19', 'Height', '186', 'Weight', '76']
let re4 = /\d+/g
undefined
text.match(re4)
(3) ['19', '186', '76']
let re5 = /[0-9a-zA-Z]+/g
undefined
text.match(re5)
(8) ['Name', 'LeeWoYuan', 'Age', '19', 'Height', '186', 'Weight', '76']
let re6 = /:\d+/g
undefined
text.match(re6)
null
let re6 = /: \d+/g
undefined
text.match(re6)
(3) [': 19', ': 186', ': 76']
let re7 = /: \w+/g
undefined
text.match(re7)
(4) [': LeeWoYuan', ': 19', ': 186', ': 76']
```
----
[參考一](https://transbiz.com.tw/regex-regular-expression-ga-%E6%AD%A3%E8%A6%8F%E8%A1%A8%E7%A4%BA%E5%BC%8F/)<br/>
[參考二](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions)
