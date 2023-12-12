#!/usr/bin/env yavascript
///<reference path="./yavascript.d.ts" />

cd(__dirname);

let last = "";

function say(phrase: string) {
  if (!phrase.trim()) {
    return;
  }

  if (phrase !== last) {
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
  }
  $(["ffplay", "-autoexit", "-nodisp", "out.ogg"]);
  last = phrase;
}

new InteractivePrompt(say).start();
