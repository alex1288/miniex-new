<?php

$recepient = "korrida@bk.ru";
$sitename = "Мини экскаватор. твомз";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);
$text = trim($_GET["city"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nГород: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");