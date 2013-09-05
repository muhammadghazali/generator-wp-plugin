'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var WpPluginGenerator = module.exports = function WpPluginGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    console.log('Finished!');
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(WpPluginGenerator, yeoman.generators.Base);

WpPluginGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
  {
    name: 'pluginName',
    message: 'Plugin name?'
  },
  {
    name: 'pluginURI',
    message: 'Plugin URI?'
  },
  {
    name: 'pluginDescription',
    message: 'Plugin Description?'
  },
  {
    name: 'pluginVersion',
    message: 'Plugin Version?'
  },
  {
    name: 'pluginAuthor',
    message: 'Plugin Author?'
  },
  {
    name: 'pluginAuthorURI',
    message: 'Plugin Author URI?'
  },
  {
    name: 'pluginLicense',
    message: 'Plugin Author License?'
  },
  ];

  this.prompt(prompts, function (props) {
    this.pluginName = props.pluginName;
    this.pluginURI = props.pluginURI;
    this.pluginDescription = props.pluginDescription;
    this.pluginVersion = props.pluginVersion;
    this.pluginAuthor = props.pluginAuthor;
    this.pluginAuthorURI = props.pluginAuthorURI;
    this.pluginLicense = props.pluginLicense;

    cb();
  }.bind(this));
};

WpPluginGenerator.prototype.app = function app() {
  this.template('_main.php', this.pluginName + '.php');
};

WpPluginGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
};
