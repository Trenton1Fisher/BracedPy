%{
#include <stdio.h>
%}

%option noyywrap

%%

[0-9]+\.[0-9]+   { printf("FLOAT: %s\n", yytext); }
[0-9]+           { printf("INTEGER: %s\n", yytext); } 
" "|\t|\n         // Ignore whitespace
"#".*            // Ignore comments
"if"             { printf("IF: %s\n", yytext); }
"elif"           { printf("ELIF: %s\n", yytext); }
"else"           { printf("ELSE: %s\n", yytext); }
"return"         { printf("RETURN: %s\n", yytext); }
"true"           { printf("BOOLEAN: %s\n", yytext); } 
"false"          { printf("BOOLEAN: %s\n", yytext); } 
"+"              { printf("PLUS: %s\n", yytext); }
"-"              { printf("MINUS: %s\n", yytext); }
"*"              { printf("TIMES: %s\n", yytext); }
"/"              { printf("DIVIDE: %s\n", yytext); }
"=="             { printf("EQUAL: %s\n", yytext); }
"!="             { printf("NOT EQUAL: %s\n", yytext); }
">"              { printf("GREATER: %s\n", yytext); }
"<"              { printf("LESS: %s\n", yytext); }
">="             { printf("GREATER EQUAL: %s\n", yytext); }
"<="             { printf("LESS EQUAL: %s\n", yytext); }
"="              { printf("ASSIGN: %s\n", yytext); }
";"              { printf("SEMICOLON: %s\n", yytext); } 
"{"              { printf("LBRACE: %s\n", yytext); } 
"}"              { printf("RBRACE: %s\n", yytext); } 
"("              { printf("LPAREN: %s\n", yytext); } 
")"              { printf("RPAREN: %s\n", yytext); } 
[a-zA-Z_][a-zA-Z0-9_]* { printf("IDENTIFIER: %s\n", yytext); } 
.                { printf("UNKNOWN: %s\n", yytext); } 

%%

int my_yywrap() {
    return 1; // End of input
}

int main(int argc, char **argv) {
    yylex(); 
    return 0;
}
