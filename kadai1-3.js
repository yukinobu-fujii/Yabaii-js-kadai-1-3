
const task = function taskMenu() {
    console.log('==========================')
    console.log('現在持っているのタスク一覧')
    console.log('==========================')
}
task();

let taskNames = [
    '掃除',
    '買い物',
    '徒歩',
];
const task_names = function taskMenu() {
    taskNames.forEach(function( value ) {
        console.log( value );
    });
}
task_names();
while(true){
    if(taskNames.push(prompt('「確認、追加、削除、終了」のいずれかを入力してください')));
    {
        task();
        task_names();
        alert(`新しいタスクを追加しました。`);
        break;
    }
}

/*
let alltaskNames = taskNames.map(taskName=> {
  return taskName
});
console.log('==========================')
console.log('現在持っているのタスク一覧')
console.log('==========================')

console.table(alltaskNames);

let task = { index:'0', value:'掃除'}
console.log(task);

while(true){
    if(prompt(quizCapitalJapan)=== '東京'){
      alert(`${correctAnswer}です！`);
      break;
    }else{
    alert(`${incorrectAnswer}です！`);
    }
  }
*/