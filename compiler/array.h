#ifndef ARRAY_H
#define ARRAY_H

typedef struct {
    char **data;  
    int size;      
    int capacity;   
} DynamicArray;

void initArray(DynamicArray *arr, int initialCapacity);
void addValue(DynamicArray *arr, const char *value);
void printDeclarationArray(DynamicArray *arr);
void printValueArray(DynamicArray *arr);
int findValue(DynamicArray *arr, const char *value);
void freeArray(DynamicArray *arr);

#endif 

