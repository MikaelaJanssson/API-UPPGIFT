function getAllUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fel vid hämtning : ");
      }
      return response.json();
    })
    .then((users) => {
      const container = document.getElementById("users");
      container.innerHTML = ""; // Rensar tidigare innehållet på sidan

      //använder createElement pga ökad säkerhet
      users.forEach((user) => {
        // Ett kort per user
        const userCard = document.createElement("article");
        userCard.classList.add("user-card"); //skapar ny class via classlist.add

        // Namn
        const name = document.createElement("h3");
        name.textContent = user.name;

        // Användarnamn
        const username = document.createElement("p");
        username.innerHTML = `<strong>Användarnamn:</strong> ${user.username}`;

        // E-mail
        const email = document.createElement("p");
        email.innerHTML = `<strong>Email:</strong> ${user.email}`;

        // Skapa en div för detaljerad information (som är dold från början)
        const hiddenDiv = document.createElement("div");
        hiddenDiv.classList.add("details");
        hiddenDiv.style.display = "none"; // Dold från start

        // Stad
        const city = document.createElement("p");
        city.innerHTML = `<strong>Stad:</strong> ${user.address.city}`;

        // Telefon
        const phone = document.createElement("p");
        phone.innerHTML = `<strong>Telefon:</strong> ${user.phone}`;

        // Företagsnamn
        const company = document.createElement("p");
        company.innerHTML = `<strong>Företag:</strong> ${user.company.name}`;

        // Lägg till stad, telefonnummer, företag i hiddenDiv
        hiddenDiv.appendChild(city);
        hiddenDiv.appendChild(phone);
        hiddenDiv.appendChild(company);

        // knapp visa mer/mindre info
        const button = document.createElement("button");
        button.textContent = "Visa mer";
        button.addEventListener("click", function () {
          if (hiddenDiv.style.display === "none") {
            hiddenDiv.style.display = "block";
            button.textContent = "Visa mindre";
          } else {
            hiddenDiv.style.display = "none";
            button.textContent = "Visa mer";
          }
        });

        // samla samtliga uppgifter i userCard
        userCard.appendChild(name);
        userCard.appendChild(username);
        userCard.appendChild(email);
        userCard.appendChild(button);
        userCard.appendChild(hiddenDiv);

        // Lägg till userCard i container
        container.appendChild(userCard);
      });
    }) // Hanterar eventuella fel
    .catch((e) => {
      alert("Error: " + e);
    });
}

getAllUsers();
