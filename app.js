// 変数iを宣言
var i;
// 変数numを宣言し、初期値を0に設定
var num = 0;

// 変数iの初期値を1に設定し、変数iが11未満のときは変数iに1を足す
for(i = 1; i < 11; i++){
// 変数numにnum+iを代入
  num = num +i;
}

alert('1から１０まで足算した結果は' + num + 'です');