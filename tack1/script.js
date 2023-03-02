// Verilmiş ədədlər siyahısını artan sıra ilə düzülmüş ədədlər halına gətirən alqoritm.

var numbers=[2,3,1,6,5,8,7,9,13,43];
var len= numbers.length;

for( let i=0;i<len;i++){
    for(let j=0;j<len-1;j++){
        if(numbers[j]>numbers[j+1]){
            var newArray=numbers[j];
            numbers[j]=numbers[j+1];
            numbers[j+1]=newArray;
        }
    }
}
console.log(numbers);
