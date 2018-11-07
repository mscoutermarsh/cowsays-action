FROM ruby:2

LABEL "name"="Cowsays Action"
LABEL "version"="1.0.0"

LABEL "com.github.actions.icon"="message-circle"
LABEL "com.github.actions.color"="blue"
LABEL "com.github.actions.name"="Cowsays"
LABEL "com.github.actions.description"="Say things with a cow"

RUN gem install ruby_cowsay

COPY cow.rb /bin/cowsay

ENTRYPOINT ["cowsay"]
