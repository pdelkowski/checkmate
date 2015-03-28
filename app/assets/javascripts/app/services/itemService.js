// Generated by CoffeeScript 1.9.1
(function() {
  'use strict';
  app.service('ItemService', [
    '$http', 'API_URL', function($http, API_URL) {
      this.save = function(checklist_id, item) {
        return $http.post(API_URL + '/checklists/' + checklist_id + '/items', item);
      };
      this.search = function(query) {
        return $http.get(API_URL + query);
      };
      this.fetch = function(checklist_id) {
        return $http.get(API_URL + '/checklists/' + checklist_id + '/items').success(function(data, status, headers, config) {
          return data;
        }).error(function(data, status, headers, config) {
          console.log('Error in itemService, method fetch()');
          return 'Error';
        });
      };
      this.get = function(id) {
        return $http.get(API_URL + 'items/' + id);
      };
    }
  ]);

}).call(this);
