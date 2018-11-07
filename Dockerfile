FROM ruby:2-slim

LABEL "name"="Cowsays Action"
LABEL "version"="1.0.0"

LABEL "com.github.actions.icon"="tag"
LABEL "com.github.actions.color"="blue"
LABEL "com.github.actions.name"="Cowsays"
LABEL "com.github.actions.description"="Say things with a cow"

ENV DOCKERVERSION=18.06.1-ce

COPY Gemfile Gemfile.lock ./

RUN bundle install --without=test

COPY cow.rb /bin/cow

ENTRYPOINT ["cow"]
CMD ["hello world"]
