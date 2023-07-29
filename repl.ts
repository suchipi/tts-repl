#!/usr/bin/env yavascript
///<reference path="./yavascript.d.ts" />

cd(__dirname);

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

new InteractivePrompt((msg) => {
  if (msg.trim() === "") {
    return;
  }
  say(msg);
}).start();
