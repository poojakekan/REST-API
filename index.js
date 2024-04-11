function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
  
    axios
      .post(
        "https://crudcrud.com/api/173404fbbe594eef9e161b40894d0c57/studentData",
        userDetails
      )
      .then((response) => {
        displayUserOnScreen(response.data);
        // Clearing the input fields
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
      })
      .catch((error) => console.log(error));
  }
  
  function getData() {
    axios
      .get(
        "https://crudcrud.com/api/173404fbbe594eef9e161b40894d0c57/studentData"
      )
      .then((response) => {
        console.log(response);
        const userDetails = response.data;
        userDetails.forEach((user) => {
          const userItem = document.createElement("li");
          userItem.appendChild(
            document.createTextNode(
              `${user.username} - ${user.email} - ${user.phone}`
            )
          );
  
          const deleteBtn = document.createElement("button");
          deleteBtn.appendChild(document.createTextNode("Delete"));
          userItem.appendChild(deleteBtn);
  
          const editBtn = document.createElement("button");
          editBtn.appendChild(document.createTextNode("Edit"));
          userItem.appendChild(editBtn);
  
          const userList = document.querySelector("ul");
          userList.appendChild(userItem);
  
          deleteBtn.addEventListener("click", function (event) {
            userList.removeChild(event.target.parentElement);
            axios
              .delete(
                `https://crudcrud.com/api/45323b89afb94da091650a3fa58e989c/appointmentData/6617d9e9b6787603e855cd3b`
              )
              .then((data) => console.log(data))
             .catch((err) => console.log(err));
          });
  
          editBtn.addEventListener("click", function (event) {
            userList.removeChild(event.target.parentElement);
            document.getElementById("username").value = user.username;
            document.getElementById("email").value = user.email;
            document.getElementById("phone").value = user.phone;
          });
        });
      })
      .catch((err) => console.log(err));
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
     userList.removeChild(event.target.parentElement);
      axios
        .delete(
          `https://crudcrud.com/api/173404fbbe594eef9e161b40894d0c57/6617d9e9b6787603e855cd3b`
        )
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
    });
  }  