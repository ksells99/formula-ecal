const racesElement = document.querySelector("#racesAccordion");

const getRacesFromNotion = async () => {
  const res = await fetch(`https://formula-e-cal.herokuapp.com/races`);
  // const res = await fetch(`http://localhost:5000/races`);
  const data = await res.json();
  return data;
};

const addRacesToDOM = async () => {
  const races = await getRacesFromNotion();
  console.log(races);

  races.forEach((race) => {
    const newDiv = document.createElement("div");
    newDiv.className = "accordion-item bg-dark";
    newDiv.innerHTML = `
    
      <h2 class="accordion-header bg-primary" id="flush-heading${race.round}">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${
          race.round
        }" aria-expanded="false" aria-controls="flush-collapse${race.round}">
        <img src="./assets/${
          race.country_code
        }.png" alt="" style="height: 20px" class="me-2" />
        <div class="race-header w-100 d-flex flex-column flex-sm-row justify-content-sm-between">
          <span>${race.title}</span>
          <span class="race-date me-2">${dayjs(race.date).format(
            "DD/MM/YYYY"
          )}</span>
        </div>
        
        </button>
      </h2>
      <div id="flush-collapse${
        race.round
      }" class="accordion-collapse collapse" aria-labelledby="flush-heading${
      race.round
    }" data-bs-parent="#racesAccordion">
        <div class="accordion-body">
        
        <p>Round ${race.round}</p>
        <p>${race.circuit}, ${race.country}</p>
        
        </div>
      </div>
    

    `;
    racesElement.appendChild(newDiv);
  });
};

addRacesToDOM();
