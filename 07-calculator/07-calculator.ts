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
    n1: string = '';
    n2: string = '';
    operator: string = '';
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
          const content = e.target.textContent;
          if ('0123456789.'.indexOf(content) >= 0) {
            if (this.operator) {
              this.n2 += content;
              this.$result.textContent = this.n2;
            } else {
              this.result = '';
              this.n1 += content;
              this.$result.textContent = this.n1;
            }
          } else if ('+-×÷'.indexOf(content) >= 0) {
            if (this.result) {
              this.n1 = this.result;
              this.result = '';
            }
            this.operator = content;
          } else if ('='.indexOf(content) >= 0) {
            this.result = this.removeZero(
              this.getResult(this.n1, this.n2, this.operator)
            );
            this.$result.textContent = this.result;
            this.n1 = '';
            this.n2 = '';
            this.operator = '';
          } else if (content === 'clear') {
            this.n1 = '';
            this.n2 = '';
            this.operator = '';
            this.result = '';
            this.$result.textContent = '0';
          }
          console.log(this.n1, this.operator, this.n2);
        }
      });
    }
    removeZero(string: string) {
      return string.replace(/.0+$/g, '').replace(/\.0+e/, 'e');
    }
    getResult(n1: string, n2: string, operator: string): string {
      const numberN1: number = parseFloat(n1);
      const numberN2: number = parseFloat(n2);
      let result = 0;
      switch (operator) {
        case '+':
          result = numberN1 + numberN2;
          break;
        case '-':
          result = numberN1 - numberN2;
          break;
        case '×':
          result = numberN1 * numberN2;
          break;
        case '÷':
          if (numberN2 === 0) {
            return '不是数字';
          } else {
            result = numberN1 / numberN2;
          }
          break;
        default:
          break;
      }
      return result.toPrecision(12);
    }
  }

  new Calculator();
}
