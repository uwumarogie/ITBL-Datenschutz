
// Unicode strings can cause problems with the native btoa() and atob() functions
// From: https://developer.mozilla.org/en-US/docs/Glossary/Base64

function base64ToBytes(base64: string) {
  const binString = atob(base64);
  return Uint8Array.from(binString, (m: string) => m.codePointAt(0) ?? 0);
}

function bytesToBase64(bytes: Uint8Array) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");
  return btoa(binString);
}

const encoder = new TextEncoder()
const decoder = new TextDecoder()

export function toBase64(str: string){
  return bytesToBase64(encoder.encode(str))
}

export function fromBase64(base64: string) {
  return decoder.decode(base64ToBytes(base64))
}