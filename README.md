# 🐮 cowsays-action
Cowsays for the latest version of GitHub Actions. This Action wraps the [ruby_cowsay](https://github.com/PatrickTulskie/ruby_cowsay) gem.

```
 _____________ 
< Ship it!!!!!! >
 ------------- 
      \   ^__^
       \  (oo)\_______
          (__)\       )\/\
              ||----w |
              ||     ||

```

## 🐄 Usage

```yml
on:
  push:

name: Cowsays

jobs:
  cow:
    name: Cowsays
    runs-on: ubuntu-latest
    steps:
    - name: Ship it
      uses: mscoutermarsh/cowsays-action@master
      with:
        text: ship ship ship!
```
