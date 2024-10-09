#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "array.h"

void initArray(DynamicArray *arr, int initialCapacity) {
    arr->data = (char **) malloc(initialCapacity * sizeof(char *));
    arr->size = 0;
    arr->capacity = initialCapacity;
}

void addValue(DynamicArray *arr, const char *value) {
    if (findValue(arr, value) != -1) {
        return; 
    }

    if (arr->size == arr->capacity) {
        arr->capacity *= 2; 
        arr->data = (char **) realloc(arr->data, arr->capacity * sizeof(char *));
    }
    arr->data[arr->size] = (char *) malloc((strlen(value) + 1) * sizeof(char));
    strcpy(arr->data[arr->size], value);
    arr->size++;  
}


void printDeclarationArray(DynamicArray *arr){
    printf("\n");
    for (int i = 0; i < arr->size; i++) {
        printf("double %s;\n", arr->data[i]); 
    }
}

void printValueArray(DynamicArray *arr) {
    for (int i = 0; i < arr->size; i++) {
       printf("printf(\"%s: %%g\\n\", %s);\n", arr->data[i], arr->data[i]);
    }
}

int findValue(DynamicArray *arr, const char *value) {
    for (int i = 0; i < arr->size; i++) {
        if (strcmp(arr->data[i], value) == 0) {
            return i;
        }
    }
    return -1;  
}

void freeArray(DynamicArray *arr) {
    for (int i = 0; i < arr->size; i++) {
        free(arr->data[i]);  
    }
    free(arr->data);  
}
