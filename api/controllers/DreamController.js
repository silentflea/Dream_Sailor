/**
 * DreamController
 *
 * @description :: Server-side logic for managing dreams
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function (request, result) {
		Dream.find().sort("id desc").exec(function(err, dreams){
			result.view('dream_list', {dreams: dreams})
		})
  }
};
