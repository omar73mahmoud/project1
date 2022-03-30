  var productnameinput=document.getElementById("prodctname");
var productpriceinput=document.getElementById("prodctprice");
var productcaregoryinput=document.getElementById("prodctcategory");
var productdescinput=document.getElementById("prodctdesc"); 
var productsearchinput=document.getElementById("serchaboutbroducts");

var productcontainer;

if(localStorage.getItem("myproducts")!=null){
  productcontainer=JSON.parse(localStorage.getItem('ourproduct'));
  displayproduct()
}
else  {
  productcontainer=[];
}

function addproduct(){

  var product={
    name:productnameinput.value,
    price:productpriceinput.value,
    gategory:productcaregoryinput.value,
    desc:productdescinput.value,
  }  
  console.log(product);
  productcontainer.push(product);
  localStorage.setItem("myproducts",JSON.stringify(productcontainer)); 
  console.log(productcontainer)
 
  clearform();

  displayproduct();
}


function clearform(){

  productnameinput.value="";
  productpriceinput.value="";
  productcaregoryinput.value="";
  productdescinput.value="";
}

function displayproduct(){
var temp=``;
  for(var i=0;i<productcontainer.length;i++){

temp+=`           
<tr>
<td>${i+1}</td>
<td>${productcontainer[i].name}</td>
<td>${productcontainer[i].price}</td>
<td>${productcontainer[i].gategory}</td>
<td>${productcontainer[i].desc} </td>
<td><button  onclick=" update(${i})" class="btn btn-info">update</button></td>
<td><button onclick=" deleteproduct(${i})" class="btn btn-warning">delete</button></td>


</tr>`
  }
  document.getElementById("tableData").innerHTML=temp
}


function deleteproduct(index){
  productcontainer.splice(index,1)
  localStorage.setItem("myproducts",JSON.stringify(productcontainer)); 
  displayproduct();
}

function update(index){
productnameinput.value=productcontainer[index].name;
productpriceinput.value=productcontainer[index].price;
productcaregoryinput.value=productcontainer[index].gategory;
productdescinput.value=productcontainer[index].desc;
}



function searchproduct(term){
  var cartona=``;
  for(var i=0;i< productcontainer.length;i++) {
    if( productcontainer[i].name.toLowerCase().includes(term.toLowerCase())==true){

      
cartona+=`           
<tr>
<td>${i+1}</td>
<td>${productcontainer[i].name}</td>
<td>${productcontainer[i].price}</td>
<td>${productcontainer[i].gategory}</td>
<td>${productcontainer[i].desc} </td>
<td><button  onclick=" update(${i})" class="btn btn-info">update</button></td>
<td><button onclick=" deleteproduct(${i})" class="btn btn-warning">delete</button></td>


</tr>`;
  }
 
}
document.getElementById("tableData").innerHTML=cartona;
}



function validationproductname(){

  var x=/^[A-Z][a-z]{3,8}$/
  if(x.test(productnameinput.value)==true){
    return true
  }
  else{
    alert("sorry this required")
  }
}