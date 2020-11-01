"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInWithGoogle = exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: "AIzaSyBANT-MrEr3NhIJCqXGSH2KJclgg0gyOsU",
  authDomain: "crown-1.firebaseapp.com",
  databaseURL: "https://crown-1.firebaseio.com",
  projectId: "crown-1",
  storageBucket: "crown-1.appspot.com",
  messagingSenderId: "441750833429",
  appId: "1:441750833429:web:301ecf7f00090f3d33411c",
  measurementId: "G-GM8X48RS2W"
};

_app["default"].initializeApp(config);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  promp: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup;
};

exports.signInWithGoogle = signInWithGoogle;