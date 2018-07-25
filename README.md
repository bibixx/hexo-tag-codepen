# hexo-codepen

[![NPM version][npm-downloads]][npm-url]
![CircleCI branch][circle-ci-build]
[![Dependencies][david-dm]][david-dm-url]

An even better version of [hexo-codepen][hexo-codepen-link].

> [Hexo] tag to embed code snippet from [CodePen]

## Install

Install using [npm][npm-url].

```bash
npm install hexo-codepen-v2 --save
```

or using [yarn][yarn-url]

```bash
yarn add hexo-codepen-v2
```

## Usage

Create [Embedded Pen] with following syntax:

    {% codepen slugHash default_tabs height width userId|anonymous|anon theme %}

## How to get arguments from CodePen embed

This is something generated by `CodePen`:

```html
<p data-height="300" data-theme-id="33713" data-slug-hash="mKEmpj" data-default-tab="html,result" data-user="yuanchuan" data-embed-version="2" data-pen-title="Flow #1" class="codepen">See the Pen <a href="https://codepen.io/yuanchuan/pen/mKEmpj/">Flow #1</a> by yuanchuan (<a href="https://codepen.io/yuanchuan">@yuanchuan</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
```

You can extract required arguments:

Field        | Value
-------------|--------
userId       | yuanchuan
slugHash     | mKEmpj
theme        | 33713
default_tabs | html,result
height       | 300
width        | This value should be adjusted according to your blog theme, by default it is `100%`

All of this settings except for slugHash can be set in `_config.yml` under `codepen` property.

```yml
codepen:
  userId: "yuanchuan"
  theme: "33713"
  default_tabs: "js,result"
  height: 500
  width: "100%"
```

## License

MIT

[homepage]: https://github.com/bibixx/hexo-tag-codepen
[hexo-codepen-link]: https://github.com/maliMirkec/hexo-tag-codepen

[npm-url]: https://npmjs.org/package/hexo-codepen-v2
[npm-downloads]: https://badgen.net/npm/dt/hexo-codepen-v2

[circle-ci-build]: https://badgen.net/circleci/github/bibixx/hexo-tag-codepen/master

[david-dm-url]: https://david-dm.org/bibixx/hexo-tag-codepen
[david-dm]: https://badgen.net/david/dep/bibixx/hexo-tag-codepen

[yarn-url]: https://yarnpkg.com/en/package/hexo-codepen-v2

[Hexo]: http://hexo.io/
[CodePen]: http://codepen.io/
[Embedded Pen]: http://blog.codepen.io/documentation/features/embedded-pens/
