var productarr=[];
if (localStorage.getItem("ourproducts")!=null){// ليه داتا زبون قديم
    productarr=JSON.parse(localStorage.getItem("ourproducts"));
    display();
}

var nameInput=document.getElementById("productname");
var priceInput=document.getElementById("productprice");
var catgInput=document.getElementById("productcatg");

function addproduct(){
    var product={
        NAME:nameInput.value,
        PRICE:priceInput.value,
        CATG:catgInput.value,
    }
    productarr.push(product);
    localStorage.setItem("ourproducts",JSON.stringify(productarr));
    console.log(productarr)
    display();

    
}
function clearform(){
    nameInput.value="";
    priceInput.value="";
    catgInput.value="";
}
function deleteproduct(index){
    productarr.splice(index,1);
    localStorage.setItem("ourproducts",JSON.stringify( productarr));

    display();

}
function display(){
    var container=``;
    for (var i=0;i<productarr.length;i++){
        container+=` <tr>
        <td>${i}</td>
        <td>`+productarr[i].NAME+`</td>
        <td>${productarr[i].PRICE}</td>
        <td>${productarr[i].CATG}</td>
        <td><button onclick="updateproduct(${i})" class="btn btn-outline-info">update</button></td>
        <td><button  onclick="deleteproduct(${i})" class="btn btn-outline-danger">delete</button></td>
      </tr>`
    }
    document.getElementById("body").innerHTML=container;
}
function searchproduct(term){
    var container=``;
    for (var i=0;i<productarr.length;i++){
        if (productarr[i].NAME.toLowerCase().includes(term.toLowerCase())==true){
            container+=` <tr>
        <td>${i}</td>
        <td>`+productarr[i].NAME+`</td>
        <td>${productarr[i].PRICE}</td>
        <td>${productarr[i].CATG}</td>
        <td><button onclick="updateproduct(${i})" class="btn btn-outline-info">update</button></td>
        <td><button  onclick="deleteproduct(${i})" class="btn btn-outline-danger">delete</button></td>
      </tr>` 
        }
    }
    document.getElementById("body").innerHTML=container;

}

document.getElementById("main1").style.display = "none";
document.getElementById("main").style.display = "block";


function updateproduct(index){
    document.getElementById("main").style.display = "none";
    document.getElementById("main1").style.display = "block";
    nameInput.value=productarr[index].NAME;
    priceInput.value=productarr[index].PRICE;
    catgInput.value=productarr[index].CATG;
    deleteproduct(index);
    document.getElementById("main1").addEventListener("click",function(){
        nameInput.value="";
        priceInput.value="";
        catgInput.value="";
        document.getElementById("main").style.display = "block";
        document.getElementById("main1").style.display = "none";
        
    })
}

