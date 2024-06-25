export function passwordAnimation(
  password: string,
  setDisplayPassword: (str: string) => void,
) {
  const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
  const speed = 20;
  const increment = 8;

  let clen = password.length;
  let si = 0;
  let stri = 0;
  let block = "";
  let fixed = "";

  const rustle = (i: number) => {
    setTimeout(() => {
      if (--i) {
        rustle(i);
      }
      nextFrame();
      si = si + 1;
    }, speed);
  };

  const nextFrame = () => {
    for (let i = 0; i < clen - stri; i++) {
      const num = Math.floor(theLetters.length * Math.random());
      const letter = theLetters.charAt(num);
      block += letter;
    }
    if (si === increment - 1) {
      stri++;
    }
    if (si === increment) {
      fixed += password.charAt(stri - 1);
      si = 0;
    }
    setDisplayPassword(fixed + block);
    block = "";
  };

  rustle(clen * increment + 1);
}
