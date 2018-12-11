# cowsays-action
Cowsays for GitHub Actions. This Action wraps the [ruby_cowsay](https://github.com/PatrickTulskie/ruby_cowsay) gem.

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

## Usage

```
workflow "Deploy Master" {
  on = "push"
  resolves = ["cow"]
}

action "cow" {
  uses = "mscoutermarsh/cowsays-action@master"
  args = "Ship it!!!!!"
}
```
