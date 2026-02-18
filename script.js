fetch("hostels.json")
  .then(response => response.json())
  .then(data => {
    const box = document.getElementById("hostel-list");

    data.forEach(h => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>${h.name}</h3>
        <p>Rent: ₹${h.rent ?? "N/A"}</p>
        <p>${h.food ? "Food Available" : "No Food"}</p>
        <p>${h.wifi ? "WiFi Available" : "No WiFi"}</p>
        <p>Rank: ${h.rank ?? "Not Ranked"}</p>
        <hr>
      `;
      box.appendChild(div);
    });
  });
