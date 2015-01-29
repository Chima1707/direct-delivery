'use strict';

angular.module('packing.item')
  .config(function($stateProvider) {
    $stateProvider.state('packing.item', {
      url: '/:id',
      abstract: true,
      templateUrl: 'app/packing/item/item.html',
      controller: 'PackingTableCtrl',
      controllerAs: 'packingTableCtrl',
      resolve: {
        dailyDelivery: function($stateParams, packingTableService) {
          return packingTableService.get($stateParams.id);
        },
        productStorages: function(packingTableLegendService) {
          return packingTableLegendService.get();
        }
      }
    })
    .state('packing.item.table', {
      url: '',
      templateUrl: 'components/packing-table/packing-table.html'
    });
  });
