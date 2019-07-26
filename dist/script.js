function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class DrumMachine extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleKeyPress",









































































    event => {
      switch (event.keyCode) {
        case 81:
          this.playSound('q');
          break;
        case 87:
          this.playSound('w');
          break;
        case 69:
          this.playSound('e');
          break;
        case 65:
          this.playSound('a');
          break;
        case 83:
          this.playSound('s');
          break;
        case 68:
          this.playSound('d');
          break;
        case 90:
          this.playSound('z');
          break;
        case 88:
          this.playSound('x');
          break;
        case 67:
          this.playSound('c');
          break;
        default:
          break;}

    });this.state = { soundDescription: '' };this.playSound = this.playSound.bind(this);this.handleKeyPress = this.handleKeyPress.bind(this);}componentDidMount() {document.addEventListener("keydown", this.handleKeyPress);}playSound(sound) {console.log(`play sound clicked`);console.log(`sound passed in: ${sound}`);switch (sound) {case 'q':this.audioRefQ.play();this.setState({ soundDescription: 'bump' });break;case 'w':this.setState({ soundDescription: 'card match' });this.audioRefW.play();break;case 'e':this.audioRefE.play();this.setState({ soundDescription: 'explosion' });break;case 'a':this.audioRefA.play();this.setState({ soundDescription: 'flame ball' });break;case 's':this.audioRefS.play();this.setState({ soundDescription: 'froggy hop' });break;case 'd':this.audioRefD.play();this.setState({ soundDescription: 'jumping' });break;case 'z':this.audioRefZ.play();this.setState({ soundDescription: 'shell' });break;case 'x':this.audioRefX.play();this.setState({ soundDescription: 'squish' });break;case 'c':this.audioRefC.play();this.setState({ soundDescription: 'wrong card' });break;default:break;}}

  render() {
    return (
      React.createElement("div", { onKeyDown: this.handleKey, id: "drum-machine", class: "drum__machine" },

      React.createElement(DrumMachineHeader, null),

      React.createElement("div", { class: "keypad__holder nes-container is-rounded" },

      React.createElement("button", { type: "button", class: "drum-pad nes-btn is-primary", id: "Q", onClick: () => this.playSound('q') }, "Q",

      React.createElement("audio", { ref: q => {this.audioRefQ = q;}, src: "https://bobmatyas.github.io/fcc-drum-machine/sounds/bump.mp3", class: "clip", id: "Q" })),


      React.createElement("button", { type: "button", class: "drum-pad nes-btn is-primary", id: "W", onClick: () => this.playSound('w') }, "W",

      React.createElement("audio", { ref: w => {this.audioRefW = w;}, src: "https://bobmatyas.github.io/fcc-drum-machine/sounds/card_match.mp3", class: "clip", id: "W" })),


      React.createElement("button", { type: "button", class: "drum-pad nes-btn is-primary", id: "E", onClick: () => this.playSound('e') }, "E",

      React.createElement("audio", { ref: e => {this.audioRefE = e;}, src: "https://bobmatyas.github.io/fcc-drum-machine/sounds/explosion.mp3", class: "clip", id: "E" })),


      React.createElement("button", { type: "button", class: "drum-pad nes-btn is-primary", id: "A", onClick: () => this.playSound('a') }, "A",

      React.createElement("audio", { ref: a => {this.audioRefA = a;}, src: "https://bobmatyas.github.io/fcc-drum-machine/sounds/flame_ball.mp3", class: "clip", id: "A" })),


      React.createElement("button", { type: "button", class: "drum-pad nes-btn is-primary", id: "S", onClick: () => this.playSound('s') }, "S",

      React.createElement("audio", { ref: s => {this.audioRefS = s;}, src: "https://bobmatyas.github.io/fcc-drum-machine/sounds/froggy_hop.mp3", class: "clip", id: "S" })),


      React.createElement("button", { type: "button", class: "drum-pad nes-btn is-primary", id: "D", onClick: () => this.playSound('d') }, "D",

      React.createElement("audio", { ref: d => {this.audioRefD = d;}, src: "https://bobmatyas.github.io/fcc-drum-machine/sounds/jumping.mp3", class: "clip", id: "D" })),


      React.createElement("button", { type: "button", class: "drum-pad nes-btn is-primary", id: "Z", onClick: () => this.playSound('z') }, "Z",

      React.createElement("audio", { ref: z => {this.audioRefZ = z;}, src: "https://bobmatyas.github.io/fcc-drum-machine/sounds/shell.mp3", class: "clip", id: "Z" })),


      React.createElement("button", { type: "button", class: "drum-pad nes-btn is-primary", id: "X", onClick: () => this.playSound('x') }, "X",

      React.createElement("audio", { ref: x => {this.audioRefX = x;}, src: "https://bobmatyas.github.io/fcc-drum-machine/sounds/squish.mp3", class: "clip", id: "X" })),



      React.createElement("button", { type: "button", class: "drum-pad nes-btn is-primary", id: "C", onClick: () => this.playSound('c') }, "C",

      React.createElement("audio", { ref: c => {this.audioRefC = c;}, src: "https://bobmatyas.github.io/fcc-drum-machine/sounds/wrong_card.mp3", class: "clip", id: "C" }))),



      React.createElement(DrumMachineSoundDisplay, { soundDescription: this.state.soundDescription })));


  }}


function DrumMachineHeader() {
  return (
    React.createElement("div", { class: "nes-container is-dark" },
    React.createElement("div", { class: "drum__machine__logo" }, React.createElement("i", { class: "nes-mario" }), "  ", React.createElement("h1", null, "Drum Machine"))));




}

function DrumMachineSoundDisplay(props) {

  return (
    React.createElement("div", { id: "display", class: "nes-container is-dark with-title" },
    React.createElement("p", { class: "title" }, "Sound Test"),
    React.createElement("p", null, props.soundDescription)));


}

ReactDOM.render(React.createElement(DrumMachine, null), document.getElementById('app'));