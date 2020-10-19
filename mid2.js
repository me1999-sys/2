
//serch student by name
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
  function myfilter() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  // add table
  function addRow()
  {
    //get input
    var Stnim = document.getElementById('Stnim').value;
    var fullname = document.getElementById('fullname').value;
    var x = document.getElementsByClassName('gender').value;
    
    var data;
     if(!Stnim || !fullname )
    {
      alert("please  fill all");
      return;
    }
    if(x ==='male'.value){
      data="male";
      
    }
    if(x==='female'.value){
      data="female";
      
    }
    var table = document.getElementsByTagName('table')[0];
    
    var newRow = table.insertRow(4);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    
    cel1.innerHTML = Stnim;
    cel2.innerHTML = fullname;
    var cel3 = newRow.insertCell(2);
    cel3.innerHTML = data;
    
    
        }
        function myDeleteFunction() {
          document.getElementById("myTable").deleteRow(-1);
          }
  //filter
