  'use strict';

angular.module('delivery')
  .controller('SignOffCtrl', function FacilityDeliveryCtrl($state, $scope, signOffService, log, deliveryService, dailyDelivery) {
    var vm = this;
    var parent = $scope.facDevCtrl;
    vm.facRnd = parent.facRnd;
    vm.facRnd.receivedBy = vm.facRnd.receivedBy || vm.facRnd.facility.contact;
    vm.facRnd.recipientPhoneNo = vm.facRnd.recipientPhoneNo || vm.facRnd.facility.phoneNo;
    vm.dailyDelivery = dailyDelivery;
    vm.signature = {
      toDataURL: function(){
        return '';
      },
      isEmpty: function() {
        return true;
      }
    };

    vm.isValidSignature = function(){
      return vm.signature.isEmpty();
    };

    vm.submit = function() {
      if(!(angular.isString(vm.facRnd.receivedBy) && vm.facRnd.receivedBy !== '')){
        return log.error('enterRecipientName');
      }
      var dataURL = vm.signature.toDataURL();
      if (vm.isValidSignature()) {
        return log.error('invalidSignature');
      }
      signOffService.signOff(dailyDelivery, vm.facRnd, dataURL)
        .then(deliveryService.saved)
        .catch(deliveryService.failed);
    };
  });
