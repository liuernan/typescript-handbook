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
            this.createContainer();
            this.createOutput();
            this.createOpertaion();
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
            this.$container.appendChild($output);
        };
        Calculator.prototype.createOpertaion = function () {
            var _this = this;
            var $oper = document.createElement('div');
            $oper.classList.add('calc-oper');
            this.$container.appendChild($oper);
            this.buttonList.forEach(function (arr) {
                var container = document.createElement('div');
                container.classList.add('calc-oper-row');
                arr.forEach(function (item) { return _this.createButton(item, container); });
                $oper.appendChild(container);
            });
        };
        Calculator.prototype.createButton = function (text, $el) {
            var button = document.createElement('button');
            button.innerText = text;
            button.className = "button-".concat(text);
            $el.appendChild(button);
        };
        return Calculator;
    }());
    new Calculator();
}
