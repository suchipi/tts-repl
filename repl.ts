#!/usr/bin/env yavascript
///<reference path="./yavascript.d.ts" />

cd(__dirname);

import * as std from "quickjs:std";

function say(phrase: string) {
  $([
    "aws",
    "polly",
    "synthesize-speech",
    "--output-format",
    "ogg_vorbis",
    "--voice-id",
    "Ivy",
    "--text",
    phrase,
    "out.ogg",
  ]);
  $(["ffplay", "-autoexit", "-nodisp", "out.ogg"]);
}

while (true) {
  const line = std.in.getline();
  if (line == null) break;

  say(line);
}
