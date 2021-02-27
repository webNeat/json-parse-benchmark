#include "simdjson.h"
using namespace simdjson::dom;

int main(void) {
  parser parser;
  array values = parser.load("../values.json");
  std::cout << values.size() << std::endl;
  return 0;
}