{
  class Calculator {
    $container: HTMLDivElement;
    $oper: HTMLDivElement;
    $result: HTMLSpanElement;
    buttonList: Array<Array<string>> = [
      ['clear', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    n1: string;
    n2: string;
    result: string = '0';
    constructor() {
      this.createContainer();
      this.createOutput();
      this.createOpertaion();
      this.bindEvents();
    }
    createContainer(): void {
      const $calc = document.createElement('div');
      $calc.classList.add('calc-container');
      document.body.appendChild($calc);
      this.$container = $calc;
    }
    createOutput(): void {
      const $output = document.createElement('div');
      $output.classList.add('calc-output');

      this.$result = document.createElement('span');
      this.$result.textContent = this.result;
      $output.appendChild(this.$result);

      this.$container.appendChild($output);
    }
    createOpertaion(): void {
      this.$oper = document.createElement('div');
      this.$oper.classList.add('calc-oper');

      this.buttonList.forEach((arr) => {
        const container = document.createElement('div');
        container.classList.add('calc-oper-row');
        arr.forEach((item) => this.createButton(item, container));
        this.$oper.appendChild(container);
      });

      this.$container.appendChild(this.$oper);
    }
    createButton(text: string, $el: HTMLElement): void {
      const button: HTMLButtonElement = document.createElement('button');
      button.innerText = text;
      button.className = `button-${text}`;
      $el.appendChild(button);
    }
    bindEvents(): void {
      this.$oper.addEventListener('click', (e) => {
        if (e.target instanceof HTMLButtonElement) {
          console.log(e.target.textContent);
        }
      });
    }
  }

  new Calculator();
}
