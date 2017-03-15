const SERVER_URL = "https://shrouded-oasis-34673.herokuapp.com";


function ContactController ($scope, $http) {
  console.log("Welcome to Contact controller");
  $scope.currentContact = null;
  $scope.contacts = [];

  function init () {
    $http.get(`${SERVER_URL}/contacts`).then(resp => {
      $scope.contacts = resp.data;
      console.log($scope.contacts);
    });
  }
  init();

  $scope.create = function (data, contactId) {
    var url = `${SERVER_URL}/contacts/${contactId}`;
    $http.post(url, data).then(resp => {
      console.log(data);
      $scope.currentContact = resp.data;
    });
  };
  $scope.create();

}

ContactController.$inject = ['$scope', '$http'];

export default ContactController;
