/*
THIS CODE WAS NOT WRITTEN BY ME,
THIS WAS GIVEN TO ME FROM MY PROFFESSOR IN MY TRANSLATORS CLASS
WITH GIVEN PERMISSION THAT IT IS OPEN FOR USE
*/

#ifndef __HASH_H
#define __HASH_H


struct hash;

struct hash_iter;

struct hash* hash_create();
void hash_free(struct hash* hash)
void hash_insert(struct hash* hash, char* key, float value);
void hash_remove(struct hash* hash, char* key);
float hash_get(struct hash* hash, char* key);
int hash_contains(struct hash* hash, char* key);

struct hash_iter* hash_iter_create(struct hash* hash);
void hash_iter_free(struct hash_iter* iter);
int hash_iter_has_next(struct hash_iter* iter);
float hash_iter_next(struct hash_iter* iter, char** key_ptr);

#endif