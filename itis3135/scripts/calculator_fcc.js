const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

const createResultString = (key, displayedNum, state)=> {

    const keyContent = key.textContent;
    const {action} = key.dataset;
    const {firstValue,
            modValue,
            operator,
            previousKeyType
    } = state;
}

const getKeyType = (key)=> {
    const {action} = key.dataset;
    if (!action) return 'number';
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) return 'operator';

    return action;
}

keys.addEventListener('click', e=> {
    if (e.targer.matches('button')) return
    const displayedNum = display.textContent;
    const resultString = createResultString(e.target, displayedNum, calculator.dataset);

    const createResultString = ()=> {
         if (!action) {
            return displayedNum === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate'
            ? keyContent;
            : displayedNum+keyContent;
        }
    }

    const createResultString = ()=> {
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;

            return firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate'
            ? calculate(firstValue, operator, secondValue);  
            : displayedNum;;
        }
    }

    const createResultString = ()=> {
        if (action === 'decimal') {
            if (!displayedNum.includes(".")) return displayedNum + '.';
            if (previousKeyType === 'operator' || previousKeyType === 'calculate')  return '0.';
            return displayedNum;
        }
    }

    const createResultString = ()=> {
        if (key.textContent === 'AC') {
            calculator.dataset.firstValue = '';
            calculator.dataset.modValue = '';
            calculator.dataset.operator = '';
            calculator.dataset.previousKeyType = '';
        } else {
                key.textContent = 'AC';
        }
        if (action === 'clear') return 0;
    }

    const createResultString = ()=> {
        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const modValue = calculator.dataset.modValue;

            return firstValue
                ? previousKeyType === 'calculate'
                    ? calculate(displayedNum, operator, modValue);
                    : calculate(firstValue, operator, displayedNum);
                : displayedNum;
                                
        }
    }

    const calculate = (n1, operator, n2)=> {
    const firstNum = parseFloat(n1);
    const secondNum = parseFloat(n2);
    if (operator === 'add') return firstNum + secondNum;
    if (operator === 'subtract') return firstNum - secondNum;
    if (operator === 'multiply') return firstNum * secondNum;
    if (operator === 'divide') return firstNum / secondNum;
    }

    Array.from(key.parentNode.children)
        .forEach(k=>k.classList.remove('is-depressed')); 
})


        
