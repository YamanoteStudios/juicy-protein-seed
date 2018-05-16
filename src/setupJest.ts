import 'jest-preset-angular';
import './jestGlobalMocks'; // browser mocks globally available for every test
global['CSS'] = null;

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});