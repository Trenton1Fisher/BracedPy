%{
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "array.h"

DynamicArray arr;
char* allStatements[500];
int statementIndex = 0;  

extern YY_BUFFER_STATE yy_create_buffer(FILE *file, int size);
extern void yy_delete_buffer(YY_BUFFER_STATE buffer);
extern int yylex_destroy(void);


void addStatement(const char* stmt) {
    if (statementIndex < 1000) {
        allStatements[statementIndex] = strdup(stmt);
        statementIndex++;
    } else {
        fprintf(stderr, "Error: allStatements array is full.\n");
    }
}

%}

%option noyywrap
%option yylineno

%%

^[ \t]*\r?\n  /* Skip blank lines */

^[ \t]*#.*\r?\n  /* Skip whole-line comments. */

#.*$  /* Skip comments on the same line as a statement. */

<<EOF>> {
    yyterminate();
}

[ \t]  /* Ignore spaces that haven't been handled above. */

"and"      { 
    addStatement("and");
}
"break"    { 
    addStatement("break");
}
"elif"     { 
    addStatement("else if(");
}
"else"     { 
    addStatement("else");
}
"if"       { 
    addStatement("if(");
}
"or"       { 
    addStatement("or");
}
"while"    { 
    addStatement("while(");
}

"True"     {
    addStatement("1");
}
"False"    {
    addStatement("0");
}

[a-zA-Z_][a-zA-Z0-9_]* {
    char *copy = (char *) malloc(strlen(yytext) + 1); 
    strcpy(copy, yytext);  
    addValue(&arr, copy); 
    free(copy);
    addStatement(yytext);  // Add variable/identifier to allStatements
}

[0-9]*"."[0-9]+ {
    addStatement(yytext);  // Add float to allStatements
}

[0-9]+ {
    addStatement(yytext);  // Add integer to allStatements
}

"="      { 
    addStatement(" = ");  // Add "=" to allStatements
}
"+"      { 
    addStatement(" + ");  // Add "+" to allStatements
}
"-"      { 
    addStatement(" - ");  // Add "-" to allStatements
}
"*"      { 
    addStatement(" * ");  // Add "*" to allStatements
}
"/"      { 
    addStatement(" / ");  // Add "/" to allStatements
}
"=="     { 
    addStatement(" == ");  // Add "==" to allStatements
}
"!="     { 
    addStatement(" != ");  // Add "!=" to allStatements
}
">"      { 
    addStatement(" > ");  // Add ">" to allStatements
}
">="     { 
    addStatement(" >= ");  // Add ">=" to allStatements
}
"<"      { 
    addStatement(" < ");  // Add "<" to allStatements
}
"<="     { 
    addStatement(" <= ");  // Add "<=" to allStatements
}
"("      { 
    addStatement("(");  // Add "(" to allStatements
}
")"      { 
    addStatement(")");  // Add ")" to allStatements
}
":"      { 
    addStatement(")");  // Add ")" for colon
}
";"      { 
    addStatement(";");  // Add semicolon to allStatements
}
"\n"     { 
    addStatement("\n");  // Add newline to allStatements
}
"\r" {/*ignore */}
"{"      { 
    addStatement(" {");  // Add opening brace to allStatements
}
"}"      { 
    addStatement("}");  // Add closing brace to allStatements
}

. {
    fprintf(stderr, "Unrecognized character '%s' at line %d, character '%c' (ASCII %d)\n", yytext, yylineno, yytext[0], (int)yytext[0]);
}



%%

int main(int argc, char** argv) {
    initArray(&arr, 5);

    printf("#include <stdio.h>\n");
    printf("#include <stdlib.h>\n");
    printf("#include <string.h>\n");

    printf("int main(int argc, char** argv) {\n");

    yylex();

    printDeclarationArray(&arr);
    printf("\n");

    for (int i = 0; i < statementIndex; i++) {
        printf("%s", allStatements[i]);
    }
    printf("\n");

    printValueArray(&arr);
    printf("\n");

    printf("    return 0;\n");
    printf("}\n");

    freeArray(&arr);

    for (int i = 0; i < statementIndex; ++i) {
        if (allStatements[i] != NULL) {
            free(allStatements[i]);
            allStatements[i] = NULL; 
        }
    }

    yy_delete_buffer(YY_CURRENT_BUFFER);
    yylex_destroy(); 

    return EXIT_SUCCESS;
}

