#ifndef STACK_H
#define STACK_H

#include <stdbool.h>

#define MAX_SIZE 100

//This will be used to track {} scopes and make sure each has a closing curly bracket

typedef struct Stack {
    int top;             
    char items[MAX_SIZE];
} Stack;

Stack* createStack();
bool isFull(Stack* stack);
bool isEmpty(Stack* stack);
void push(Stack* stack, char item);
char pop(Stack* stack);
char peek(Stack* stack);
void freeStack(Stack* stack);

#endif 
