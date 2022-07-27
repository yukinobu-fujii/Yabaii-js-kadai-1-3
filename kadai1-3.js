const taskMenu = [
    '==========================',
    '現在持っているのタスク一覧',
    '==========================',
];
console.log( taskMenu.join('\n') );

const taskNames = [
    '掃除',
    '買い物',
    '徒歩',
];
const taskShow = () => {
    taskNames.forEach(( value, index) => {
        console.log( index, value);
    });
}
taskShow();
while(true){
    if(taskNames.push(prompt('「確認、追加、削除、終了」のいずれかを入力してください')));
    {
        console.log( taskMenu.join('\n') );
        taskShow();
        alert(`新しいタスクを追加しました。`);
        break;
    }
}
