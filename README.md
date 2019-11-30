# 🐮 cowsays-action
Cowsays for Actions. Say things in your logs like a Cow.

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
  push

name: Cowsays

jobs:
  cow:
    name: Cowsays
    runs-on: ubuntu-latest
    steps:
    - name: Ship it
      uses: mscoutermarsh/cowsays-action@master
      with:
        text: 'ship ship ship!'
        color: 'red'
```

## Colors

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- gray
