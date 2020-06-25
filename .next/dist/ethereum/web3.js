'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const web3=new Web3(window.web3.currentProvider);

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //we are in brower and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //we are server or user not using metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/a8c6d13db2c64eaba40177a6212ab1b4');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFPLEFBQVAsV0FBZ0IsQUFBaEIsZUFBOEIsT0FBTyxPQUFPLEFBQWQsU0FBcUIsQUFBdEQsYUFBa0UsQUFDaEU7QUFDQTtTQUFLLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFMLEFBRUQ7QUFKRCxPQUlLLEFBQ0g7QUFDQTtNQUFNLFdBQVMsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNkLEFBRGMsQUFBZixBQUlBO1NBQUssQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBTCxBQUNEO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS91YnVudHUva2lja3N0YXJ0ZXIifQ==