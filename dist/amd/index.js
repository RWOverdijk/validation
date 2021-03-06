define(['exports', './validation-config', './validation', './utilities', './validation-locale', './validation-result', './validation-rules', './validation-group', './validate-custom-attribute', './validation-view-strategy', './strategies/twbootstrap-view-strategy', './decorators'], function (exports, _validationConfig, _validation, _utilities, _validationLocale, _validationResult, _validationRules, _validationGroup, _validateCustomAttribute, _validationViewStrategy, _strategiesTwbootstrapViewStrategy, _decorators) {
  'use strict';

  exports.__esModule = true;
  exports.configure = configure;

  function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

  exports.Utilities = _utilities.Utilities;
  exports.ValidationConfig = _validationConfig.ValidationConfig;
  exports.ValidationLocale = _validationLocale.ValidationLocale;

  _defaults(exports, _interopExportWildcard(_validationResult, _defaults));

  _defaults(exports, _interopExportWildcard(_validationRules, _defaults));

  exports.Validation = _validation.Validation;
  exports.ValidationGroup = _validationGroup.ValidationGroup;
  exports.ValidateCustomAttribute = _validateCustomAttribute.ValidateCustomAttribute;
  exports.ValidationViewStrategy = _validationViewStrategy.ValidationViewStrategy;
  exports.TWBootstrapViewStrategy = _strategiesTwbootstrapViewStrategy.TWBootstrapViewStrategy;
  exports.ensure = _decorators.ensure;

  function configure(aurelia, configCallback) {
    aurelia.globalResources('./validate-custom-attribute');
    if (configCallback !== undefined && typeof configCallback === 'function') {
      configCallback(_validation.Validation.defaults);
    }
    aurelia.singleton(_validationConfig.ValidationConfig, _validation.Validation.defaults);
    return _validation.Validation.defaults.locale();
  }
});