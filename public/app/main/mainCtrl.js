angular.module('app').controller('mainCtrl', function ($scope, $interval) {
  $scope.releases = [
    {
      title: "Pokemon Sun & Moon",
      releaseDate: new Date("2016-11-18T00:00:00"),
      platform: "Nintendo 3DS",
      timeLeft: 0
    }, {
      title: "Kingdom Hearts 2.8",
      releaseDate: new Date("2017-01-12T00:00:00"),
      platform: "PS4",
      timeLeft: 0
    }, {
      title: "Final Fantasy XV",
      releaseDate: new Date("2016-11-29T00:00:00"),
      platform: "XBOX One",
      timeLeft: 0
    }, {
      title: "Dishonored 2",
      releaseDate: new Date("2016-11-10T00:00:00"),
      platform: "XBOX One",
      timeLeft: 0
    }, {
      title: "Tales of Berseria",
      releaseDate: new Date("2017-01-24T00:00:00"),
      platform: "XBOX One",
      timeLeft: 0
    }, {
      title: "The Last Gaurdian",
      releaseDate: new Date("2016-12-16T00:00:00"),
      platform: "XBOX One",
      timeLeft: 0
    }

  ];

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;

  function countdownFunc(date) {
    var now = new Date();
    var distance = date - now;
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    return days;
  }

  function setDays() {
    $scope.releases.forEach(function (release) {
      release.timeLeft = countdownFunc(release.releaseDate)
    });
  }

  setDays();
  $interval(setDays, 1000);
}).filter('datePassed', function () {
  return function (releases) {
    return releases.filter(function (release) {
      return release.timeLeft > 0;
    })
  }
});
