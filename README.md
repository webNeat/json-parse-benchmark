# JSON parse benchmark

I discovered [simdjson](https://github.com/simdjson/simdjson) and wanted to compare it to native JSON parsers of some languages I know. So I generated a big JSON file `values.json` which contains an array of 10^7 object, each object has two properties `a` and `b` whose values are integers in `[-1000, 1000]`:

```
[
  {"a":-746,"b":30},
  {"a":934,"b":797},
  {"a":-479,"b":412},
  ...
]
```

Then I wrote a program that reads that file and parses it then shows the length of the array. I wrote the same program using:

- C++ with the simdjson library.
- NodeJS using [simdjson port](https://github.com/luizperes/simdjson_nodejs)
- NodeJS with default `JSON.parse`
- NodeJS using `require('values.json')`
- PHP with default `json_decode`
- PHP with default `json.load`

## Running the benchmark

- Requirements: bash, g++, node, php, python.
- Clone this repository.
- `./build` to compile C++ code, install NodeJS dependecies, and generate the `values.json` file.
- `./run` to run the benchmark.

## Results

On my machine, I have the following results:

```
C++ simdjson
10000000

real    0m10,199s
user    0m9,792s
sys     0m0,400s
---
NodeJS default
10000000

real    0m4,097s
user    0m4,125s
sys     0m0,344s
---
NodeJS simdjson
10000000

real    0m16,376s
user    0m16,868s
sys     0m0,974s
---
NodeJS require
10000000

real    0m4,123s
user    0m4,134s
sys     0m0,342s
---
PHP default
10000000

real    0m5,240s
user    0m3,901s
sys     0m1,335s
---
Python3 default
10000000

real    0m4,571s
user    0m3,640s
sys     0m0,927s
```

The results show that simdjson is slower then the default alternatives, which is weird to me, so I created this repository as a reference to help the investigating what's happening.

