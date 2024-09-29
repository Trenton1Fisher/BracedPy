#include <stdio.h>
#include <stdlib.h>
#include "stack.h"

// Create a new stack and initialize it
Stack* createStack() {
    Stack* stack = (Stack*)malloc(sizeof(Stack));
    stack->top = -1; 
    return stack;
}

// Check if the stack is full
bool isFull(Stack* stack) {
    return stack->top == MAX_SIZE - 1;
}

// Check if the stack is empty
bool isEmpty(Stack* stack) {
    return stack->top == -1;
}

// Push an item onto the stack
void push(Stack* stack, char item) {
    if (isFull(stack)) {
        fprintf(stderr, "Stack overflow: cannot push '%c'\n", item);
        return;
    }
    stack->items[++stack->top] = item;
}

// Pop an item from the stack
char pop(Stack* stack) {
    if (isEmpty(stack)) {
        fprintf(stderr, "Stack underflow: cannot pop\n");
        return '\0'; 
    }
    return stack->items[stack->top--];
}

// Peek at the top item of the stack without removing it
char peek(Stack* stack) {
    if (isEmpty(stack)) {
        fprintf(stderr, "Stack is empty: cannot peek\n");
        return '\0'; 
    }
    return stack->items[stack->top];
}

// Free the stack memory
void freeStack(Stack* stack) {
    free(stack);
}

