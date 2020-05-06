$(document).ready(function () {
  //get json data from url
  $.getJSON("https://api.covid19india.org/data.json", function (data) {
    var states = [];

    var confirmed = [];
    var recovered = [];
    var deaths = [];

    var total_confirmed;
    var total_active;
    var total_recovered;
    var total_deaths;

    total_confirmed = data.statewise[0].confirmed;
    total_active = data.statewise[0].active;
    total_recovered = data.statewise[0].recovered;
    total_deaths = data.statewise[0].deaths;

    $.each(data.statewise, function (index, obj) {
      states.push(obj.state);
      confirmed.push(obj.confirmed);
      recovered.push(obj.recovered);
      deaths.push(obj.deaths);
    });
    states.shift();
    confirmed.shift();
    recovered.shift();
    deaths.shift();

    $("#confirmed").append(total_confirmed);
    $("#active").append(total_active);
    $("#recovered").append(total_recovered);
    $("#deaths").append(total_deaths);

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: states,
        datasets: [
          {
            label: "Confirmed Cases",
            data: confirmed,
            backgroundColor: "#f1c40f",

            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            minBarLength: 100,
          },
          {
            label: "Recovered",
            data: recovered,
            backgroundColor: "#2ecc71",

            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            minBarLength: 100,
          },
          {
            label: "Deceased",
            data: deaths,
            backgroundColor: "#e74c3c",

            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
            minBarLength: 100,
          },
        ],
      },
      options: {
        responsive: true,
        // scales: {
        //     yAxes: [{
        //         ticks: {
        //             beginAtZero: true
        //         }
        //     }]
        // }
      },
    });
  });
});
