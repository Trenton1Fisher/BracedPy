all: lexer

lexer: lex.yy.o
	gcc lex.yy.o -o lexer

lex.yy.o: lex.yy.c
	gcc -c lex.yy.c

# Target to run flex
lex.yy.c: lexer.l
	flex lexer.l

clean:
	rm -f lexer lex.yy.c lex.yy.o
