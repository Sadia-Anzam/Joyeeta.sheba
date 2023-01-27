const student = [62, 85, 58, 88, 79, 95];

const filteredResult = student.filter(function(element){
  return element >= 80;
})
console.log(filteredResult);