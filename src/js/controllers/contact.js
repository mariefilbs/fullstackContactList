const SERVER_URL = "https://shrouded-oasis-34673.herokuapp.com";


function ContactController ($scope, $http) {
  console.log("Welcome to Contact controller");
  $scope.contacts = [];

  function init () {
    $http.get(`${SERVER_URL}/contacts`).then(resp => {
      $scope.contacts = resp.data;
      console.log($scope.contacts);
    });
  }
  init();

  $scope.create = function (data) {
    var url = `${SERVER_URL}/contacts`;
    $http.post(url, data).then(resp => {
      $scope.contacts.push(resp.data);
      console.log($scope.contacts);
    });
  };


}

ContactController.$inject = ['$scope', '$http'];

export default ContactController;
