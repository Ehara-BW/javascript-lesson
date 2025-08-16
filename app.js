// 課題（基礎編）
// Q1 変数 -------------------
let nickname = '江原';
let age = '39';

console.log('私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。');


// Q2 配列 -------------------
let languages = ["JavaScript", "PHP", "Ruby", "Python", "Go"];

console.log(`私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`);


// Q3 オブジェクト -------------------
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);


// Q4 配列×オブジェクト -------------------
// The Legend of Zelda をコンソールに出力
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);


// Q5 四則演算 -------------------
// 年齢の平均値
let ageAve = (playerList[0].age + playerList[1].age + playerList[2].age) / 3;

console.log(ageAve);


// Q6 関数 -------------------
function sayHello(){
	console.log('Hello');
}

sayHello();

let sayWorld = function(){
	console.log('World');
}

sayWorld();


// Q7 メソッド -------------------
// --Q3 で定義した変数 user に '2000-09-27'を値とする birthday プロパティを追加
user.birthday = '2000-09-27';
console.log(user);

user.sayHello = function(){
	console.log('Hello！');
}

user.sayHello();


// Q8 引数 -------------------
// x + y = 7
let calc = {};
calc.add = function(x, y){
	console.log(x + y);
}

calc.add(5, 2);

// x - y = 10
calc.substract = function(x, y){
	console.log(x - y);
}

calc.substract(20, 10);

// x * y = 49
calc.multiply = function(x, y){
	console.log(x * y);
}

calc.multiply(7, 7);

// x / y = 5
calc.divide = function(x, y){
	console.log(x / y);
}

calc.divide(30, 6);


// Q9 返り値 -------------------
function remainder(x, y){
	return x % y;
}

let result = remainder(5, 3)
console.log(`5を3で割った余りは${result}です。`);


// Q10 スコープ -------------------
// function foo() {
//   let x = 1;
// }
// console.log(x);

// 【回答】
// この場合、letで宣言したxは宣言したブロック内だけで有効なローカル変数になっている。console.log(x)はスコープ（変数の有効範囲）の外にあるため、変数を参照しようとしても見つけられず、x is not definedという参照エラーになる。関数もブロックの一種であり、letはブロックスコープを持つため、宣言した関数の外からはアクセスできない。

// --------------------------------------
// 課題（応用編）
// Q1 標準組み込みオブジェクト -------------------
let randamInt = Math.floor(Math.random() * 10);
console.log(randamInt);


// Q2-1 コールバック関数 -------------------
setTimeout(function(){
	console.log('Hello World');
}, 3000);


// Q2-2 コールバック関数 -------------------
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}

const addIntro = (name) => '私の名前は' + name + 'です。';

printName('江原', addIntro);


// Q3 if -------------------
let num = 10;

if(num > 0){
	console.log('num is greater than 0');
}else if(num < 0){
	console.log('num is less than 0');
}else{
	console.log('num is 0');
}


// Q4 for -------------------
let numbers = [];
for (let i = 0; i < 100; i++){
	numbers.push(i);
}

console.log(numbers);


// Q5 for × if -------------------
let mixed = [4, '2', 5, '8', '9', 0, 1];

for(let i = 0; i < mixed.length; i++){
	let value = mixed[i];
	let message = "";

	if(typeof value === 'number'){
		if(value % 2 ===0){
			message = "even";
		}else{
			message = "odd";
		}
	}else{
		message = "not number";
	}

	console.log(message);
}