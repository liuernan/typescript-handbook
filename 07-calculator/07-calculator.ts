{
  class Calculator {
    $container: HTMLDivElement;
    buttonList: Array<Array<string>> = [
      ['clear', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    constructor() {
      this.createContainer();
      this.createOutput();
      this.createOpertaion();
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
      this.$container.appendChild($output);
    }
    createOpertaion(): void {
      const $oper = document.createElement('div');
      $oper.classList.add('calc-oper');
      this.$container.appendChild($oper);

      this.buttonList.forEach((arr) => {
        const container = document.createElement('div');
        container.classList.add('calc-oper-row');
        arr.forEach((item) => this.createButton(item, container));
        $oper.appendChild(container);
      });
    }
    createButton(text: string, $el: HTMLElement): void {
      const button: HTMLButtonElement = document.createElement('button');
      button.innerText = text;
      button.className = `button-${text}`;
      $el.appendChild(button);
    }
  }

  new Calculator();
}
