getUser("kranthi",(user)=>{
    getRepo(user.gitHubUsername,(repos)=>{
        console.log('REPOS',repos )
    })
})

function getUser(id,callback){
    setTimeout(()=>{
    console.log(`checking user gitHub`)
   callback({id:id,gitHubUsername:'mosh'});
},2000);
}
function getRepo(Username,callback){
    setTimeout(()=>{
     console.log('calling github API');
     callback(['repo-1','repo-1','repo-1'])
    },2000)
}