/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}
AFRAME.registerSystem("midi", {
  schema: {
    deviceName: {
      type: "string",
      default: "",
    },
  },

  init: function () {
    this.midiOutput = null;
    this._initialized = false;

    navigator.requestMIDIAccess({ software: true }).then(
        function (access) {
          // Get lists of available MIDI controllers
          this._inputs = access.inputs;
          console.log("Found midi inputs:");
          this._inputs.forEach(function (output) {
            console.log(input);
          });
          this._outputs = access.outputs;
          console.log("Found midi outputs:");
          this._outputs.forEach(function (output) {
            console.log(output);
          });

          this._initialized = true;
          this.update({});
        }.bind(this)
    );
  },
  update: function (oldData) {
    if (!this._initialized) return;

    if (this.data.deviceName !== oldData.deviceName) {
      let found = false;
      this._outputs.forEach(
          function (output) {
            if (output.name === this.data.deviceName) {
              this.midiOutput = output;
              found = true;
              console.log("Using midi output: ", this.midiOutput);
            }
          }.bind(this)
      );
      if (!found) {
        console.log("Could not find device: ", this.data.deviceName);
      }
    }
  },

});

AFRAME.registerComponent("midi", {
  multiple: true,
  schema: {
    type: {
      type: "string",
      default: "message",
      oneOf: ["message", "noteOn", "programChange"],
    },
    message: {
      type: "array",
      default: [144, 60, 127],
    },
    note: {
      type: "number",
      default: 60,
    },
    delay: {
      type: "number",
      default: 100,
    },
    on: {
      type: "string",
      default: "click",
    },
  },
  init: function () {},
  update: function (oldData) {
    if (this.data.on !== oldData.on) {
      console.log("Removing old listener on '", oldData.on, "' event");
      this.el.removeEventListener(oldData.on, this._onEvent.bind(this));

      console.log("Adding listener on '", this.data.on, "' event");
      this.el.addEventListener(this.data.on, this._onEvent.bind(this));
    }
  },
  _onEvent: function (evt) {
    //console.log("Event: ", evt);
    switch (this.data.type) {
      case "message":
        this.system.midiOutput.send(this.data.message); // sends the message.
        break;
      default:
        console.log("Unknwn type: ", this.data.type);
    }
  },
});
