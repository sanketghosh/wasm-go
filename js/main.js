import "./go_wasm.js";

/** creating an instance of  */
const go = new Go();

async function runWASM() {
  let result = await WebAssembly.instantiateStreaming(
    fetch("main.wasm"),
    go.importObject
  );
  go.run(result.instance);
}

runWASM();
