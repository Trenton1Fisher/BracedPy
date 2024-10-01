#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ast.h" 

//Create Node functions used in bison files
ASTNode *createNoChildNode(char *value) {
    ASTNode *node = (ASTNode *)malloc(sizeof(ASTNode));
    node->type = AST_NO_CHILD;
    node->left = NULL;
    node->right = NULL;
    node->children = NULL;
    node->child_count = 0;
    node->value = strdup(value);
    return node;
}

ASTNode *createUnaryNode(char *value, ASTNode *child) {
    ASTNode *node = (ASTNode *)malloc(sizeof(ASTNode));
    node->type = AST_UNARY;
    node->left = child; 
    node->right = NULL; 
    node->children = NULL;
    node->child_count = 0;
    node->value = strdup(value); 
    return node;
}

ASTNode *createBinaryNode(char *value, ASTNode *left, ASTNode *right) {
    ASTNode *node = (ASTNode *)malloc(sizeof(ASTNode));
    node->type = AST_BINARY;
    node->left = left; 
    node->right = right; 
    node->children = NULL;
    node->child_count = 0;
    node->value = strdup(value); 
    return node;
}

ASTNode *createMultiChildNode(char *value, ASTNode **children, int count) {
    ASTNode *node = (ASTNode *)malloc(sizeof(ASTNode));
    node->type = AST_MULTICHILD;
    node->left = NULL;
    node->right = NULL;
    node->children = children; 
    node->child_count = count;
    node->value = strdup(value); 
    return node;
}

//Free memory
void freeAST(ASTNode *node) {
    if (node == NULL) return;

    if (node->left) freeAST(node->left);
    if (node->right) freeAST(node->right);

    if (node->type == AST_MULTICHILD) {
        for (int i = 0; i < node->child_count; i++) {
            freeAST(node->children[i]);
        }
        free(node->children); 
    }

    if (node->value) free(node->value);
    free(node);
}

//Print into stdout to output file to run and return code
void printAST(ASTNode *node, int indent) {
    if (node == NULL) return;

    for (int i = 0; i < indent; i++) {
        printf("  ");
    }

    switch (node->type) {
        case AST_NO_CHILD:
            printf("No Child Node: %s\n", node->value);
            break;
        case AST_UNARY:
            printf("Unary Node: %s\n", node->value);
            break;
        case AST_BINARY:
            printf("Binary Node: %s\n", node->value);
            break;
        case AST_MULTICHILD:
            printf("Multi-Child Node: %s\n", node->value);
            for (int i = 0; i < node->child_count; i++) {
                printAST(node->children[i], indent + 1);
            }
            break;
        default:
            printf("Unknown node type\n");
    }

    if (node->left) printAST(node->left, indent + 1);
    if (node->right) printAST(node->right, indent + 1);
}



