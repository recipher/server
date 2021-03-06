module.exports = function() {
  return function *(next) {
    this.context = {
      host: this.host
    , origin: this.origin
    , session: this.session
    , user: this.user
    , token: this.token
    };

    yield next;
  };
};