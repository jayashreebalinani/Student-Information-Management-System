
 

// // // //  function generateMenu() {

// // // //     var sidebar = document.getElementById('sidebar');
// // // //     var menuItems = ['Dashboard', 'Users', 'Settings']; // Add more menu items as needed

// // // //     for (var i = 0; i < menuItems.length; i++) {
// // // //       var button = document.createElement('button');
// // // //       button.className = 'menu-item';
// // // //       button.textContent = menuItems[i];
// // // //       button.onclick = function() {
// // // //         loadContent(this.textContent);
// // // //       };

// // // //       sidebar.append(button);
// // // //     }
// // // //   }

// // // //   // Function to load content based on button click
// // // //   function loadContent(menuItem) {
// // // //     var contentDiv = document.getElementById('mainContent');
// // // //     var buttons = document.getElementsByClassName('menu-item');

// // // //     // Reset active class for all buttons
// // // //     for (var i = 0; i < buttons.length; i++) {
// // // //       buttons[i].classList.remove('active');
// // // //     }

// // // //     // Add active class to the clicked button
// // // //     event.target.classList.add('active');

   
   
// // // // //console.log(data1)
// // // //    switch (menuItem) {
// // // //     case 'Dashboard':
// // // //       contentDiv.innerHTML = '<h2>Welcome to the Dashboard</h2><p>This is the dashboard content.</p>';
// // // //       break;
// // // //     case 'Users':

// // // //     const apiUrl = 'http://localhost:3000/singin';

// // // //     // Function to append data to HTML
// // // //     function appendDataToHTML(data) {
// // // //      // const contentDiv = document.getElementById('content');
  
// // // //       // Create an HTML string with the data
// // // //       const htmlString = data.map(user => {
// // // //         return `
// // // //           <div>
// // // //             <p>User ID: ${user.userid}</p>
// // // //             <p>Full Name: ${user.fullname}</p>
// // // //             <p>Password: ${user.password}</p>
// // // //             <p>Domain: ${user.Domain}</p>
// // // //             <p>Course: ${user.course || 'N/A'}</p>
// // // //             <p>Department: ${user.department}</p>
// // // //             ${user.id !== undefined ? `<p>ID: ${user.id}</p>` : ''}
// // // //           </div>
// // // //           <hr>
// // // //         `;
// // // //       }).join('');
  
// // // //       // Append the HTML string to the container
// // // //       contentDiv.innerHTML = htmlString;
// // // //     }
  
// // // //     // Fetch data and append to HTML
// // // //     fetch(apiUrl)
// // // //       .then(response => {
// // // //         if (!response.ok) {
// // // //           throw new Error(`HTTP error! Status: ${response.status}`);
// // // //         }
// // // //         return response.json();
// // // //       })
// // // //       .then(data => appendDataToHTML(data))
// // // //       .catch(error => console.error('Error:', error));
    


// // // //       break;
// // // //     case 'Settings':
// // // //       contentDiv.innerHTML = '<h2>Settings</h2><p>This is the settings content.</p>';
// // // //       break;
// // // //     // Add more cases for additional menu items
// // // //     default:
// // // //       contentDiv.innerHTML = '<p>Invalid menu item.</p>';
// // // //   }

// // // //  };

    
  

// // // //   // Call the function to generate menu items

// // // // generateMenu();



// // // function users()
// // // {
// // //   var content = document.getElementById("content")
// // //   const apiUrl = 'http://localhost:3000/singin';


// // //   function appendDataToHTML(data) {
   
// // //      const htmlString = data.map(user => {
// // //        return `
// // //          <div>
// // //            <p>User ID: ${user.userid}</p>
// // //            <p>Full Name: ${user.fullname}</p>
// // //            <p>Password: ${user.password}</p>
// // //            <p>Domain: ${user.Domain}</p>
// // //            <p>Course: ${user.course || 'N/A'}</p>
// // //            <p>Department: ${user.department}</p>
// // //            ${user.id !== undefined ? `<p>ID: ${user.id}</p>` : ''}
// // //          </div>
// // //          <hr>
// // //        `;
// // //      }).join('');
 
// // //      // Append the HTML string to the container
// // //      content.innerHTML = htmlString;
// // //    }
 




// // //   fetch(apiUrl)
// // //       .then(response => {
// // //         if (!response.ok) {
// // //           throw new Error(`HTTP error! Status: ${response.status}`);
// // //         }
// // //         return response.json();
// // //       })
// // //       .then(data => appendDataToHTML(data))

// // // }

// // function users(){
// //   const apiUrl = 'http://localhost:3000/singin';

// //     // Function to append data to HTML
// //    // function appendDataToHTML(data) {
// //      //
// //       //const contentDiv = document.getElementById('content');
  
// //       // Create an HTML string with the data
// //       function appendDataToTable() {
// //         const tableBody = document.getElementById("userTableBody");
  
// //         data.forEach(user => {
// //           const row = tableBody.insertRow();
// //           // Add cells to the row
// //           row.insertCell().textContent = user.userid;
// //           row.insertCell().textContent = user.fullname;
// //           row.insertCell().textContent = user.password;
// //           row.insertCell().textContent = user.Domain;
// //           row.insertCell().textContent = user.course || ""; // If course is not present in the data, display an empty string
// //           row.insertCell().textContent = user.department;
// //           // Add any other cells based on your data structure
  
// //           // You can add more cells based on your data structure
// //         });
// //       }
  
// //       // Call the function to append data to the table
// //       appendDataToTable();
  
// //     // Fetch data and append to HTML
// //     fetch(apiUrl)
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error(`HTTP error! Status: ${response.status}`);
// //         }
// //         return response.json();
// //       })
// //       .then(data => appendDataToHTML(data))
// //       .catch(error => console.error('Error:', error));
    
// //     }

// // users()


// function users() {
//   fetch('http://localhost:3000/singin')
//     .then(response => response.json())
//     .then(data => {
//       const tableBody = document.getElementById("userTableBody");

//       data.forEach(user => {
//         const row = tableBody.insertRow();
//         // Add cells to the row
//         row.insertCell().textContent = user.userid;
//         row.insertCell().textContent = user.fullname;
//         row.insertCell().textContent = user.password;
//         row.insertCell().textContent = user.Domain;
//         row.insertCell().textContent = user.course || ""; // If course is not present in the data, display an empty string
//         row.insertCell().textContent = user.department;
//         // Add any other cells based on your data structure
//       });
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }

// // Call the function to fetch data and append it to the table

function users() {
  var content = document.getElementById("content")
  content.innerText=" "
  fetch('http://localhost:3000/singin')
    .then(response => response.json())
    .then(data => {
      const table = document.createElement('table');
      table.setAttribute('border', '1');

      // Create the table header
      const thead = document.createElement('thead');
      const headerRow = thead.insertRow();
      const headers = ['User ID', 'Full Name', 'Password', 'Domain', 'Course', 'Department',"id"];

      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.append(th);
      });

      table.append(thead);

      // Create the table body and append data
      const tbody = document.createElement('tbody');
      tbody.setAttribute('id', 'userTableBody');

      data.forEach(user => {
        const row = tbody.insertRow();
        // Add cells to the row
        row.insertCell().textContent = user.userid;
        row.insertCell().textContent = user.fullname;
        row.insertCell().textContent = user.password;
        row.insertCell().textContent = user.Domain;
        row.insertCell().textContent = user.course || "-";
        row.insertCell().textContent = user.department;
        row.insertCell().textContent = user.id;
      });

      table.append(tbody);

      // Append the table to the body or any other container element
      content.append(table);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function  remove_user()
{
var content = document.getElementById("content")
content.innerText=""

var label = document.createElement("label")
label.textContent="enter the id to delete:"

var input=document.createElement("input")
input.type="text";
input.id="del_item"
var br = document.createElement("br")

var button = document.createElement("button")
button.innerText="Delete"
button.onclick= function rem()
{
  var del_item = document.getElementById("del_item").value
  console.log(del_item)
  fetch('http://localhost:3000/singin'+"/"+del_item,{
    method : "DELETE"
  })
  alert("Deleted Successfully")
}

content.append(label)
content.append(input)
content.append(br)
content.append(button)
  
}



function add_admin()
{



var content = document.getElementById("content")
content.innerText = ""

var userid = document.createElement("label")
userid.innerText = "userid"

var input1 = document.createElement("input")
input1.type = "text";
input1.id = "userid";

var fullname = document.createElement("label")
fullname.innerText = "fullname"

var input2 = document.createElement("input")
input2.type = "text";
input2.id = "fullname";

var password = document.createElement("label")
password.innerText = "password"

var input3 = document.createElement("input")
input3.type = "text";
input3.id = "password";

var domain = document.createElement("label")
domain.innerText = "domain"

var input4 = document.createElement("input")
input4.type = "text";
input4.id = "domain";
input4.placeholder = "domain";

var department = document.createElement("label")
department.innerText = "department"

var input5 = document.createElement("input")
input5.type = "text";
input5.id = "department";

var button = document.createElement("button")
button.innerText = "Add Admin"

var br = document.createElement("br")
var br1 = document.createElement("br")
var br2 = document.createElement("br")
var br3 = document.createElement("br")
var br4 = document.createElement("br")
content.append(br, userid, input1,br1, fullname, input2,br2, password, input3,br3, domain, input4,br4, department, input5, br, button)

button.onclick = function ad() {
    var userid1 = document.getElementById("userid").value
    var fullname1 = document.getElementById("fullname").value
    var password1 = document.getElementById("password").value
    var domain1 = document.getElementById("domain").value  
    var department1 = document.getElementById("department").value

    var formData = {
        userid: userid1,
        fullname: fullname1,
        password: password1,
        Domain: domain1,
        department: department1
    };

    console.log(formData);

    fetch("http://localhost:3000/singin", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-type": "application/json"
        }
    });
    alert("Added Successfully")
}

  

}

