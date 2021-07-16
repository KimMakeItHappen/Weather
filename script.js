var search = document.getElementsByTagName("form"[0].innerHTML);
var history = $('#history');
var weatherApi = "pro.openweathermap.org/data/2.5/forecast/hourly?";
var apiKey = "&APPID=844097de582cb0e70050fb6a41b3baf2";
var units = "&units=metric";

function handleFormSubmit(event) {
    event.preventDefault();

    var city = $('input[name="search-input"]').val();

    if (!city) {
        console.log('no city filled out in form!');
        return;
    }

    history.append('<li>' + city + '</li>');

    $('input[name="search-input"]').val('');
}

search.on('submit', handleFormSubmit);

function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://pro.openweathermap.org/data/2.5/forecast/hourly?' + '&APPID=844097de582cb0e70050fb6a41b3baf2' + '&units=metric';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var listItem = document.createElement('li');
          listItem.textContent = data[i].html_url;
          repoList.appendChild(listItem);
        }
      });
  }
  
  fetchButton.addEventListener('click', getApi);

  function forecast(event) {
    event.preventDefault();
    console.log();
    var button = select('.button expanded');
    button.mousePressed(weatherask);
    input = select('.searchCities');
    return;
  }
  
  function weatherask() {
    var url = weatherApi + input.value() + apiKey + units;
    loadJSON(url, gotData);
  }
  
  function gotData(data) {
    weatherApi
  }
  
  
  function searchForecast(event) {
    //prevent default refresh
    event.preventDefault();
    
    var queryURL = "pro.openweathermap.org/data/2.5/forecast/hourly? "+ idNumber +" &APPID=844097de582cb0e70050fb6a41b3baf2" + APIKey;
  
    //fetch request
    fetch(queryURL)
        .then(function(response){
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
  };
  
  //need a function to display search history and clear current search
  
  //when search button is clicked...
  search.addEventListener("click", searchForecast);
  
  var searchBar = document.getElementById("searchBar");
  
  searchBar.addEventListener("click", function(){
      console.log("this is working");
      // url = Cultures.Arab;
      // console.log(idNumber)
  });