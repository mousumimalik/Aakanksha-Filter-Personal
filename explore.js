
// Search by filter

const btns = document.querySelectorAll(".btn");
const showEmployees = document.querySelectorAll(".employee");

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();
        
        const filter = e.target.dataset.filter;
        // console.log(filter);
        
        showEmployees.forEach((emp)=> {
            if (filter === "all"){
                emp.style.display = "block"
            } else {
                if (emp.classList.contains(filter)){
                    emp.style.display = "block"
                } else {
                    emp.style.display = "none"
                }
            }
        });
    });
};

const search = document.getElementById("search");
const empName = document.querySelectorAll(".employee-details h2");

function filterEmployees(e) {
    const text = e.target.value.toLowerCase();
    empName.forEach(function(emp) {
        const item = emp.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            emp.parentElement.parentElement.style.display = "block"
        } else {
            emp.parentElement.parentElement.style.display = "none"
        }
    })
}


// Dropdown Services - Search by filterEmployees


function myFun() {
    console.log("myfun function");
    document.getElementById("services-myDropdown").classList.toggle("services-show");
}
  
function filterFun(event) {
    var input, filter, div, li, i;
    console.log("filter function");

    input = document.getElementById("services-myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("services-myDropdown");
    li = div.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }
       
    }
    
}

// Price Range 

var slider = document.getElementById("myRange");
var output = document.getElementById("value");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function() {
  var x = slider.value;
  var color = `linear-gradient(90deg, rgb(117, 252, 117))${x}%, rgb(214, 214, 214)${x}%)`;

  this.style.background = color;
})

// Location 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
function filterFunction() {
    var input, filter, div, li, i;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    li = div.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
       
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }
    }
}
