const isInLandscapeMode = () => {
  return window.innerWidth > window.innerHeight;
}

const ePaisagem=(x, y) => x>y;

console.log(ePaisagem(300,200));