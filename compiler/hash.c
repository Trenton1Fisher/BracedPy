/*
THIS CODE WAS NOT WRITTEN BY ME,
THIS WAS GIVEN TO ME FROM MY PROFFESSOR IN MY TRANSLATORS CLASS
WITH GIVEN PERMISSION THAT IT IS OPEN FOR USE
*/

#include <stdlib.h>
#include <string.h>
#include <assert.h>

#include "hash.h"
#define INITIAL_CAPACITY 128

#define LOAD_FACTOR_THR 5

struct association {
  char* key;
  float value;
  struct association* next;
};



struct hash {
  struct association** table;
  unsigned int capacity;
  unsigned int num_elems;
};

void _hash_table_init(struct hash* hash, unsigned int capacity) {
  hash->table = malloc(capacity * sizeof(struct association*));
  assert(hash->table);
  memset(hash->table, 0, capacity * sizeof(struct association*));
  hash->capacity = capacity;
  hash->num_elems = 0;
}

struct hash* hash_create() {
  struct hash* hash = malloc(sizeof(struct hash));
  assert(hash);
  _hash_table_init(hash, INITIAL_CAPACITY);
  return hash;
}

void _association_free(struct association* assoc) {
  free(assoc->key);
  free(assoc);
}

void hash_free(struct hash* hash) {
  assert(hash);

  for (int i = 0; i < hash->capacity; i++) {
    struct association* next, * cur = hash->table[i];
    while (cur != NULL) {
      next = cur->next;
      _association_free(cur);
      cur = next;
    }
  }

  free(hash->table);
  free(hash);
}


float _hash_load_factor(struct hash* hash) {
  return hash->num_elems / (float)hash->capacity;
}

unsigned int _djb_hash(char* key) {
  unsigned long hash = 5381;
  int c;
  while ((c = *key++)) {
    hash = ((hash << 5) + hash) + c;  // hash * 33 + c
  }
  return hash;
}

void _hash_resize(struct hash* hash) {

  struct association** old_table = hash->table;
  unsigned int old_capacity = hash->capacity;
  _hash_table_init(hash, old_capacity * 2);

  for (int i = 0; i < old_capacity; i++) {
    struct association* cur = old_table[i];
    while (cur != NULL) {
      struct association* tmp = cur;
      hash_insert(hash, cur->key, cur->value);
      cur = cur->next;
      _association_free(tmp);
    }
  }

  free(old_table);
}


struct association* _association_create(char* key, float value) {
  struct association* assoc = malloc(sizeof(struct association));
  int l = strlen(key);
  assoc->key = malloc((l + 1) * sizeof(char));
  strncpy(assoc->key, key, l + 1);
  assoc->value = value;
  return assoc;
}


void hash_insert(struct hash* hash, char* key, float value) {
  assert(hash);
  assert(key);


  if (_hash_load_factor(hash) > LOAD_FACTOR_THR) {
    _hash_resize(hash);
  }


  unsigned int hashval = _djb_hash(key);
  unsigned int idx = hashval % hash->capacity;


  struct association* cur = hash->table[idx];
  struct association* prev = NULL;
  while (cur != NULL) {
    if (!strcmp(key, cur->key)) {
      break;
    }
    prev = cur;
    cur = cur->next;
  }

  if (cur != NULL) {

    cur->value = value;
  } else {

    cur = _association_create(key, value);
    if (hash->table[idx] != NULL) {
      cur->next = hash->table[idx];
    } else {
      cur->next = NULL;
    }
    hash->table[idx] = cur;
    hash->num_elems++;
  }
}


void hash_remove(struct hash* hash, char* key) {
  assert(hash);
  assert(key);

  unsigned int hashval = _djb_hash(key);
  unsigned int idx = hashval % hash->capacity;


  struct association* cur = hash->table[idx];
  struct association* prev = NULL;
  while (cur != NULL) {
    if (!strcmp(key, cur->key)) {
      break;
    }
    prev = cur;
    cur = cur->next;
  }

  if (cur != NULL) {
    if (prev != NULL) {
      prev->next = cur->next;
    } else {
      hash->table[idx] = cur->next;
    }

    _association_free(cur);
    hash->num_elems--;
  }
}


float hash_get(struct hash* hash, char* key) {
  assert(hash);
  assert(key);


  unsigned int hashval = _djb_hash(key);
  unsigned int idx = hashval % hash->capacity;


  struct association* cur = hash->table[idx];
  while (cur != NULL) {
    if (!strcmp(key, cur->key)) {
      return cur->value;
    }
    cur = cur->next;
  }


  return 0;
}



int hash_contains(struct hash* hash, char* key) {
  assert(hash);
  assert(key);


  unsigned int hashval = _djb_hash(key);
  unsigned int idx = hashval % hash->capacity;


  struct association* cur = hash->table[idx];
  while (cur != NULL) {
    if (!strcmp(key, cur->key)) {
      return 1;
    }
    cur = cur->next;
  }

  return 0;
}

struct hash_iter {
  struct hash* hash;
  struct association* next;
  int next_idx;
};


void _update_hash_iter_next(struct hash_iter* iter) {
  if (iter->next != NULL) {
    iter->next = iter->next->next;
  }
  if (iter->next == NULL) {
    int i = iter->next_idx + 1;
    while (i < iter->hash->capacity && iter->hash->table[i] == NULL) {
      i++;
    }
    if (i < iter->hash->capacity) {
      iter->next_idx = i;
      iter->next = iter->hash->table[i];
    }
  }
}


struct hash_iter* hash_iter_create(struct hash* hash) {
  assert(hash);
  struct hash_iter* iter = malloc(sizeof(struct hash_iter));
  iter->hash = hash;
  iter->next = NULL;
  iter->next_idx = -1;
  _update_hash_iter_next(iter);
  return iter;
}


void hash_iter_free(struct hash_iter* iter) {
  assert(iter);
  free(iter);
}


int hash_iter_has_next(struct hash_iter* iter) {
  assert(iter);
  return iter->next != NULL;
}


float hash_iter_next(struct hash_iter* iter, char** key_ptr) {
  assert(iter);
  assert(iter->next);
  struct association* curr = iter->next;
  _update_hash_iter_next(iter);
  if (key_ptr != NULL) {
    *key_ptr = curr->key;
  }
  return curr->value;
}