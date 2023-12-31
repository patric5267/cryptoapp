const getdata = (arr)=>{
   const arr2=[]
   for(let i=0 ; i<arr.length;i++){
      arr2.push(arr[i])
   }
   return arr2
}
const arr= [1,2,3,4]
console.log(getdata(arr))