fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const container = document.getElementById("posts");

    users.forEach(user => {
      const div = document.createElement("div");
      div.className = "post";
      div.innerHTML = `
        <p>
          <strong>${user.name}</strong> lives in 
          <strong>${user.address.city}</strong> and works at 
          <strong>${user.company.name}</strong>. 
          You can contact them via email at 
          <strong>${user.email}</strong>.
        </p>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
