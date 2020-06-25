'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/ubuntu/kickstarter/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

              case 10:
                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:
                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Back')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.description, onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.value, onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.recipient, onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oopps!!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Create!!')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQVEsQUFBSyxBQUFPLEFBQVE7O0FBQzVCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFLLEFBQWM7O0FBQzNCLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFFYjs7Ozs7Ozs7Ozs7Ozs7O29OQUNKLEE7YUFBTSxBQUNJLEFBQ047bUJBRkUsQUFFVSxBQUNaO2lCQUhFLEFBR1EsQUFDVjtvQkFKRSxBQUlXLEFBQ2I7ZSxBQUxFLEFBS007QUFMTixBQUNGLGEsQUFVSjsyRkFBUyxpQkFBQSxBQUFNLE9BQU47a0VBQUE7O3NFQUFBO29CQUFBOzZDQUFBO21CQUNMO3NCQUFBLEFBQU0sQUFFQTs7QUFIRCwyQkFHVSx3QkFBUyxNQUFBLEFBQUssTUFIeEIsQUFHVSxBQUFvQjs4QkFDQyxNQUovQixBQUlvQyxPQUpwQyxBQUlFLDBCQUpGLEFBSUUsYUFKRixBQUljLG9CQUpkLEFBSWMsT0FKZCxBQUlvQix3QkFKcEIsQUFJb0IsQUFDekI7O3NCQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLGNBTHZCLEFBS0wsQUFBYyxBQUEyQjtnQ0FMcEM7Z0NBQUE7dUJBT2tCLGNBQUEsQUFBSyxJQVB2QixBQU9rQixBQUFTOzttQkFBeEI7QUFQSCxvQ0FBQTtnQ0FBQTt1QkFRRyxTQUFBLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUErQixhQUFhLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQUE3RCxBQUE0QyxBQUF1QixVQUFuRSxBQUE0RSxXQUE1RSxBQUF1RixLQUFLLEVBQUMsTUFBSyxTQVJyRyxBQVFHLEFBQTRGLEFBQU0sQUFBUzs7bUJBQ2xIOytCQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQVR0QztnQ0FBQTtBQUFBOzttQkFBQTtnQ0FBQTtnREFZRDs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYSxZQVozQixBQVlELEFBQWMsQUFBa0I7O21CQUV0QztzQkFBQSxBQUFLLFNBQVMsRUFBQyxTQWRSLEFBY1AsQUFBYyxBQUFTOzttQkFkaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFpQkM7bUJBR047OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUNBLEFBQ0UsQUFJRiwwQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FOQSxBQU1BLEFBQ0gscUNBQUEsQUFBQyx1Q0FBTyxVQUFVLEtBQWxCLEFBQXVCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQS9DLEFBQXFEO29CQUFyRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNGO0FBREU7QUFBQSx5QkFDRixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERSxBQUNGLEFBQ0EsZ0NBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixhQUFhLFVBQVUseUJBQUE7aUJBQU8sT0FBQSxBQUFLLFNBQVMsRUFBQyxhQUFZLE1BQUEsQUFBTSxPQUF4QyxBQUFPLEFBQWMsQUFBMEI7QUFBL0Y7b0JBQUE7c0JBSEEsQUFDRSxBQUVGLEFBRUU7QUFGRjsyQkFFRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ047QUFETTtBQUFBLHlCQUNOLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURNLEFBQ04sQUFDQyxtQ0FBQSxBQUFDLHdDQUFNLE9BQU8sS0FBQSxBQUFLLE1BQW5CLEFBQXlCLE9BQU8sVUFBVSx5QkFBQTtpQkFBTyxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU0sTUFBQSxBQUFNLE9BQWxDLEFBQU8sQUFBYyxBQUFvQjtBQUFuRjtvQkFBQTtzQkFQRyxBQUtFLEFBRUwsQUFFSztBQUZMOzJCQUVNLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDTjtBQURNO0FBQUEseUJBQ04sY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRE0sQUFDTixBQUNDLDhCQUFBLEFBQUMsd0NBQU8sT0FBTyxLQUFBLEFBQUssTUFBcEIsQUFBMEIsV0FBVyxVQUFVLHlCQUFBO2lCQUFPLE9BQUEsQUFBSyxTQUFTLEVBQUMsV0FBVSxNQUFBLEFBQU0sT0FBdEMsQUFBTyxBQUFjLEFBQXdCO0FBQTVGO29CQUFBO3NCQVhHLEFBU0UsQUFFTCxBQUVLO0FBRkw7MkJBRUssQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixXQUFVLFNBQVMsS0FBQSxBQUFLLE1BQTlDLEFBQW9EO29CQUFwRDtzQkFiRixBQWFFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQXRCRCxBQUNFLEFBT0gsQUFjRSxBQUlKOzs7Ozs2R0FsRDRCLEE7Ozs7O21CQUNwQjtBLDBCQUFTLE1BQU0sQSxNQUFmLEE7a0RBQ0EsRUFBQyxTQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWYyxBLEFBNkR6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvdWJ1bnR1L2tpY2tzdGFydGVyIn0=