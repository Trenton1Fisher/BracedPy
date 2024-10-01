%{
#include <stdio.h>
#include <stdlib.h>
#include "ast.h" 

ASTNode *ast_root; //Global variable for out abstract syntax tree

void yyerror(const char *s);
int yylex(void);

%}

%token

// Start rule
%start program

%%

// Main function
int main(void) {
    yyparse(); // Start parsing
    return 0; // Exit
}

// Error handling function
void yyerror(const char *s) {
    fprintf(stderr, "Error: %s\n", s);
}
