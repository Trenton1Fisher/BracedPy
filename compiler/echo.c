#include <stdio.h>

int main() {
    char input[256];
    
    // Read input from standard input
    fgets(input, sizeof(input), stdin);
    
    // Print the input back to standard output
    printf("%s", input);
    return 0;
}
