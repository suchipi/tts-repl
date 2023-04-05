just a little CLI app that makes speech from text

## prereqs

- [yavascript](https://github.com/suchipi/yavascript)
- [AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [ffplay](https://ffmpeg.org/ffplay.html)

## setup

- make a user in the AWS console (website) that can use Amazon Polly
- generate an access key for that user via the IAM app in the console
- run `aws configure` and paste in the values it gives you for access key id and secret access key. for region you can choose whatever's close to you
- clone this repo

## usage

- cd to this repo's folder
- ensure `yavascript`, `aws`, and `ffplay` are in your PATH env var
- run `./repl.ts`

## customization

You can change the line in `repl.ts` that says `"Ivy"` to another Amazon Polly voice as listed [here](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html)
