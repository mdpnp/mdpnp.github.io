(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$('#navbar-home').on('click', function() {
  ga('send', 'event', 'navbar', 'click', 'navbar-home');
});
$('#navbar-software a').on('click', function() {
  ga('send', 'event', 'navbar', 'click', 'navbar-software');
});
$('#navbar-docs a').on('click', function() {
  ga('send', 'event', 'navbar', 'click', 'navbar-docs');
});
$('#navbar-community').on('click', function() {
  ga('send', 'event', 'navbar', 'click', 'navbar-community');
});
$('#navbar-mdpnp').on('click', function() {
  ga('send', 'event', 'navbar', 'click', 'navbar-mdpnp');
});
$('#jumbotron-demo-link').on('click', function() {
  ga('send', 'event', 'internal-link', 'click', 'jumbotron-demo-link');
});
$('#landing-download-btn').on('click', function() {
  ga('send', 'event', 'external-link', 'click', 'landing-download-btn');
});
$('#landing-link-demo').on('click', function() {
  ga('send', 'event', 'internal-link', 'click', 'landing-link-demo');
});
$('#landing-link-github').on('click', function() {
  ga('send', 'event', 'external-link', 'click', 'landing-link-github');
});
$('#landing-link-docs').on('click', function() {
  ga('send', 'event', 'internal-link', 'click', 'landing-link-docs');
});
$('#landing-link-community').on('click', function() {
  ga('send', 'event', 'external-link', 'click', 'landing-link-community');
});
$('#section-community').on('click', function() {
  ga('send', 'event', 'external-link', 'click', 'section-community');
});
$('#link-list a').on('click', function() {
  ga('send', 'event', 'link-list', 'click', 'any');
});
$('#footer-github').on('click', function() {
  ga('send', 'event', 'footer', 'click', 'footer-github');
});
$('#footer-twitter').on('click', function() {
  ga('send', 'event', 'footer', 'click', 'footer-twitter');
});
$('#footer-google-plus').on('click', function() {
  ga('send', 'event', 'footer', 'click', 'footer-google-plus');
});
$('#footer-linkedin').on('click', function() {
  ga('send', 'event', 'footer', 'click', 'footer-linkedin');
});
$('#footer-facebook').on('click', function() {
  ga('send', 'event', 'footer', 'click', 'footer-facebook');
});
$('#footer-community').on('click', function() {
  ga('send', 'event', 'footer', 'click', 'footer-community');
});

},{}]},{},[1]);
