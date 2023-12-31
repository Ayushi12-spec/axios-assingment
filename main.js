async function refresh(){
    try {
        let result =await axios.get("https://crudcrud.com/api/703ce4f9fdfd4321a3737c7911622e94/studentdata")

        for(let i=0;i<result.data.length;i++){

            useronscreen(result.data[i])
        }
    } catch (error) {
        console.log(error)
        
    }
}

refresh();

function Formdata(event){

    event.preventDefault()

    let name=document.getElementById('name').value
    let number=document.getElementById('contact').value
    let email=document.getElementById('email').value

    let obj={
       
        name:name,
        number: number,
        email:email
          
    }

    userOncurdcurd(obj)
    

}


async function userOncurdcurd(obj){

    try {
        let result=await axios.post("https://crudcrud.com/api/703ce4f9fdfd4321a3737c7911622e94/studentdata", obj)
        useronscreen(result.data)
    } catch (error) {

        console.log(error)
        
    }



}

function useronscreen(obj){

    var a=document.createElement('li')
    a.textContent=obj.name+" "+ obj.email+" "+obj.number
    var b= document.getElementById("list")
    b.appendChild(a)
    var c= document.createElement("input")
    c.value="delete"
    c.type="button"
    a.appendChild(c)


}