function isPalindrome(arr){
    if (arr.length==1 || arr.length == 2){
        console.log(true);
        return (true);
    }
    if (arr[0]==arr[arr.length-1]){
        arr.shift();
        arr.length-=1
        isPalindrome(arr)
    }
    else{
        console.log(false);
        return (false);
    }
}
isPalindrome([1,2,3,3,2,1])