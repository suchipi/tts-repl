#!/usr/bin/env yavascript
///<reference path="./yavascript.d.ts" />

import * as std from "quickjs:std";

function say(phrase: string) {
  $([
    "aws",
    "polly",
    "synthesize-speech",
    "--output-format",
    "mp3",
    "--voice-id",
    "Ivy",
    "--text",
    phrase,
    "out.mp3",
  ]);
  $(["ffplay", "-autoexit", "-nodisp", "out.mp3"]);
}

while (true) {
  const line = std.in.getline();
  if (line == null) break;

  say(line);
}
