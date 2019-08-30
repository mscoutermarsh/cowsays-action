FROM ruby:2

RUN gem install ruby_cowsay

COPY cow.rb /bin/cowsay

ENTRYPOINT ["cowsay"]
