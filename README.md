# direct-delivery

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

[travis-url]: https://travis-ci.org/eHealthAfrica/direct-delivery
[travis-image]: https://img.shields.io/travis/eHealthAfrica/direct-delivery/develop.svg
[coveralls-url]: https://coveralls.io/r/eHealthAfrica/direct-delivery
[coveralls-image]: https://img.shields.io/coveralls/eHealthAfrica/direct-delivery/develop.svg
[codeclimate-url]: https://codeclimate.com/github/eHealthAfrica/direct-delivery
[codeclimate-image]: https://img.shields.io/codeclimate/github/eHealthAfrica/direct-delivery.svg

> User-centred direct delivery management system

## Quick start

0. Install [Node.js][] (>=0.10 <4, npm >=2 <3), [Git][], [CouchDB][] and [ImageMagick][]
1. `npm install -g gulp bower`
2. `git clone https://github.com/eHealthAfrica/direct-delivery.git`
3. `cd direct-delivery && npm install; bower install`
4. `gulp fixtures views`
5. `couchdb`
6. `gulp serve`
7. `open http://localhost:3000`

[Node.js]: http://nodejs.org
[Git]: http://git-scm.com
[CouchDB]: https://couchdb.apache.org
[ImageMagick]: http://imagemagick.org

## Documentation

See [docs](docs) for further documentation.

## Authors

* © 2015 Jideobi Ofomah <jideobi.ofomah@ehealthnigeria.org>
* © 2015 Tom Vincent <tom.vincent@ehealthnigeria.org> (https://tlvince.com)
* © 2015 Haykel Ben Jemia <hbj@allmas.tn>
* © 2015 Femi Oni <oluwafemi.oni@ehealthnigeria.org>
* © 2015 Musa Musa <musa.musa@ehealthnigeria.org>

… and [contributors][].

[contributors]: https://github.com/eHealthAfrica/direct-delivery/graphs/contributors

## License

Released under the [Apache 2.0 License][license].

[license]: http://www.apache.org/licenses/LICENSE-2.0.html
