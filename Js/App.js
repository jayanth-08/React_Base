const msd = async ()=>{
await fetch('https://jsonplaceholder.typicode.com/users')
.then(  x=>  x.json())
.then(xdx=> console.log(
    xdx.map(xd=>xd.name)
    ))

}
msd();