# 1 :id=h1n {docsify-ignore-all}
# Basics 

## <small>1.0</small> Haskell's Building Blocks

*Types,* *Values,* and *Functions,* are the basic building blocks of Haskell.
### Values
One may define **Values** as Atomic or Structured computable abstractions, **Expressions** are Atomic or Compound
abstractions which yield values through **Evaluation**; **Values** are
essentially **Expressions.** It's important to note that All Haskell values are first-class!  
```haskell
--  Atomic Value/Expressions.
    false
    2
    35.64
    'a'
    (+)         -- Addition
    floor       -- the arthematic function.
-- Structured Values/Expressions.
    "abc"       -- ['a', 'b', 'c']
    ('a', 41)
    []          -- the empty list.
-- Compund Values/Expressions
    1 + 5
    floor 5 2
    'a':"acd"
```
> Value identifiers **must** start with a lower case letter or `_`, and 
may contain letters, digits, `'`, or `_` only.   
### Types
**Types** group **Values** in sets, one can think of **Types** as **Value** descriptors; Haskell requires all **Values** to be typed.
As with **Values**, **Types** can be Atomic, or Structured.
```haskell
-- Atomic Value :: Atomic Type
    flase    :: Bool
    2        :: Int
    35.64    :: Float
    'a'      :: Char
    (+)      :: Int -> Int        -- to be accurate: Num -> Num, more on that later.
    floor    :: Int -> Int
-- Structured Value ::  Structured Type 
   "abc"     :: String =>> [Char] -- "abc" has Type String
   ('a', 41) ::  (Char, Int)
```
> I'm using `=>>` to denote an evaluation step.
#### Type Inference
Haskell is able to *infere* types; hence, it doesnt require explicit type declaration.
### Functions
```haskell
{-
   function type signature (optional)
   function name :: argument 1 -> ... -> argument n -> output
-}
    subOne :: Int  ->   int 
{-  
    function equation
    function head  =  function body
-}
    subOne     x   =   x - 1 
```

Note that everything left to the `->` symbol is a function's domain or input;
and everything to the right of `->` is a function's range or ouput. Thus,
a function with n arguments is in fact n functions; for instance, consider the
following function.
```haskell
    func_a :: Int -> Int -> Int
    func_a     x      y  =  x+y
```
`func_a` will be evaluted as follows:
```haskell
    func_a 1 2
    -- step 1
    func_a1 :: Int -> (Int -> Int)  --     ->      is right associative
   (func_a1 1) y = (1) + y          -- application is left  associative
    -- step 2
    func_a2 :: Int -> Int
   (func_a2 1+2) = (1 + 2)
    -- step 3 1+2 gets evaluted.
    3
```
in step one, a function with the domain `Int` and range `(int -> int)` is produced, that is
a function with one `Int` argument, which outputs the function in step two.   
Hence, the same notation between function arguments and its output is sensical.

#### Infix & Prefix Applications
binary functions can be placed in between the arguments, "Infix" notation,
or before the arguments, "Prefix" notation.
```haskell
    -- to convert an Infix function to Prefix, parenthesize it.
     5  +  6   -- Infix
    (+) 5  6   -- Prefix

    -- to conver a Prefix function to an Infix function, place it between ``
    func x y   -- Prefix
    x `func` y -- Infix

    -- backquoted functions are left associative.
    x `func` y  `func` z
=> (x `func` y) `func` z

```
> Haskell requires Prefix notation in Type signtures.
