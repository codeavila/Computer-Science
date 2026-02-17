# LeetCode - Guía General de Estructuras, Funciones y Patrones

Esta guía resume herramientas base de Python y patrones de pensamiento algorítmico que aparecen de forma repetida en problemas de LeetCode.

## 📌 Estructuras de datos clave

### `list`

Qué es:
- Colección ordenada y mutable.

Uso básico:

```py
nums = [10, 20, 30]
nums.append(40)      # [10, 20, 30, 40]
nums.pop()           # quita 40
print(nums[0])       # 10
print(len(nums))     # 3
```

Cuándo usarla:
- Recorridos secuenciales.
- Guardar resultados en orden.
- Trabajar con índices.

Variantes relacionadas:
- `tuple`: ordenada e inmutable.
- `array` (módulo `array`): más específico para tipos homogéneos.

### `set`

Qué es:
- Colección no ordenada de elementos únicos.

Uso básico:

```py
s = set([1, 2, 2, 3])
print(s)             # {1, 2, 3}
print(2 in s)        # True
s.add(4)
s.remove(1)
```

Cuándo usarlo:
- Validar existencia rápido (`x in s`).
- Eliminar duplicados.
- Intersecciones/uniones.

### `dict`

Qué es:
- Mapa clave -> valor (hashmap).

Uso básico:

```py
freq = {}
freq[5] = freq.get(5, 0) + 1
freq[7] = freq.get(7, 0) + 1
print(freq)          # {5: 1, 7: 1}
```

Métodos comunes:
- `get(k, default)`: lee sin error si no existe la clave.
- `items()`: recorre clave y valor.
- `keys()`: recorre claves.
- `values()`: recorre valores.
- `pop(k, default)`: elimina y devuelve.

Cuándo usarlo:
- Conteo de frecuencias.
- Búsqueda por clave en `O(1)` promedio.
- Complementos (`target - x`).

### `tuple`

Qué es:
- Colección ordenada e inmutable.

Uso básico:

```py
p = (2, 3)
print(p[0])          # 2
```

Cuándo usarla:
- Claves compuestas en `dict`.
- Datos que no deben cambiar.

## ⚙️ Funciones y sintaxis frecuentes

### `enumerate()`

```py
nums = [10, 20, 30]
for i, v in enumerate(nums):
    print(i, v)
```

Uso:
- Obtener índice y valor al mismo tiempo.

### `range()`

```py
for i in range(5):
    print(i)         # 0..4
```

Uso:
- Loops por índice/control de iteraciones.

### `sorted()` y `.sort()`

```py
nums = [3, 1, 2]
print(sorted(nums))  # [1, 2, 3]
nums.sort()          # modifica la lista original
```

Uso:
- Ordenar para aplicar punteros, búsquedas o agrupaciones.

### `max()`, `min()`, `sum()`

```py
nums = [3, 8, 2]
print(max(nums))
print(min(nums))
print(sum(nums))
```

Uso:
- Acumuladores y métricas globales.

### Módulo `%`

```py
print(130 % 60)      # 10
```

Uso:
- Ciclos, residuos, divisibilidad y complementos modulares.

### Comprensiones

```py
squares = [x * x for x in range(5)]
evens = {x for x in range(10) if x % 2 == 0}
```

Uso:
- Crear colecciones de forma compacta y clara.

## 🧠 Patrones algorítmicos frecuentes

### 1) Frecuencias con `dict`

Idea:
- Contar apariciones y luego consultar rápido.

Ejemplos:
- Two Sum
- 4Sum II
- Top K Frequent Elements

### 2) Existencia rápida con `set`

Idea:
- Reemplazar búsquedas repetidas en listas por `set`.

Ejemplos:
- Longest Consecutive Sequence
- Contains Duplicate

### 3) Complemento

Idea:
- Buscar lo que “falta” para cumplir una condición.

Ejemplos:
- `target - x`
- complemento modular como `(k - r) % k`

### 4) Dos punteros

Idea:
- Mover extremos o punteros según condiciones.

Ejemplos:
- Two Sum II
- Valid Palindrome
- Merge de arreglos ordenados

### 5) Sliding Window

Idea:
- Ventana dinámica para subarreglos/substrings.

Ejemplos:
- Longest Substring Without Repeating Characters
- Minimum Size Subarray Sum

### 6) Prefijos acumulados

Idea:
- Guardar sumas parciales para responder rangos rápido.

Ejemplos:
- Subarray Sum Equals K
- Range Sum Query

### 7) DFS/BFS (grafos y árboles)

Idea:
- Recorrido profundo (`DFS`) o por niveles (`BFS`).

Ejemplos:
- Number of Islands
- Binary Tree Level Order Traversal

### 8) Programación dinámica

Idea:
- Resolver subproblemas y reutilizar resultados.

Ejemplos:
- Climbing Stairs
- Coin Change
- House Robber

## 🧭 Señales para elegir estructura/patrón

- Si preguntas muchas veces “¿existe X?” -> `set`.
- Si cuentas ocurrencias -> `dict` de frecuencias.
- Si hay objetivo de suma -> patrón de complemento.
- Si hay subarreglo/subcadena continua -> sliding window o prefijos.
- Si hay decisiones por etapas -> programación dinámica.
- Si hay conexiones/vecinos -> DFS o BFS.

## 🎯 Enfoque de estudio recomendado

1. Entender el enunciado con tus palabras.
2. Definir qué operación se repite más (búsqueda, conteo, comparación).
3. Elegir estructura que haga esa operación más barata.
4. Validar con ejemplo pequeño manual.
5. Revisar complejidad de tiempo y espacio.

## 📚 Notas de estilo en LeetCode

- Respeta la firma de la función que pide la plataforma.
- Usa nombres descriptivos (`freq`, `result`, `left`, `right`).
- Evita estado en `self` si el problema no lo requiere.
- Prueba con casos borde: vacío, un elemento, duplicados, extremos.
