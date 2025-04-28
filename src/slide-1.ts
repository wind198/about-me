// @ts-ignore
const isFastForward = window.isFastForward;
export const pretagCode = `    class FSDev extends FEDev implements BE, Devops {
    private _knowledge: string[] = [];
    private _isSelfTaught = true;
    private _isProblemSolver = true;
    private _isGoodTeamPlayer = true;
    private _isTechChallenger = true;
    private _isTechEnthusiast = true;
    constructor() {
      super();
      setInterval(() => {
        this._fetchNewKnowledge();
      }, 1000); // Until the end of the universe
    }
    private doBackend() {}
    private doDevops() {}
    private doFrontend() {}
  
    private async _fetchNewKnowledge() { 
      const res = await fetch('*');
      const data = await res.json();
      this.neverStopLearning(...data);
    }
  
    private neverStopLearning(...newTechs: string[]) {
      this._knowledge.push(...newTechs);
    }
  
    public doWork(problem: any) {
      let power = 100;
      let success = false;
      while (!success) {
        if (power > 0) {
          success = problem
          .map(this.doFrontend)
          .map(this.doBackend)
          .map(this.doDevops);
          
          if (success) {
            break;
          } else {
            power -= 1;
          }
        } else {
          if (this._isTechEnthusiast) {
            power = 100; // When enthusiasm alive
            continue; // I'm not giving up
          } 
          // ... still coding
    `;

export function beginTyping() {
  const pre = document.getElementById("typing-code")!;
  const code = pretagCode;
  let i = 0;
  function type() {
    if (i < code.length) {
      const currentChar = code.charAt(i);
      if (currentChar.match(/\s/)) {
        //count number of spaces
        const spaces = code.slice(i).match(/\s+/g);
        const spaceCount = spaces ? spaces[0].length : 0;
        //skip spaces
        pre.textContent += code.slice(i, i + spaceCount);
        i += spaceCount;
      } else {
        pre.textContent += currentChar;
        i++;
      }
      // Random delay between 20ms and 100ms for uneven typing pace
      if (!isFastForward) {
        setTimeout(type, Math.random() * 80 + 20);
      } else {
        setTimeout(type, 1);
      }
    } else {
      const style = document.createElement("style");
      style.textContent = `
        #typing-code::after {
          animation: blink 0.2s infinite;
        }
      `;
      document.head.appendChild(style);
      document.querySelector(".next-button")?.classList.remove("hidden");
    }
  }
  type();
}
window.addEventListener("load", beginTyping);
