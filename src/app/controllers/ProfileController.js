(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: 'Admin',
      email: 'contact@dronecontroller.com',
      firstName: 'Nikita',
      lastName: 'Bobrik' ,
      deviceName: 'Drone #2346',
      company: 'Nikbo Inc.' ,
      address: 'Nezavisimosti str, 54' ,
      city: 'Minsk' ,
      state: '' ,
      biography: 'Drone which can to research field areas and getting the soil data.',
      postalCode : '220007'
    };
  }

})();
