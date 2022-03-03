## aframe-midi-component

[![Version](http://img.shields.io/npm/v/aframe-midi-component.svg?style=flat-square)](https://npmjs.org/package/aframe-midi-component)
[![License](http://img.shields.io/npm/l/aframe-midi-component.svg?style=flat-square)](https://npmjs.org/package/aframe-midi-component)

A component to access the web midi system

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-midi-component@1.0.0/dist/aframe-midi-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity midi="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-midi-component
```

Then require and use.

```js
require('aframe');
require('aframe-midi-component');
```
