const API_KEY = "d58dcfcddaa8c8b0f41b6dd34392990c"; 

$(document).ready(function() {
  $("#checkWeather").click(function() {
    let city = $("#location").val();
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`,
      type: "GET",
      dataType: "json",
      success: function(data) {
        let forecastHtml = "<h5>Pronostico de 7 dias</h5>";
        data.list.forEach((day) => {
          forecastHtml += `
            <strong>Fecha:</strong> ${new Date(day.dt * 1000).toDateString()} ${new Date(day.dt * 1000).toLocaleTimeString()} <br>
            <strong>Temperatura:</strong> ${day.main.temp}°F <br>
            <strong>Descripcion</strong> ${day.weather[0].description} <br>
            <hr>
          `;
        });
        $("#weatherResult").html(forecastHtml);
      },
      error: function () {
        $("#weatherResult").html("<p>Error al obtener el clima. Por favor, intentelo de nuevo</p>");
      },
    });
  });
});