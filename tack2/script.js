// Verilmiş iki ədədlər siyahısından birincisinin ikincisinin içində olub olmadığını tapan alqoritm.
//Yəni birinci array-dəki ədədlərin hamısı 2ci array-də də varsa true çıxır output-a , hər hansısa biri yoxdursa false

var arr1=[23,56,76,87,45,32,54]
var arr2=[34,35,12,15,57,89,78]

var all= true;
for (let i = 0; i < arr1.length; i++) {
    var paid= false;
    for (let j = 0; j < arr2.length; j++) {
        if(arr1[i]==arr2[j]){
          paid=true;
          continue;
        }    
    if(!paid){
     all=false;
     break; 
    } 
        
 }   
} 
if(all){
    console.log("true");
}else{
    console.log("false");
}
