<?php

$values = json_decode(file_get_contents('../values.json'), true);
echo count($values), "\n";
