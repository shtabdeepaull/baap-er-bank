document.getElementById('login-btn').addEventListener('click', function(){
   const emailFeild=document.getElementById('user-email');
   const userEmail=emailFeild.value ;
  //get user password
  const passwordFeild=document.getElementById('user-password');
  const userPassword=passwordFeild.value;
  
  if(userEmail=='sontan@baap.com' && userPassword=='secret'){
    console.log('valid user');
  }
})