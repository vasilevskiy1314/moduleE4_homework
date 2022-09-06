const userIvanov = function(a) {
  a = {Имя: 'Иван',
  Фамилия: 'Иванов',
  Возраст: '25'}
for (let key in a) {
  console.log(key+ ': ' + a[key]);
}
  
 }
userIvanov();
