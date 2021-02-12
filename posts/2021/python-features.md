---
title: "10 underused features of modern Python [incomplete]"
subtitle: ""
date: 2021-02-15
hidden: true
---

## Named tuple

```py
from typing import NamedTuple

class EnvParams(NamedTuple):
    name: str
    nr_agents: int
    mode: Literal["uniform", "relative"] = "uniform"

def get_params() -> EnvParams:
    return EnvParams(name="hello", nr_agents=42)
```

-   automatic constructor generation etc
-   strong typing
-   immutable
-   same memory usage as normal tuples
-   default values
-   more safety than tuples, access `params.name` like objects, order does not matter
-   compatible API with tuples

## Typing

A must if you're used to typed programming languages. Makes it much easier to read and understand code, as well as fixing a whole class of bugs.

Let's say you have some simple code to print a list of words:

```py
def show_words(list_of_words):
    for i, word in enumerate(list_of_words):
        print(f"word {i}: {word}")
```

```py
> show_words(["hello", "hi"])

word 0: hello
word 1: hi
```

Easy enough, right?

But what happens if that code is accidentally called with a string?

```py
show_words("hello")
word 0: h
word 1: e
word 2: l
word 3: l
word 4: o
```

Since iterating works for strings as well, the code works - but not as expected. In this example the issue is easy to find, but if for example you have a multidimensional list where each text is processed in some way and passed further along into a neural network, you might not find this issue for a very long time.

It's even worse because in python, chars are strings as well (e.g. `"a"[0][0][0] == "a"`), so you can have a nested loop of any depth that will still work when receiving a string.

The solution is simple:

```py
def show_lists(words: list[str]) -> None:
    # if you try to call this function with anything
    # that's *not* a list of strings, your IDE (and mypy)
    # will throw an error.
```

## F-strings

There's many ways to format strings in python, with the original one being [`%` formatting](https://stackabuse.com/python-string-interpolation-with-the-percent-operator/). But the best way since Python 3.7 is literal f-strings:

```py
def fn(x):
  return x * x

x = 5
print(f"for input {x:.1f}, {fn(x)=}")
```

Prints: `for input 5.0, fn(x)=25`

Similar to `"x is {x}".format(x=x)` but easier to read and write.
You can add simple expression inside the {}.
The special format specifier `f"{foo=}"` is the same as doing `f"foo={foo}"`

## Pathlib

```py
from pathlib import Path

mydir = Path("foo")

myfile = mydir / "filename.txt"
```

If you pass file paths around as strings, you have to figure out when to add slashes and when not to, and unless you always use `os.path.sep` your code will work differently depending on the OS. With pathlib, you can join paths using just the `/` operator, regardless of the OS of the user.

`Path`s have great methods for manipulating filenames that are much more readable than their `os.path` equivalents:

```py
myfile = Path("foo/filename.txt")
myfile.parent # Path("foo")
myfile.name # "filename.txt"
myfile.suffix # ".txt"
# replace file extension
myfile.with_suffix('.csv') # foo/filename.csv
```

`Path`s also have neat methods for opening / reading / writing files:

```py
myfile.write_text("hello")

if myfile.exists():
  with myfile.open("r") as f:
    # ...
    pass

text = (mydir / "input.txt").read_text()


for file in Path("foo").glob("*.txt"):
  # every txt file in foo/
  pass
```

## Relative imports

The following is fairly common python code:

```
import util

util.foo()
```

But what is `util`? It can be either a global module or a local file / directory. If there is a local file named `util.py`, it will shadow the corresponding module. This is a pretty common issue, and happens even to [experienced devs](https://github.com/pytorch/pytorch/issues/24807#issuecomment-524155619).

Instead, in my opinion you should always use relative imports if you want to import a relative module instead of global ones.

```py
from . import util
# or
from .util import foo
```

Sadly this ambiguity issue is not completely fixeable without a breaking change in python itself, and due to a bad design decision in the Python module system relative imports have [some issues when python files are loaded in a specific way called "script mode"](https://stackoverflow.com/a/28154841/2639190), which you will probably come across sooner or later.

## Ordered unordered dicts

Since Python 3.6, Python uses a more compact representation of dicts (and thus `kwargs`).
Since Python 3.7, it is guaranteed that dicts are always iterated over in insertion order.

This means that every dict is basically an `OrderedDict` except some utility functions are missing. This is really useful, because it means you can use normal dicts as ordered associative arrays.

```py
x = {
  "c": True,
  "b": False,
  "d": False
}
for key in x:
    # guaranteed to always go through keys in the order "c", "b", "d"!
```

## Multiprocessing

There's a ton of libraries for multithreading / multiprocessing in python, with varying degrees of magicness. But in Python 3, there's actually an integrated way to run a function on a large set of data quickly: [`multiprocessing.Pool`](https://docs.python.org/3/library/multiprocessing.html)

```py
def f(x):
    # expensive computation
    return x * x

from multiprocessing import Pool

with Pool() as p:
    for result in p.imap(f, [1, 2, 3], chunksize=100):
      # ... handle result
```

This code does the same as `for i in [1,2,3]: f(i)` except using all your CPU cores.

## Poetry

Here is all the stages of a Python developer's slow decent into madness:

1.  You write single file .py scripts without imports and functions. It's so easy to get so much done! You feel enlightened.
2.  You start splitting your code in multiple functions in .py files, and feel enlightened of how structured your code is now.
3.  You need to do some maths, so you learn about `pip` and run `pip install numpy` globally. You feel enlightened about how easy it is to use libraries. It's as easy as [import antigravity](https://xkcd.com/353/)!
4.  At some point you have some multiple projects that need different versions of some libraries. You learn about virtualenvs. You are confused about the difference between `venv`, `virtualenv`, `virtualenvwrapper`, but some random memorized commands works so you start using virtualenvs.
5.  You try to use some older library from GitHub. You learn about `setup.py` files and `requirements.txt` files, and you feel enlightened! This is how you define exactly what you need to run your program! The project you're trying to use has a requirements.txt file like this:

        pandas
        numpy

    So you eagerly run

    ```sh
    python -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
    ```

    Then you try running the project, but it turns out it actually also needs `sklearn`. So you try `pip install sklearn` only to realize that `sklearn` is actually a random package from someone else and to get `sklearn` you actually need to install `scikit-learn`. You realize that package names are not actually related to the names of python modules (except incidentally) and feel enlightened by the power!

    But the code still doesn't run, theer's some weird issue. After an hour of investigation, you find some obscure bug [caused by an incompatible change](http://blog.khinsen.net/posts/2017/11/16/a-plea-for-stability-in-the-scipy-ecosystem/) some time 5 years ago in numpy. You try some old numpy versions until you find one that works. You learn about semver and freezing, and you feel enlightened! The developer should have just put `numpy==1.10` into their requirements.txt!

6.  You find [something that recommends using Conda](https://pytorch.org/get-started/locally/). You are somewhat confused why the conda download is taking so long and eats up 2GB of bandwidth.
    After accepting a random EULA and having your shell changed prompt always say `(base) $`, you realize that in conda, everything is an env! It's so quick to add libraries, [even weird native ones](https://anaconda.org/anaconda/mkl) ! You feel enlightened.
7.  You read some documentation and call a python function, but the function does not exist. After some reading, you see that the package you installed via conda is an outdated version. You now understand that conda is a completely different package manager from pip, and that conda packages are actually managed by third parties, some of which are outdated, and many don't exist at all. You start using `pip` for some things and `conda` for other things, all in the same environment.
8.  The find out about the Official Modern Python Packaging tool [pipenv](https://pipenv.pypa.io/en/latest/)! Pipenv always and automatically manages a virtualenv with the exact dependencies as defined in a `Pipfile`, which is like a supercharged `requirements.txt`. It's amazing! Except you soon try to install a package and get a `Could not resolve dependencies` error. You google a while, and figure out that most pypi packages don't actually have correctly specified dependencies, and that pip just doesn't really care about that. You also find out that [pipenv only really pretended to be an official tool](https://chriswarrick.com/blog/2018/07/17/pipenv-promises-a-lot-delivers-very-little/).
9.  You find out about [poetry](https://python-poetry.org/). It's like pipenv but actually good! It only takes 2 minutes to resolve dependencies instead of 10! It even puts your virtualenv in `~/.cache` because it _really_ doesn't matter if it gets deleted!

## Typed Argparse

Argparse is a neat library to create a simple command line interface. But arguments are declared as strings, and the IDE can't know about them.

With [Typed-Argparse](https://github.com/swansonk14/typed-argument-parser), your arguments are parsed directly into a class instance!

![TAP example](https://raw.githubusercontent.com/swansonk14/typed-argument-parser/master/images/tap.png)
