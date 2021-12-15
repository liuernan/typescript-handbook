{
    var Calculator = /** @class */ (function () {
        function Calculator() {
            this.buttonList = [
                ['clear', '÷'],
                ['7', '8', '9', '×'],
                ['4', '5', '6', '-'],
                ['1', '2', '3', '+'],
                ['0', '.', '='],
            ];
            this.result = '0';
            this.createContainer();
            this.createOutput();
            this.createOpertaion();
            this.bindEvents();
        }
        Calculator.prototype.createContainer = function () {
            var $calc = document.createElement('div');
            $calc.classList.add('calc-container');
            document.body.appendChild($calc);
            this.$container = $calc;
        };
        Calculator.prototype.createOutput = function () {
            var $output = document.createElement('div');
            $output.classList.add('calc-output');
            this.$result = document.createElement('span');
            this.$result.textContent = this.result;
            $output.appendChild(this.$result);
            this.$container.appendChild($output);
        };
        Calculator.prototype.createOpertaion = function () {
            var _this = this;
            this.$oper = document.createElement('div');
            this.$oper.classList.add('calc-oper');
            this.buttonList.forEach(function (arr) {
                var container = document.createElement('div');
                container.classList.add('calc-oper-row');
                arr.forEach(function (item) { return _this.createButton(item, container); });
                _this.$oper.appendChild(container);
            });
            this.$container.appendChild(this.$oper);
        };
        Calculator.prototype.createButton = function (text, $el) {
            var button = document.createElement('button');
            button.innerText = text;
            button.className = "button-".concat(text);
            $el.appendChild(button);
        };
        Calculator.prototype.bindEvents = function () {
            this.$oper.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    console.log(e.target.textContent);
                }
            });
        };
        return Calculator;
    }());
    new Calculator();
}
