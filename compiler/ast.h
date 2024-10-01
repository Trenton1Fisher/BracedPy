#ifndef AST_H
#define AST_H

#include <stdio.h>
#include <stdlib.h>

typedef enum {
    AST_NO_CHILD,  
    AST_UNARY,     
    AST_BINARY,   
    AST_MULTICHILD
} ASTNodeType;

typedef struct ASTNode {
    ASTNodeType type;    
    struct ASTNode *left;    
    struct ASTNode *right;  
    struct ASTNode **children; 
    int child_count;      
    char *value;            
} ASTNode;


ASTNode *createNoChildNode(char *value);
ASTNode *createUnaryNode(char *value, ASTNode *child);
ASTNode *createBinaryNode(char *value, ASTNode *left, ASTNode *right);
ASTNode *createSingleNode(char *value);
void printAST(ASTNode *node, int indent);
void freeAST(ASTNode *node);

#endif
