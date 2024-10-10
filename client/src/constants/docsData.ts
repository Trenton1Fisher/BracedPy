export const docsData = [
  {
    id: 1,
    jsxId: 'variable-declaration',
    title: 'Variable Declaration',
    description:
      'In this language, variables are declared by directly assigning a value to them. You must initialize every variable with a value at the time of declaration. The value can be either an `int` (integer), `float` (floating point), or `bool` (boolean). There is no need to specify a type, but all variables must be assigned an initial value. Each statement must end with a semicolon `;` to indicate the end of the line.',
    codeBlockText: `
      x = 5;       # int
      y = 3.14;    # float
      isActive = True; # bool
      `,
  },
  {
    id: 2,
    jsxId: 'basic-operations',
    title: 'Basic Operations',
    description:
      'Basic arithmetic operations such as addition, subtraction, multiplication, and division are supported. These operations can be performed on both `int` (integer) and `float` (floating point) values. The language allows you to combine these types in operations, and the result will follow the usual mathematical rules.',
    codeBlockText: `
      a = 10 + 5;      # int addition
      b = 20.5 - 3.2;  # float subtraction
      c = 4 * 2.5;     # int and float multiplication
      d = 9 / 2;       # float division (result is a float)
      `,
  },
  {
    id: 3,
    jsxId: 'if-statements',
    title: 'If Statements',
    description:
      'The `if` statement is used to execute a block of code only if a specified condition evaluates to true. This condition can be any valid expression that results in a boolean outcome, such as comparing two variables using conditional operators. If the condition is true, the code inside the block is executed. The `if` statement is an essential part of controlling the flow of your program based on certain conditions.',
    codeBlockText: `
      if x > 10: {
        result = 100;
        break;   # Exit the if block early
      }
      `,
  },
  {
    id: 4,
    jsxId: 'elif-statements',
    title: 'Elif Statements',
    description:
      'The `elif` statement is used for additional condition checks after an initial `if` statement. If the first `if` condition evaluates to false, the `elif` condition will be checked. You can chain multiple `elif` conditions after an `if` statement to handle different possible values or scenarios. As with the `if` statement, the `elif` condition must be followed by a block of code and end with a semicolon `;`.',
    codeBlockText: `
      if x > 10: {
        result = 100;
        break;   # Exit the block early
      } elif x == 10: {
        result = 50;
        break;   # Exit the elif block early
      }
      `,
  },
  {
    id: 5,
    jsxId: 'else-statements',
    title: 'Else Statements',
    description:
      'The `else` statement is used as the final fallback option when none of the preceding `if` or `elif` conditions evaluate to true. This ensures that even if all other conditions fail, some code will still be executed. An `else` statement does not require a condition, and it is placed at the end of the conditional chain. Important Note is if and elif statements require : while the else statement does not, this is important and will cause compilation errors if not followed.',
    codeBlockText: `
      if x > 10: {
        result = 100;
        break;   # Exit the if block early
      } elif x == 10: {
        result = 50;
        break;   # Exit the elif block early
      } else {
        result = 0;
        break;   # Exit the else block early
      }
      `,
  },
  {
    id: 6,
    jsxId: 'conditional-operators',
    title: 'Supported Conditional Operators',
    description:
      'Conditional operators are used to compare values in `if`, `elif`, or other conditional statements. These operators evaluate to either true or false based on the comparison. The supported operators include: `==` for equality, `!=` for inequality, `>` for greater than, `<` for less than, `>=` for greater than or equal to, and `<=` for less than or equal to. These are essential for controlling the flow of your program based on the values of variables.',
    codeBlockText: `
      ==    # equal to
      !=    # not equal to
      >     # greater than
      <     # less than
      >=    # greater than or equal to
      <=    # less than or equal to
      `,
  },
  {
    id: 7,
    jsxId: 'while-loops',
    title: 'While Loops',
    description:
      'A `while` loop allows you to repeatedly execute a block of code as long as a specified condition remains true. The condition is evaluated before each iteration, and the loop will continue to execute until the condition becomes false. Be mindful of the condition to avoid infinite loops.',
    codeBlockText: `
      x = 0;
      while x < 10: {
        x = x + 1;
        if x == 5: {
          break;  # Exit the loop when x is 5
        }
      }
      `,
  },
]
