fetch('./countries.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        html += `<h1 align="center">Countries</h1>`
        data.forEach(country => {
            console.log(`-----${getCountry(country)}-----`);
            console.log(getPopulation(country));
            console.log(getLanguages(country));
            console.log(getCapital(country));
            console.log(getGDP(country));
            console.log(getCurrency(country));
            html += `<h2 align="center">-----${getCountry(country)}-----</h2>`;
            html += `<p align="center">${getPopulation(country)}</p>`;
            html += `<p align="center">${getLanguages(country)}</p>`;
            html += `<p align="center">${getCapital(country)}</p>`;
            html += `<p align="center">${getGDP(country)}</p>`;
            html += `<p align="center">${getCurrency(country)}</p>`;
        });
        document.body.innerHTML = html;
    })
    .catch(error => {
        console.error(error);
    });

    function getCountry(country) {
        return `${country.name}`;
    }
    function getPopulation(country) {
        return `${country.name} has population ${country.population} people`;
    }
    function getLanguages(country) {
        return `In ${country.name} speaks on ${country.languages}`;
    }
    function getCapital(country) {
        return `Capital of ${country.name} is ${country.capital}`;
    }
    function getGDP(country) {
        return `GDP of ${country.name} is ${country.gdp} mln $`;
    }
    function getCurrency(country) {
        return `Currency of ${country.name} is ${country.currency}`;
    }
