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
            this.n1 = '';
            this.n2 = '';
            this.operator = '';
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
            var _this = this;
            this.$oper.addEventListener('click', function (e) {
                if (e.target instanceof HTMLButtonElement) {
                    var content = e.target.textContent;
                    if ('0123456789.'.indexOf(content) >= 0) {
                        if (_this.operator) {
                            _this.n2 += content;
                            _this.$result.textContent = _this.n2;
                        }
                        else {
                            _this.result = '';
                            _this.n1 += content;
                            _this.$result.textContent = _this.n1;
                        }
                    }
                    else if ('+-×÷'.indexOf(content) >= 0) {
                        if (_this.result) {
                            _this.n1 = _this.result;
                            _this.result = '';
                        }
                        _this.operator = content;
                    }
                    else if ('='.indexOf(content) >= 0) {
                        _this.result = _this.removeZero(_this.getResult(_this.n1, _this.n2, _this.operator));
                        _this.$result.textContent = _this.result;
                        _this.n1 = '';
                        _this.n2 = '';
                        _this.operator = '';
                    }
                    else if (content === 'Clear') {
                        _this.n1 = '';
                        _this.n2 = '';
                        _this.operator = '';
                        _this.result = '';
                        _this.$result.textContent = '0';
                    }
                    console.log(_this.n1, _this.operator, _this.n2);
                }
            });
        };
        Calculator.prototype.removeZero = function (string) {
            return string.replace(/.0+$/g, '').replace(/\.0+e/, 'e');
        };
        Calculator.prototype.getResult = function (n1, n2, operator) {
            var numberN1 = parseFloat(n1);
            var numberN2 = parseFloat(n2);
            var result = 0;
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
                    }
                    else {
                        result = numberN1 / numberN2;
                    }
                    break;
                default:
                    break;
            }
            return result.toPrecision(12);
        };
        return Calculator;
    }());
    new Calculator();
}
