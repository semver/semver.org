# Copyright (C) 2019 Sebastian Pipping <sebastian@pipping.org>
# Licensed under the MIT license

FROM ruby:stretch

ENV LC_ALL=C.UTF-8
ENV LANG=en_US.UTF-8
ENV LANGUAGE=en_US.UTF-8

COPY \
        css/ \
        js/ \
        lang/ \
        _layouts/ \
        script/ \
        spec/ \
    \
        _config_local.yml \
        _config.yml \
        Gemfile \
        index.md \
    \
    /app/

WORKDIR /app/
RUN bundle install
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0"]
